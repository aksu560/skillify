/**
 * This is your JavaScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: Aleksi Väisänen
 */

// Import JavaScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log('foundry-skillify | Initializing foundry-skillify');

	// Assign custom classes and constants here
	
	
	// Preload Handlebars templates
	await preloadTemplates();

	// Register custom sheets (if any)
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function() {
	// Do anything after initialization but before
	// ready
	// Register custom module settings
	registerSettings();
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	for (const [key, value] of Object.entries(CONFIG.PF1.skills)) {
		const skillName = game.settings.get("foundry-skillify", key)
		if (skillName) {
			CONFIG.PF1.skills[key] = skillName;
		}
	}
	console.log("Skillify Ready");
});

// Add any additional hooks if necessary
