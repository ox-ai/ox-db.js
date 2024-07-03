import { Oxdb, pushData } from "./db/log";
const oxDbInstance = new OxDb("http://127.0.0.1:8000");
oxDbInstance.push(pushData);

export { Oxdb, pushData };

