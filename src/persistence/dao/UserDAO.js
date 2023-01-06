import DAOContainer from "../DAOContainer.js";
import { UserModel } from "../../models/User.js";

let instance = null;

class UserDAO extends DAOContainer {
    constructor() {
        super(UserModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new UserDAO();
        };
        return instance;
    };
};

export default UserDAO;