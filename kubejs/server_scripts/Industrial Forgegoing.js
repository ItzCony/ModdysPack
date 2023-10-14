// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.smelting('industrialforegoing:plastic', 'industrialforegoing:dryrubber');
    event.remove({output: 'industrialforegoing:latex_processing_unit'}),
    event.remove({output: 'industrialforegoing:plastic'}),
    event.remove({output: 'industrialforegoing:dryrubber'}),
    event.remove({id: 'mekanism:reaction/substrate/ethene_oxygen'}),
    event.remove({id: 'mekanism:reaction/substrate/water_ethene'}),
    event.shapeless('industrialforegoing:dryrubber', ['9x industrialforegoing:tinydryrubber'])
 })

