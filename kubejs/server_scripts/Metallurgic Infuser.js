// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
event.custom({
    "type":"mekanism:metallurgic_infusing",

    "itemInput":{"amount":1,"ingredient":{"item":"extrautilitiesrebirth:lunar_reactive_dust"}},

    "chemicalInput":{"amount":30,"tag":"mekanism:gold"},

    "output":{"item":"kubejs:energetic_gum","count":1}})
})
