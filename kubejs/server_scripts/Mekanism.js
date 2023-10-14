// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.remove({output: 'mekanism:steel_casing'})
    event.remove({output: 'mekanism:metallurgic_infuser'})
    event.shaped('mekanism:steel_casing', [
        'IGI',
        'GAG',
        'IGI'
      ], {
        G: '#forge:glass',
        A: 'kubejs:energetic_gum',
        I: '#forge:plates/steel'
      })
      event.shaped('mekanism:metallurgic_infuser', [
        'IGI',
        'GOG',
        'IGI'
      ], {
        G: '#forge:glass',
        O: 'mekanism:block_osmium',
        I: '#forge:plates/steel'
      })
})