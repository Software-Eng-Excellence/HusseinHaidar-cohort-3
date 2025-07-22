import { Item } from "./item.model";

export interface Order {
    getItem(): Item
    getId(): string
    getQuantity(): number
    getPrice(): number
}