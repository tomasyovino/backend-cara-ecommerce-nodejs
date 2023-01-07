class UserDTO {
    constructor(data) {
        this._id = data._id;
        this.username = data.username;
        this.email = data.email;
        this.isAdmin = data.isAdmin;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    };
};

export default UserDTO;