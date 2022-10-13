const changeSkillName = (new_value, key, name) => {
	console.log(CONFIG.PF1.skills[key])
		if (new_value.length == 0) {
			console.log("Defaulting")
			CONFIG.PF1.skills[key] = name;
			return
		}
		CONFIG.PF1.skills[key] = new_value;
	}
export const registerSettings = function() {
	for (const [key, value] of Object.entries(CONFIG.PF1.skills)) {
		game.settings.register('foundry-skillify', key, {
			name: value,
			type: String,
			config: true,
			default: game.i18n.localize(value),
			onChange: (new_value) => changeSkillName(new_value, key, value)
		  });
	}
}
