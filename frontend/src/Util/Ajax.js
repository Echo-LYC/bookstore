export const SERVICE_URL = 'http://192.168.1.112:8088';

export async function request(url, method, data) {
    url = SERVICE_URL + url;
    const requestInfo = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (method === "POST" || method === "PUT") {
        data = (data === undefined) ? {} : data;
        requestInfo.body = JSON.stringify(data);
    }
    const res = await fetch(url, requestInfo);
    res.data = await res.json();
    return res;
}
