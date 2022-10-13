import axios from "axios";

export class BaseApiClient {
    constructor() {
        this.url = "https://themealdb.p.rapidapi.com"
        const obj = {
            baseURL: this.url,
            headers: {
                'X-RapidAPI-Key': '2d0a5332acmsh88d44e0ed45612ep19e5c5jsnaed4104eabeb',
                'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
            }
        }

        this.client = axios.create(obj)
    }

    get(url, params=null) {
        return this.client.get(url, {params: params})
    }
}