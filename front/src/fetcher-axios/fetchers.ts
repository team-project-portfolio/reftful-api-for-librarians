import axios from "axios";
import { Book } from "../interface/interface";

let data: null | Book = null;

const axiosGet = async (url: string, id: string | null = null) => {
    return await axios.get(`${url}/${Number(id)}`);
};

const getData = (url: string, id: string | null = null) => {
    const res = axiosGet(url, id);
    res.then((res: { data: any; }) => data = res.data);
    console.log(data);
    return data;
}

export { axiosGet, getData };

