export let API_URL_DEV:string = import.meta.env.VITE_API_URL;

export function isConnected():boolean{
    if (API_URL_DEV == undefined) {
        console.log("API URL is not connected")
        console.log(`API URL Link not connected: ${API_URL_DEV}`);
        return false;
    }

    console.log(`API URL is connected: url - ${API_URL_DEV}`);
    return true;
}