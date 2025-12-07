export const PUBLIC_PATHS: string[] = ["/login", "/register"];

export function isPublicPath(pathname: string): boolean {
    return PUBLIC_PATHS.some((publicPath: string) => pathname === publicPath || pathname.startsWith(`${publicPath}/`));
}
