import { BookBuilder } from "../src/model/builders/Book.builder";

describe("Book Builder Testing", () => {

    it("Build the Book successfully", () => {
        // Arrange
        const bookBuilder = new BookBuilder();

        // Act
        const book = bookBuilder
            .setAuthor("author")
            .setBookTitle("title")
            .setFormat("format")
            .setGenre("genre")
            .setLanguage("English")
            .setPackaging("packaging")
            .setPublisher("publisher")
            .setSpecialEdition("specialEdition")
            .build()

        // Assert
        expect(book).toEqual({
            bookTitle: 'title',
            author: 'author',
            genre: 'genre',
            format: 'format',
            language: 'English',
            publisher: 'publisher',
            specialEdition: 'specialEdition',
            packaging: 'packaging'
        })
    })



    it("throw error when a property is missing", () => {
        // Arrange
        const bookBuilder = new BookBuilder();

        // Act
        try {
            const book= bookBuilder
            .setAuthor("author")
            .setBookTitle("title")
            .setFormat("format")
            .build()
        }
        catch (e: any) {
            // Assert
            expect(e.message).toEqual("Missing required properties")
        }
    })
})