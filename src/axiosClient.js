import  axios from  "axios"

export const axiosClient = axios.create({
    // baseURL: import.meta.env.VITE_BASE_URL_FOOD_API,
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
})




export const axiosClientEdaman = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_EDAMAN,
    params: {
        app_id: import.meta.env.VITE_APP_ID,
        app_key: import.meta.env.VITE_APP_KEY,
        type: "public",
        cuisineType: "british",
    }
});


export const axiosClientEdamanAlcohol = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_EDAMAN,
    params: {
        app_id: import.meta.env.VITE_APP_ID,
        app_key: import.meta.env.VITE_APP_KEY,
        type: "public",
        health: "alcohol-cocktail",
    }
});

export const axiosClientEdamanMeal = axios.create({
    baseURL: 'https://api.edamam.com/api/recipes/v2/',
    params: {
        app_id: import.meta.env.VITE_APP_ID,
        app_key: import.meta.env.VITE_APP_KEY,
        type: "public",
    }
});


export default {
    axiosClient,axiosClientEdaman,axiosClientEdamanAlcohol,axiosClientEdamanMeal
}