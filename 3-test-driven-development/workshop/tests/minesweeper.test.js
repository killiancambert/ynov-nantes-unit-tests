const { Game } = require("../src/minesweeper")

const grid = "4 4\n*...\n....\n.*..\n....\n"

describe("Minesweeper", () => {
  describe("Input", () => {
    it("should be a 2*3 field", () => {
      const game = new Game("2 3\n.*.\n..*\n")
      expect(game.m).toBe(2)
      expect(game.n).toBe(3)
    })

    it("should have two integers on first line", () => {
      const t = () => {new Game("2\n.*.\n..*\n")}
      const t2 = () => {new Game("2 A\n.*.\n..*\n")}
      const t3 = () => {new Game("2 3\n.*.\n..*\n")}

      expect(t).toThrowError('Must have two characters')
      expect(t2).toThrowError('First two characters must be integers')
      expect(t3).not.toThrowError()

    })

    it("should have M lines and N characters per line", () => {
      const t = () => {new Game("2 3\n.*.\n..*\n")}
      const t2 = () => {new Game("2 3\n.*.\n..*.\n")}
      const t3 = () => {new Game("2 3\n.*.\n")}

      expect(t).not.toThrowError()
      expect(t2).toThrowError('Not the right amount of characters on one or more lines')
      expect(t3).toThrowError('Not the right amount of lines')
    })

    it("should only have '.' and '*'", () => {
      const t = () => {new Game("2 3\n.*.\n..*\n")}
      const t2 = () => {new Game("2 3\n.*.\n..e\n")}

      expect(t).not.toThrowError()
      expect(t2).toThrowError('Not the right characters')
    })

    it("should be greater or equal than 0 and lower than 100", () => {
      const t = () => {
        new Game("150 50\n.*.\n..*\n")
      }
      const t2 = () => {
        new Game("50 150\n.*.\n..*\n")
      }
      const t3 = () => {
        new Game("-5 10\n.*.\n..*\n")
      }
      const t4 = () => {
        new Game("10 -5\n.*.\n..*\n")
      }
      const t5 = () => {
        new Game("2 3\n.*.\n..*\n")
      }

      expect(t).toThrowError("Parameter m is not good")
      expect(t2).toThrowError("Parameter n is not good")
      expect(t3).toThrowError("Parameter m is not good")
      expect(t4).toThrowError("Parameter n is not good")
      expect(t5).not.toThrowError()
    })

    it("should have bombs on the grid", () => {
      const t = () => {new Game("2 3\n.*.\n..*\n")}
      const t2 = () => {new Game("2 3\n...\n...\n")}
      const t3 = () => {new Game("2 3\n***\n***\n")}

      expect(t).not.toThrowError()
      expect(t2).toThrowError('You should put bombs on the grid')
      expect(t3).toThrowError('You put too many bombs')
    })
  })

  describe('Output', () => {
    it("should be the same grid", () => {
      const game = new Game("4 4\n*...\n....\n.*..\n....")
      const grid = 'Field #1:\n*100\n2210\n1*10\n1110'

      let field = game.transformToPlayableGrid();
      expect(field).toBe(grid)
    })
  })
})
