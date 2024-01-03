import {axiosClient} from "../axiosClient";
import {axiosClientEdaman} from "../axiosClient"; axiosClientEdamanAlcohol
import {axiosClientEdamanAlcohol} from "../axiosClient";
import {axiosClientEdamanMeal} from "../axiosClient";
import axios from "axios";

export function searhMeal({commit},keywords){
    axiosClient.get(`search.php?s=${keywords}`)
    .then(({data})=>{
        console.log('searhMealAction!!',data,data.meals)
        commit('setSearchMeals',data.meals)
    })
}

export function searhMealLetter({commit},keywords){
    axiosClient.get(`search.php?f=${keywords}`)
    .then(({data})=>{

        commit('searhedMealsLetter',data.meals)
    })
}

export function searhMealIngridients({commit},keywords){
    axiosClient.get(`filter.php?i=${keywords}`)
    .then(({data})=>{

        commit('searhedMealsIngridients',data.meals)
    })
}

export function searhedIngridients({commit},keywords){
    axiosClient.get(`list.php?i=list`)
    .then(({data})=>{

        commit('searhedIngridients',data)
    })
}
searhedIngridients

export function searhedMealsCategories({commit},keywords){
    axiosClient.get(`categories.php`)
    .then(({data})=>{

        commit('searhedMealsCategories',data)
    })
}

export function searhMealsRandom({commit}){
    axiosClient.get(`random.php`)
    .then(({data})=>{

        commit('searhedMealsRandom',data)
    })
    axiosClient.get(`random.php`)
    .then(({data})=>{

        commit('searhedMealsRandom',data)
    })
}


export function searhMealsLands({commit},land){
    axiosClientEdaman.defaults.params.cuisineType = land
    axiosClientEdaman.get()
        .then(({data})=>{
            commit('searhedMealsLands',data.hits)
        })
}


export function searhAlcohol({commit},land){
    axiosClientEdamanAlcohol.get()
        .then(({data})=>{
            commit('searhedMealsAlcohol',data.hits)
        })
}


export function earhedMealsEdaman({commit},param){
    axiosClientEdamanMeal.get( param )
        .then(({data})=>{
            console.log('eadamam',data);
            commit('earhedMealsEdaman',data)
        })
}


