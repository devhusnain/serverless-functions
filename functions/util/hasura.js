const fetch = require('node-fetch');

async function query({ query, variables = {}}) {
    const result = await fetch(process.env.HASURA_API_URL, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'x-Hasura-Admin-Secret':process.env.HASURA_ADMIN_SECRET
        },
        body: JSON.stringify({query, variables})
    })
    .then((response) => response.json());

    return result.data;

}

exports.query = query;