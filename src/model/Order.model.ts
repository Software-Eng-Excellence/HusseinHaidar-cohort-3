import { IItem } from "./IItem";
import { IOrder } from "./IOrder";

export class Order implements IOrder {
    private item: IItem;
    private id: string;
    private price: number;
    private quantity: number;

    constructor(item: IItem, id: string, price: number, quantity: number) {
        this.id = id;
        this.item = item;
        this.price = price;
        this.quantity = quantity
    }

    getItem(): IItem {
        return this.item;
    }
    getId(): string {
        return this.id;
    }
    getQuantity(): number {
        return this.quantity;
    }
    getPrice(): number {
        return this.price;
    }

}