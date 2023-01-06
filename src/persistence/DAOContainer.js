import config from "../utils/config.js";
import { DBConnect } from "../utils/db.js";

DBConnect(config.mongo_uri);

class DAOContainer {
    constructor(collection) {
        this.collection = collection;
    };

};

export default DAOContainer;