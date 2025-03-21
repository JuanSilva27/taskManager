import axios from "axios";

export const clientAxios = axios.create({
    baseUrl : `http://localhost:3000/api`
})