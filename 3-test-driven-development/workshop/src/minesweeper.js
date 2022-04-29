class Game {
  constructor(grid, m = null, n = null, field = null) {
    const regex = /^[.|*]*$/

    if (grid === null) {
      throw 'You should put the right format of input'
    }

    let input = grid.split("\n").filter((item) => item !== "")

    let params = input.shift().split(" ")
    let template = input

    if (!grid.includes("*")) {
      throw "You should put bombs on the grid"
    }

    if (!grid.includes(".")) {
      throw "You put too many bombs"
    }

    if (params.length !== 2) {
      throw "Must have two characters"
    }

    let mTemp = parseInt(params[0])
    let nTemp = parseInt(params[1])

    if (isNaN(mTemp) || isNaN(nTemp)) {
      throw "First two characters must be integers"
    }

    if (mTemp < 0 || mTemp > 100) {
      throw "Parameter m is not good"
    }
    if (nTemp < 0 || nTemp > 100) {
      throw "Parameter n is not good"
    }

    if (template.length !== mTemp) {
      throw "Not the right amount of lines"
    }

    template.forEach((element) => {
      if (element.length !== nTemp) {
        throw "Not the right amount of characters on one or more lines"
      }

      if (!element.match(regex)) {
        throw "Not the right characters"
      }
    })

    this.m = mTemp
    this.n = nTemp
    this.field = template
  }

  transformToPlayableGrid() {
    let newField = []
    this.field.forEach(line => {
      newField = [...newField, line.split('')]
    });
    for (var i = 0; i < this.m; i++) {
      for (var j = 0; j < this.n; j++) {
        newField[i][j] = this.returnValue(i, j, newField)
      }
    }
    let fieldToSend = 'Field #1:\n' + newField.join('\n').replace(/,/g, '')
    return fieldToSend
  }

  returnValue(h, w, newField) {
    if (newField[h][w] != "*") {
      var value = 0
      for (var i = h - 1; i <= h + 1; i++) {
        for (var j = w - 1; j <= w + 1; j++) {

          if (i >= 0 && i < this.m && j >= 0 && j < this.n) {
            if (newField[i][j] == "*") {
              value += 1
            }
          }
        }
      }
      return value.toString()
    } else {
      return "*"
    }
  }
}

module.exports = {
  Game,
}

// class Game {
//   constructor(m, n, bombs) {
//     if (m < 0 || m > 100 ) {
//       throw 'Parameter m is not good';
//     }
//     if (n < 0 || n > 100 ) {
//       throw 'Parameter n is not good';
//     }

//     if (bombs >= (m * n)) {
//       throw 'The number of bombs is too high'
//     }

//     if (bombs < 0) {
//       throw 'You can\'t put negative numbers of bombs'
//     }

//     this.m = m
//     this.n = n
//     this.bombs = bombs

//   }

//   initializeGame(grid) {
//     let input = grid.split('\n').filter(item => item !== '')
//     console.log('🚀 ~ file: minesweeper.js ~ line 26 ~ Game ~ initializeGame ~ input', input);

//     let success = true;
//     const regex = /^[.|*]*$/

//     if (input.length !== this.m) {
//       return false
//     }

//     input.forEach(element => {
//       if (element.length !== this.n || !element.match(regex)) {
//         success = false
//         return
//       }
//     });

//     return success
//   }
// }
