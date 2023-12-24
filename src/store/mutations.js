export  function setSearchMeals(state,meals){
    console.log('searhMealMutation',meals)
    state.searhedMeals = meals
}


export  function searhedMealsLetter(state,meals){
    state.searhedMealsLetter = meals
}

export  function searhedMealsIngridients(state,meals){
    state.searhedMealsIngridients = meals
}

export  function searhedIngridients(state,meals){
    
    state.searhedIngridients = meals.meals

}




export  function searhedMealsCategories(state,meals){
    state.searhedMealsCategories = meals
}

export  function searhedMealsLands(state,meals){
    state.searhedMealsLands = meals
}

export  function searhedMealsRandom(state,meals){
    state.searhedMealsRandom.push(...meals.meals) 

}

export  function searhedMealsAlcohol(state,meals){
    state.searhedAlcohol = meals
}

export  function earhedMealsEdaman(state,meals){
    state.earhedMealsEdaman = meals.recipe
}