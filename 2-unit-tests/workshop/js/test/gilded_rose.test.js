const {Shop, Item} = require("../src/gilded_rose");
const fixture = require("./texttest_fixture");


describe("Gilded Rose", function() {

  let shop;

  beforeAll(() => {
    shop = fixture.gildedRose;
  })

  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("all sellIn", function() {
    shop.items.forEach(item => {
      expect(item.sellIn).toBeDefined();
    });
  })

  it("all quality", function() {
    shop.items.forEach(item => {
      expect(item.quality).toBeDefined();
    });
  })

});
