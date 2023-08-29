import * as request from './requester.js';

// const baseUrl = 'http://localhost:3030/data/games';
const baseUrl = 'http://localhost:3030/jsonstore/games';

export async function getAll() {
    const result = await request.get(baseUrl);
    const games = Object.values(result); 

    return games;
}

export async function getOneById(id) {
    const result = await request.get(`${baseUrl}/${id}`);
    return result;
}

export async function create(data) {
    const result = await request.post(baseUrl, data);
    return result;
}