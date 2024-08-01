const items = [1,[2,[3,[4]]]];
const newItems = (require('lodash')).flattenDeep(items);
console.log(newItems);
