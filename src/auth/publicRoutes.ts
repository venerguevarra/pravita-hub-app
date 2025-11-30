export const PUBLIC_PATHS: string[] = [
    "/login",
];

export function isPublicPath(pathname: string): boolean {
    return PUBLIC_PATHS.some(
        (publicPath: string) =>
            pathname === publicPath || pathname.startsWith(`${publicPath}/`),
    );
}
