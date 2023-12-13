import  axios from  "axios"

export const axiosClient = axios.create({
    // baseURL: import.meta.env.BASE_URL_FOOD_API,
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
})


export const axiosClientLetter = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
})

export const axiosClientIngridient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
})


export default {
    axiosClient,
    axiosClientLetter,
    axiosClientIngridient
}