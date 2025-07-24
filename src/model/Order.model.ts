import { Item } from "./Item.model";

export interface Order {
    getItem(): Item
    getId(): string
    getQuantity(): number
    getPrice(): number
}