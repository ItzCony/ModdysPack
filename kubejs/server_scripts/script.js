// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true



onEvent('recipes', event => {
    event.custom(
        {
            type: "mekanism:reaction",
            itemInput: {
                ingredient: {
                    item: 'draconicevolution:awakened_draconium_ingot'
                },
            },
            fluidInput: {
                fluid: 'kubejs:chaos_fluid',
                amount: 250
            },
            gasInput: {
                "gas": 'mekanism:sulfuric_acid',
                "amount": 250
            },
            energyRequired: 20000.0,
            duration: 200,
            itemOutput: {
                "item": 'kubejs:chaos_ingot.png',
              },
            gasOutput: {
                "gas": 'mekanism:spent_nuclear_waste',
                "amount": 10
            }
        })
	event.recipes.thermal.crucible(Fluid.of('kubejs:chaos_fluid', 250), 'draconicevolution:chaos_shard').energy(2500)
	})

	