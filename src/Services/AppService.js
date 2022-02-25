
const baseUrl = 'https://localhost:7276/api/'

export const GetAppsWithVersion = async () => {
    const url = `${baseUrl}App/latest`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const apps = data.map(e => {
        return {
            id: e.id,
            key: e.id,
            nombre: e.nombre,
            version: e.appVersion1
        }
    });

    return apps;
}

export const GetApps = async () => {
    const url = `${baseUrl}App`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const apps = data.map(e => {
        return {
            id: e.id,
            key: e.id,
            nombre: e.nombre,
            version: e.appVersion1
        }
    });

    return apps;
}

export const AddApp = async (data) => {
    const url = `${baseUrl}App`;
    const resp = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

    return resp;
}

export const DownloadApp = async (data) => {
    const url = `${baseUrl}Descarga`;
    const resp = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

    return resp;
}
