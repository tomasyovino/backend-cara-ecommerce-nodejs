class UserDTO {
    constructor(data) {
        this._id = data._id;
        this.username = data.username;
        this.email = data.email;
        this.admin = data.admin;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    };
};

export default UserDTO;