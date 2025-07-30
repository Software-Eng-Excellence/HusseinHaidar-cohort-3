import { IItem } from "../IItem";
import { Order } from "../Order.model";
import logger from "../../util/logger";

export class OrderBuilder {
    private item!: IItem;
    private id!: string;
    private price!: number;
    private quantity!: number;

    static newBuilder(): OrderBuilder {
        return new OrderBuilder();
    }

    setitem(item: IItem): OrderBuilder {
        this.item = item;
        return this;
    }

    setQuantity(quantity: number): OrderBuilder {
        this.quantity = quantity;
        return this;
    }

    setId(id: string): OrderBuilder {
        this.id = id;
        return this;
    }

    setPrice(price: number): OrderBuilder {
        this.price = price;
        return this;
    }

    build(): Order {

        const required = [
            this.id,
            this.item,
            this.price,
            this.quantity
        ]

        for (const property of required) {
            if (property === undefined || property === null) {
                logger.error("error missing order properties");
                throw new Error("Missing required properties")
            }
        }
        return new Order(this.item, this.id, this.price, this.quantity)
    }
}