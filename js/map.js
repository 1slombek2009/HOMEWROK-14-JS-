// map-weakmap-1



// let obj = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
//   ["d", 4],
// ]);

// function deleteMany(...keys) {
//   keys.forEach((key) => obj.delete(key));
// }

// deleteMany("a", "c");
// console.log(obj);




// map-weakmap-2



// let obj = new Map([
//   ["a", 2],
//   ["b", 5],
//   ["c", 3],
// ]);

// function mapSum(obj) {
//   let sum = 0;
//   obj.forEach((value) => (sum += value));
//   return sum;
// }

// console.log(mapSum(obj));




// map-weakmap-3



// let map1 = new Map([
//   ["apple", 1],
//   ["banana", 2],
//   ["orange", 3],
// ]);
// let map2 = new Map([
//   ["apple", 4],
//   ["orange", 5],
//   ["grape", 6],
// ]);

// function getMapIntersection(map1, map2) {
//   let intersection = new Map();
//   map1.forEach((value, key) => {
//     if (map2.has(key)) {
//       intersection.set(key, map2.get(key));
//     }
//   });
//   return intersection;
// }

// console.log(getMapIntersection(map1, map2));




// map-weakmap-4



// let obj = new WeakMap([
//   [{ id: 1 }, "John"],
//   [{ id: 2 }, "Jane"],
//   [{ id: 3 }, "Alice"],
// ]);

// Object.defineProperty(WeakMap.prototype, "size", {
//   get: function () {
//     let count = 0;
//     this.forEach(() => count++);
//     return count;
//   },
// });

// console.log(obj.size);




// set-weakset-1



// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// function setUnion(set1, set2) {
//   return new Set([...set1, ...set2]);
// }

// console.log(setUnion(set1, set2));




// set-weakset-2



// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// function setIntersection(set1, set2) {
//   let intersection = new Set();
//   set1.forEach((value) => {
//     if (set2.has(value)) {
//       intersection.add(value);
//     }
//   });
//   return intersection;
// }

// console.log(setIntersection(set1, set2));




// set-weakset-3



// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);

// function checkSetSubset(set1, set2) {
//   for (let value of set1) {
//     if (!set2.has(value)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkSetSubset(set1, set2));




// spread-operator-1



// let arr = [1, 2, 2, 3, 4, 4, 5];

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));




// spread-operator-2



// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];

// function mergeArr(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// console.log(mergeArr(arr1, arr2));




// spread-operator-3



// function concatArrays(...arrays) {
//   return [].concat(...arrays);
// }

// console.log(concatArrays([1, 2], [3, 4], [5, 6]));
