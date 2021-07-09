export const registerSettings = function() {
	game.settings.register("foundry-cluster", "syncInterval", {
		name: "Synchronization Interval",
		hint: "How often the module checks for synchronization. Note: The game only synchronizes if no users are connected to the world.",
		scope: "client",
		type: Number,
		range: {
			min: 1,
			max: 120,
			step: 1
		},
		default: 10,
		config: true,
		onChange: (value) => {
			console.log("Set syncInterval to " + value);
		}
	});
}
