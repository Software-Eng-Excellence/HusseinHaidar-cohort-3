import { Item, ItemCategory } from "./Item.model";

// export enum Language {
//     English = "English",
//     French = "French",
//     Arabic = "Arabic",
// }

export type Language = "Arabic"|"English" |"French"

export class Book implements Item {
    private bookTitle: string;
    private author: string;
    private genre: string;
    private format: string;
    private language: Language;
    private publisher: string;
    private specialEdition: string;
    private packaging: string;

    constructor(
        bookTitle: string,
        author: string,
        genre: string,
        format: string,
        language: Language,
        publisher: string,
        specialEdition: string,
        packaging: string
    ) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.genre = genre;
        this.format = format;
        this.language = language;
        this.publisher = publisher;
        this.specialEdition = specialEdition;
        this.packaging = packaging;
    }

    public getCategory(): ItemCategory {
        return ItemCategory.BOOK
    }
    public getBookTitle(): string {
        return this.bookTitle;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getGenre(): string {
        return this.genre;
    }

    public getFormat(): string {
        return this.format;
    }

    public getLanguage(): Language {
        return this.language;
    }

    public getPublisher(): string {
        return this.publisher;
    }

    public getSpecialEdition(): string {
        return this.specialEdition;
    }

    public getPackaging(): string {
        return this.packaging;
    }
}