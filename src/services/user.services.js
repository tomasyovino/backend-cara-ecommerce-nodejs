import UserDAO from "../persistence/dao/UserDAO.js";

const userDAO = UserDAO.createInstance();

async function createUser(username, password, email) {
    try {
        return await userDAO.createUser(username, password, email);
    } catch (err) {
        console.log(err);
    };
};

async function findUserByParam(param) {
    return await userDAO.findUserByParam(param);
};

export { createUser, findUserByParam };