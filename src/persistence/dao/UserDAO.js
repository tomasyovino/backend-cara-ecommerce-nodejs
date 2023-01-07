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

    async createUser(username, password, email) {
        try {
            const newUser = await UserModel({
                username,
                password,
                email
            });
            await newUser.save();
            
            return newUser;
        } catch (err) {
            console.log(err)
        };
    };

    async findUserByParam(param) {
        const user = await UserModel.findOne({$or: [{ username: param }, { email: param }]}, (err, user) => {
            if (err) console.log(err);
            if (!user) return console.log("Credential does not match with any user");
        }).clone();

        return user;
    };
};

export default UserDAO;