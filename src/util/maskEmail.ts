/**
 * Options to control how the email is masked.
 * All values are counts of visible characters, not indexes.
 */
export interface EmailMaskOptions {
    /** Visible chars at start of local part (before @). Default: 1 */
    localVisibleStart?: number;
    /** Visible chars at end of local part. Default: 1 */
    localVisibleEnd?: number;
    /** Visible chars at start of domain part (before first dot). Default: 1 */
    domainVisibleStart?: number;
    /** Mask character. Default: '*' */
    maskChar?: string;
}

/**
 * Mask an email address in a PII-safe way.
 * Example: "john.doe@example.com" -> "j***e@e******.com"
 *
 * Masking is irreversible (by design) and keeps only minimal structure.
 */
export function maskEmail(email: string, options: EmailMaskOptions = {}): string {
    const { localVisibleStart = 1, localVisibleEnd = 1, domainVisibleStart = 1, maskChar = "*" } = options;

    const trimmed = email.trim();

    // Basic validation – you can tighten this if needed.
    const atIndex = trimmed.indexOf("@");
    if (atIndex <= 0 || atIndex === trimmed.length - 1) {
        throw new Error("Invalid email address");
    }

    const local = trimmed.slice(0, atIndex);
    const domain = trimmed.slice(atIndex + 1);

    // Split domain into "name" and TLD/subdomains
    const domainParts = domain.split(".");
    if (domainParts.length < 2) {
        // No dot in domain; still mask as best we can
        return `${maskSegment(local, localVisibleStart, localVisibleEnd, maskChar)}@${maskSegment(
            domain,
            domainVisibleStart,
            0,
            maskChar,
        )}`;
    }

    const tld = domainParts.pop() as string; // last part (e.g., "com")
    const domainName = domainParts.join("."); // "example" or "mail.example"

    const maskedLocal = maskSegment(local, localVisibleStart, localVisibleEnd, maskChar);
    const maskedDomainName = maskSegment(domainName, domainVisibleStart, 0, maskChar);

    return `${maskedLocal}@${maskedDomainName}.${tld}`;
}

/**
 * Masks a string, preserving start and end portions.
 *
 * - visibleStart: number of characters to keep at the start.
 * - visibleEnd: number of characters to keep at the end.
 * - maskChar: character used for masking.
 */
function maskSegment(value: string, visibleStart: number, visibleEnd: number, maskChar: string): string {
    if (value.length === 0) return "";

    // Clamp values to avoid weird negative or excessive ranges
    const start = Math.max(0, Math.min(visibleStart, value.length));
    const end = Math.max(0, Math.min(visibleEnd, value.length - start));

    // If the segment is too short to meaningfully mask, return mask-only
    if (value.length <= start + end) {
        return maskChar.repeat(Math.max(1, value.length));
    }

    const prefix = value.slice(0, start);
    const suffix = end > 0 ? value.slice(-end) : "";
    const maskedLength = value.length - prefix.length - suffix.length;

    return prefix + maskChar.repeat(maskedLength) + suffix;
}
