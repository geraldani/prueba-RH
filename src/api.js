const BASE_URL = 'https://reqres.in/api/users';
const _OPTIONS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
};
async function callApi(endpoint = '') {
    const url = BASE_URL + endpoint;
    return await fetch(url, _OPTIONS)
        .then(response => response.json())
}
async function images(endpoint) {
    const data = await callApi(endpoint);
    let arr = [];
    data.data.forEach(e => {
        arr.push({
            image:e.avatar,
            id:e.id
        })
    });
    return arr;
}
function calculatePorcent(data) {
    let cont = 0;
    const _LIMIT = 12;
    data.forEach(e => {
        const wordLength = e.first_name.concat(e.last_name).length;
        if (wordLength > _LIMIT) cont++
    });
    return (cont * 100) / data.length
}
const api = {
    getData: () => callApi('?page=1'),
    porcent: n => calculatePorcent(n),
    getImages: number => images(`?page=${number}`)
};
export default api;