export const fileToBase64 = (file: File): Promise<unknown> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export const fileURLtoBase64 = (url: string): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = async () => {
            try {
                const file = await fileToBase64(xhr.response);
                resolve(file);
            } catch (err) {
                reject(err);
            }
        };

        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    });
};

export const base64ToFile = (dataurl: string, filename: string) => {
    const arr = dataurl.split(',');
    if (arr.length !== 2) {
        return null;
    }

    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    const n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n - 1) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
};
