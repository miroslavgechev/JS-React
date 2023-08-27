const baseUrl = 'http://localhost:3005/api/users';

export async function getAllUsers() {

    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
}

export async function getOneUser(id) {

    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();

    return result.user;
}

export async function createUser(data) {
    const { country, city, street, streetNumber, ...userData } = data;
    userData.address = { country, city, street, streetNumber }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const result = await response.json();

    return result.user;

}

export async function deleteUser(id) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
}

export async function updateUser(id, data) {
    const { country, city, street, streetNumber, ...userData } = data;
    userData.address = { country, city, street, streetNumber }

    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const result = await response.json();

    return result.user;

}
