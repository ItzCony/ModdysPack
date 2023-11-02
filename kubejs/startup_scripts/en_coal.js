// priority: 0


onEvent('item.registry', event => {
	event.create('en_coal').displayName('Energized Coal')
	event.create('fen_coal').displayName('Charged Coal')
})