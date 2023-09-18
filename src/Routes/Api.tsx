import axios, {AxiosPromise} from "axios"

const instance = axios.create({
    baseURL: `https://newsapi.org`
})

const RestApi = {
    GetNews: (
    ):AxiosPromise<any> =>
    instance({
        method: "GET",
        url: "/v2/everything?q=bitcoin&apiKey=b10fe2d101984448b6be3236b17e99a9"
    }),
    
}

export {RestApi}