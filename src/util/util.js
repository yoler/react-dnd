function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
console.log(type([]));
console.log(type({}));
console.log(type(NaN));
console.log(type(null));
console.log(type(undefined));
console.log(type(Symbol()));

function deepClone(data) {
  let map = new Map();
  map.set(data, true);
  const clone = (data) => {
    const t = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    if (t !== "object" && t !== "array") {
      return data;
    }
    if (map.has(data)) {
      return data;
    }
    map.set(data, true);
    let target;
    if (t === "object") {
      target = {};
      for (let i in data) {
        if (data.hasOwnProperty(i)) {
          target[i] = clone(data[i]);
        }
      }
    } else {
      target = [];
      for (let i = 0; i < data.length; i++) {
        target[i] = clone(data[i]);
      }
    }
    return target;
  };

  return clone(data);
}

let a = { a: 1 };
let b = { b: a };
a.b = b;

let c = deepClone(2);

console.log(c);
