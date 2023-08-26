const baseUrl = 'http://localhost:3005/api/users';

export async function getAllUsers() {

    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
}
