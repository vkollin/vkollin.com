import {AxiosStatic} from "axios";

export class BaseRepository {
    constructor(protected axios: AxiosStatic) {
    }
}
