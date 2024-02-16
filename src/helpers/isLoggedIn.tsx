// Function to convert the presence of the token into a boolean (unused).
export function isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
}