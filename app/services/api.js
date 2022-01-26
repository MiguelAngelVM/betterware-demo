import axios from 'axios';

let local   = {
    enviroment_name:"local",
    url:"http://192.168.56.102:8000",
    bucket_img:"http://192.168.56.102:8000/img/"
}

let prod   = {
    enviroment_name:"local",
    url:"http://matchme.tennis",
    bucket_img:"http://matchme.tennis/img/"
}

let environment = prod;

export const URL             = environment.url
export const bucket_img      = environment.bucket_img
export const enviroment_name = environment.enviroment_name

export const _axios = axios.create({
    baseURL: URL,
    // timeout: 9000,
})
