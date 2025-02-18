import { TypeFilter } from "@/components/elements/Modal";

export default function ApiRequest(
    type: string,
    query: string,
    startDate: string,
    endDate: string
) {
    let api = "https://indonesia-public-static-api.vercel.app/api/heroes?";
    if (type === TypeFilter[1]) {
        api = api + `name=${query}`;
    } else if (type === TypeFilter[2]) {
        api = api + `q=${query}`;
    } else if (type === TypeFilter[3]) {
        api = api + `alive_in_start=${startDate}&alive_in_end=${endDate}`;
    } else if (type === TypeFilter[4]) {
        api = api + `birth_year_start=${startDate}&birth_year_end=${endDate}`;
    } else if (type === TypeFilter[5]) {
        api = api + `death_year_start=${startDate}&death_year_end=${endDate}`;
    } else if (type === TypeFilter[6]) {
        api = api + `ascend_year_start=${startDate}&ascend_year_end=${endDate}`;
    }
    return api;
}