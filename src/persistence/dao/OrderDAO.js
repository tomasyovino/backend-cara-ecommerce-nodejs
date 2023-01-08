import DAOContainer from "../DAOContainer.js";
import { OrderModel } from "../../models/Order.js";

let instance = null;

class OrderDAO extends DAOContainer {
    constructor() {
        super(OrderModel);
    };

    static createInstance() {
        if (!instance) {
            instance = new OrderDAO();
        };
        return instance;
    };

    async createOrder(obj) {
        try {
            const newOrder = new OrderModel(obj);
            const savedOrder = await newOrder.save();
            return savedOrder;
        } catch (err) {
            console.log(err)
        }
    };

    async findOrdersByUserId(userId) {
        try {
            const orders = await OrderModel.find({ userId });
            return orders;
        } catch (err) {
            console.log(err)
        };
    };

    async getOrdersStats(previousMonth) {
        try {
            const data = await OrderModel.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$amount"
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: "$sales" },
                    },
                },
            ]);
            return data;
        } catch (err) {
            console.log(err)
        };
    };
};

export default OrderDAO;