// priority: 0


onEvent('item.registry', event => {
	event.create('purple_dust').displayName('Basic Dust')
	event.create('yellow_dust').displayName('Advanced Dust')
	event.create('red_dust').displayName('Elite Dust')
})