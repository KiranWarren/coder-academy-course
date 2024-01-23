let { repeatMessage } = require("./app");

describe("repeatMessage functionality", () => {
  test("Repeat message is a function.", () => {
    expect(typeof repeatMessage).toBe("function");
  });
  test("If given 'hello' and 3 as inputs, repeatMessage will return 'hellohellohello'", () => {
    expect(repeatMessage("hello", 3)).toEqual("hellohellohello");
  });
});
