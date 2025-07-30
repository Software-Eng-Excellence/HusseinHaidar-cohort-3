import { IItem } from "./IItem";

export interface IOrder {
    getItem(): IItem
    getId(): string
    getQuantity(): number
    getPrice(): number
}