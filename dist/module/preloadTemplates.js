export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "modules/foundry-cluster/templates"
	];

	return loadTemplates(templatePaths);
}
