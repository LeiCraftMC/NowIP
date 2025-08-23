import { ConfigHandler } from "../utils/config";
import { Logger } from "../utils/logger";

export default defineNitroPlugin(async () => {

	// const config = await ConfigHandler.loadConfig();
    // if (!config) {
    //     Logger.error("Error getting config");
    //     process.exit(1);
    // }
	// Logger.log('Config loaded');

    // if (config.logLevel) {
    //     Logger.setLogLevel(config.logLevel);
    // }

    
    Logger.log('DB initialized');

});