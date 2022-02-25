
const baseUrl = 'https://localhost:7276/api/'

export const AddVersion = async (data) => {
    const url = `${baseUrl}AppVersion`;

    console.log(data);
    
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