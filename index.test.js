const { mooncakeSays } = require("./");

test("mooncake knows what to say", () => {
  expect(mooncakeSays("wooaaah")).toBe("(o.o) woooaaah");
});

test("mooncake is not sure what to say", () => {
  expect(mooncakeSays()).toBe("(o.o) chookity?");
});
