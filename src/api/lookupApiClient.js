import {BaseApiClient} from "./baseApiClient";

class LookupApiClient extends BaseApiClient {
    getDetailsById(mealId) {
        return this.get("/lookup.php", {i: mealId})
    }

    getRandomMeals(){
        return this.get("/randomselection.php")
    }
}

export const lookupApiClient = new LookupApiClient()