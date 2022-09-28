export function QueryUriEncoder<T>(baseUri: string, requestBody: T): string {
    let originalQueryUriComponent = "";
    type K = Array<keyof T>;
    const keys = Object.keys(requestBody) as K;
    keys.forEach((key, idx) => {
        if (idx !== 0) {
            originalQueryUriComponent += "&";
        }
        if (
            Object.prototype.toString.call(requestBody[key]) ===
            "[object Array]"
        ) {
            originalQueryUriComponent += `${key as string}=`;
            const arr = Object.values(requestBody[key]);
            arr.forEach((a, i) => {
                if (i !== 0) {
                    originalQueryUriComponent += ",";
                }
                originalQueryUriComponent += `${a}`;
            });
        } else {
            originalQueryUriComponent += `${key as string}=${requestBody[key]}`;
        }
    });
    const encodeQueryUri = `${baseUri}?${encodeURI(originalQueryUriComponent)}`;
    return encodeQueryUri;
}
export function QueryUriDecoder<T>(incomingUri: string): T {
    let result = {} as T;
    let splitQueryPart = decodeURI(incomingUri).split("?");
    if (splitQueryPart.length !== 0) {
        let queryParams = splitQueryPart[1].split("&");
        queryParams.forEach((qp) => {
            const kv = qp.split("=");
            if (kv.length === 2) {
                const key = kv[0];
                const value = kv[1].split(",");
                if (value.length === 1) {
                    result = { ...result, [key]: value[0] };
                } else {
                    result = { ...result, [key]: value };
                }
            }
        });
    }
    return result;
}
