import { JSONBookMapper } from "../src/mappers/Book.mapper";


describe("JSONBookMapper", () => {

    let mapper: JSONBookMapper;

    beforeAll(()=>{
        mapper = new JSONBookMapper();
    })

    it("Map Succesfully", () => {
        const book = {
          "Book Title": "CR7",
          "Author": "Hussein Haidar",
          "Genre": "Action",
          "Format": "format",
          "Language": "English",
          "Publisher": "Publisher",
          "Special Edition": "spec Ed",
          "Packaging": "pack"
        };
        const Mbook = mapper.map(book);
        expect(Mbook.getAuthor()).toBe("Hussein Haidar")
        expect(Mbook.getBookTitle()).toBe("CR7")

      })

      it("throws error if a field is missing", () => {
        const book = {
          "Book Title": "SE2",
        };

        expect(() => mapper.map(book)).toThrow("Missing required properties");
      });
    })