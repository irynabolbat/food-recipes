import {BaseApiClient} from "./baseApiClient";

class SearchApiClient extends BaseApiClient {
    getMealByName(mealName) {
        return this.get("search.php", {s: mealName})
    }
}

export const searchApiClient = new SearchApiClient()