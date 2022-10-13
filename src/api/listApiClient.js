import {BaseApiClient} from "./baseApiClient";

class ListApiClient extends BaseApiClient {
    getMealCategories() {
        return this.get('/categories.php')
    }

    getMealAreas() {
        return this.get("/list.php", {a: 'list'})
    }
}

export const listAliClient = new ListApiClient()