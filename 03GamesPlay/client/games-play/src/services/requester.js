async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    }

    if (data !== undefined) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    // const user = getUserData();
    // if (user) {
    //     const token = user.accessToken;
    //     options.headers['X-Authorization'] = token;
    // };


    try {
        const response = await fetch(url, options);

        // if (!response.ok) {

        //     if (response.status === 403) {
        //         clearUserData()
        //     }

        //     const error = await response.json();
        //     throw new Error(error.message);
        // }

        // if (response.status === 204) {
        //     return response;
        // };

        return await response.json();

    } catch {
        return {};
        // alert(err.message);
        // throw err;
    }

}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');