import {axiosClient} from "../axiosClient";


export function searhMeal({commit},keywords){
    axiosClient.get(`search.php?s=${keywords}`)
    .then(({data})=>{
        console.log(data)
        commit('setSearchMeals',data.meals)
    })
}

export function searhMealLetter({commit},keywords){
    axiosClient.get(`search.php?f=${keywords}`)
    .then(({data})=>{
        console.log('searhMealLetter',data)
        commit('searhedMealsLetter',data.meals)
    })
}

export function searhMealIngridients({commit},keywords){
    axiosClient.get(`filter.php?i=${keywords}`)
    .then(({data})=>{
        console.log('searhMealIngri',data)
        commit('searhedMealsIngridients',data.meals)
    })
}






// import axios from "axios";

// export default {
//     actions: {
//         async getPost({state,commit}) {

//             try {
                
//                 let data = await axios.get(
//                     "https://jsonplaceholder.typicode.com/posts", {
//                         params: {
//                             _page: state.page,
//                             _limit: state.limit,
//                         },
//                     }
//                 );
//                 commit('setPost',data.data)
//             } catch {
//                 console.log("err");
//             } finally {
//                 // this.isPostLoading = true;
//             }
//         },
//     },
//     namespaced: true,
// }

