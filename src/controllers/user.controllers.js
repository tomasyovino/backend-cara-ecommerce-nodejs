import { createUser, findUserByParam } from "../services/user.services.js";
import UserDTO from "../persistence/dto/UserDTO.js";
import bcrypt from "bcrypt";

async function createUserController(username, password, email) {
    try {
        const hashedPassword = await bcrypt.hash(password, 8);
        return await createUser(username, hashedPassword, email);
    } catch (err) {
        console.log(err);
    }
};

async function authenticateUserController(param, password, res) {
    try {
        const user = await findUserByParam(param);
        if(user) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) res.status(500).json(err);
                if (isMatch) {
                    const secureUser = new UserDTO(user)
                    return res.status(201).json(secureUser);
                }; 
                return res.status(401).json({ message: "The user password is wrong"});
            });
        } else {
            res.status(401).json({ message: "No user found" });
        };
    } catch (err) {
        console.log(err);
    };
};

export { createUserController, authenticateUserController };