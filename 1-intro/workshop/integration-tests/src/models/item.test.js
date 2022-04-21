const Item = require("./Item");
const mongoose = require("mongoose");

const newItem = {
  name: "Pomme",
};

const badItem = {
  id: 1,
};

// beforeAll(async () => {
//   await mongoose.connect("mongodb://mongo:27017/docker-node-mongo", {
//     useNewUrlParser: true,
//   });
// });

describe("Item model", () => {
  it("Create Item", async () => {
    const validItem = new Item(newItem);
    expect(validItem.name).toBeDefined();
    expect(validItem.date).toBeDefined();
    expect(typeof validItem.name).toBe("string");
    expect(validItem.date).toBeInstanceOf(Date);
    validItem.save()
  });
  it("Doesn't Create", async () => {
    const notValidItem = new Item(badItem);
    expect(notValidItem.name).toBeUndefined();
    expect(notValidItem.date).toBeDefined();
    expect(notValidItem.date).toBeInstanceOf(Date);
    notValidItem.save()
  });
  it("Delete", async () => {
    const item = await Item(newItem)
    item.delete({name: "Pomme"})
  });
});
