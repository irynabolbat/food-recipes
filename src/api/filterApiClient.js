import {BaseApiClient} from "./baseApiClient";

class FilterApiClient extends BaseApiClient {
    getDishesByCategory(dishCategory) {
        return this.get("filter.php", {c: dishCategory})
    }

    getDishesByArea(dishArea) {
        return this.get("filter.php", {a: dishArea})
    }
}

export const filterAliClient = new FilterApiClient()