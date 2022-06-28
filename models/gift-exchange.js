import { BadRequestError } from "../utils/errors";

class GiftExchange {
  static pairs() {
    if (names % 2 == 0) {
      var result = (
        game = (
          i = names.length / 2,
          xs = (ls = names) => {
            return ls.slice(0).sort(function () {
              return 0.5 - Math.random();
            });
          }
        ) => {
          let ps = xs();
          var a = ps.slice(0, i);
          var b = ps.slice(i, ps.length);
          return [a, b];
        }
      ) => {
        let games = game();
        return games[0].map(function (_, i) {
          return games.map(function (x) {
            return x[i];
          });
        });
      };

      let pairsOfArray = result();
      console.log(pairsOfArray);
      return pairsOfArray;
    } else {
      throw new BadRequestError("It's odd");
    }
  }
  static traditional() {
    if (names % 2 == 0) {
      let pairsOfArrays = [];

      var arr1 = names.slice(),
        arr2 = names.slice();

      arr1.sort(function () {
        return 0.5 - Math.random();
      });
      arr2.sort(function () {
        return 0.5 - Math.random();
      });

      while (arr1.length) {
        var name1 = arr1.pop(),
          name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();

        pairsOfArrays[arr1.length] = name1 + " is giving a gift to " + name2;
      }
      return pairsOfArrays;
      console.log(pairsOfArrays);
    } else {
      throw new BadRequestError("Numbes can't be odd pal");
    }
  }
}
export default GiftExchange;
