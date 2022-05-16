import sut from "../src/index.js"


describe("The tests for sum", () => {
    it("should subtract 2 numbers if a < b", () => {
        //arrange
        const a = 3
        const b = 5
        const expected = 2
        //action
        const actual = sut(a, b)
        //assert
        expect(actual).toBe(expected)
    }) 
    it("Should fail with a string input", () => {
        //Arrange
        const a = "str", b = 5, expected = "Bad Input"
        //Act
        const actual = sut(a, b)
        //Assertion
        expect(actual).toBe(expected)
    })
})


