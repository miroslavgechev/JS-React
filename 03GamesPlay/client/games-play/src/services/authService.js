import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/users';

export async function login(data) {
    return await request.post(`${baseUrl}/login`, data);
}