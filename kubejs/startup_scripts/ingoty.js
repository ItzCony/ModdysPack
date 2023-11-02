// priority: 0


onEvent('item.registry', event => {
	event.create('ingot_sun').displayName('Sun Ingot'),
	event.create('brown_slime').displayName('Brown slime Ingot'),
	event.create('devil_ingot').displayName('Devil Ingot'),
	event.create('slime_ingot').displayName('Green slime Ingot'),
	event.create('chaos_ingot.png').displayName('Chaos Ingot')
})