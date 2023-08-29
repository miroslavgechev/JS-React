import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export async function createComment(data) {
    const result = await request.post(baseUrl, data);
    
    return result
}

export async function getAllCommentsByGameId(gameId) {

    const query = encodeURIComponent(`gameId="${gameId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result)

    return comments;
}

export async function addComment(gameId, data){
    const result = await request.post(`${baseUrl}/${gameId}/comments`, data);

    return result;
}