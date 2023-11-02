// priority: 0


onEvent('item.registry', event => {
	event.create('chaotic_processor').displayName('Chaotic Processor')
	event.create('gas_processor').displayName('Isolated Processor')
	event.create('draconic_processor').displayName('Draconic Processor')
	event.create('wyvern_processor').displayName('Wyvern Processor')
})