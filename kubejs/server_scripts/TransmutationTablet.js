// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
    event.remove({output: 'projecte:transmutation_table'})
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'ABCCCCCBA',
            'BADEFEDAB',
            'CDGHIHGDC',
            'ADHJKJHDA',
            'CAFLMLFAC',
            'ADHJKJHDA',
            'CDGHIHGDC',
            'BADEFEDAB',
            'ABCCCCCBA'
          ],
        key: {
            A: 'kubejs:chaos_ingot.png',
            B: 'draconicevolution:chaotic_core',
            C: 'draconicevolution:awakened_draconium_block',
            D: 'mysticalagriculture:supremium_essence',
            E: 'bloodmagic:voidsigil',
            F: 'avaritia:infinity_ingot',
            G: 'draconicevolution:chaos_shard',
            H: 'botania:quartz_elven',
            I: 'avaritia:infinity_block',
            J: 'twilightforest:fiery_block',
            K: 'avaritia:infinity_catalyst',
            L: 'extendedcrafting:ultimate_singularity',
            M: 'projecte:philosophers_stone'
            
        },
        result: 'projecte:transmutation_table'
    })
})