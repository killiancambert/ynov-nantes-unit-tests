const { Shop, Item } = require("../src/gilded_rose");
const gildedRose = require("./texttest_fixture");


describe("Gilded Rose", function () {

  let shop;

  beforeAll(() => {
    shop = gildedRose;
  })

  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("all sellIn", function () {
    shop.items.forEach(item => {
      expect(item.sellIn).toBeDefined();
    });
  })

  it("all quality", function () {
    shop.items.forEach(item => {
      expect(item.quality).toBeDefined();
    });
  })

  it("Last day", function () {
    const gildedRose = new Shop([new Item("foo", 5, 10), new Item("bar", 10, 15)]);
    const initialGildedRose = gildedRose
    gildedRose.updateQuality()
    for (let i = 0; i < gildedRose.length; i++) {
      expect(initialGildedRose[i].sellIn - gildedRose[i].sellIn).toBe(1)
    }
  });

  it("Sell in expired", function () {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toBe(8)
  });

  it("Negative quality", function () {
    const gildedRose = shop
    gildedRose.updateQuality()
    gildedRose.items.forEach(item => {
      expect(item.quality).not.toBeLessThan(0)
    });
  })



  it("Aged Brie", function () {
    const initialGildedRose = new Shop([new Item("Aged Brie", 5, 10), new Item("Aged Brie", -1, 50)]);
    const gildedRose = new Shop([new Item("Aged Brie", 5, 10), new Item("Aged Brie", -1, 50)]);
    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toBeGreaterThan(initialGildedRose.items[0].quality)

    expect(gildedRose.items[1].quality).toBe(50);
  })

  it("Quality greater than 50", function () {
    const initialGildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
    initialGildedRose.updateQuality()
    expect(initialGildedRose.items[0].quality).toBeLessThanOrEqual(50)
  })

  it("Sulfuras", function () {
    const initialGildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    initialGildedRose.updateQuality()
    expect(initialGildedRose.items[0].quality).toBe(80)
  })

  it("Backstage Passes", function () {
    const initialGildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 21),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49)
    ])
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 21),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49)
    ])

    gildedRose.updateQuality()

    expect(gildedRose.items[0].quality).toBe(initialGildedRose.items[0].quality + 1)
    expect(gildedRose.items[1].quality).toBe(initialGildedRose.items[1].quality + 2)
    expect(gildedRose.items[2].quality).toBe(initialGildedRose.items[2].quality + 3)
    expect(gildedRose.items[3].quality).toBe(0)
  })

});
