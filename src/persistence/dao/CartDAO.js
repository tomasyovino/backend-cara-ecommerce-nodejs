import DAOContainer from "../DAOContainer.js";
import { CartModel } from "../../models/Cart.js";

let instance = null;

class CartDAO extends DAOContainer {
    constructor() {
        super(CartModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new CartDAO();
        };
        return instance;
    };
};

export default CartDAO;