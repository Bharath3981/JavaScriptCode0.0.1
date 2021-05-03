
export const PROTOTYPE_INHERITIANCE = `Object.prototype.specialProperty = 123;
var a = new Object();
console.log('a object specialProperty: ', a.__proto__.specialProperty);
var b = {};
console.log('b object specialProperty: ', b.__proto__.specialProperty);
var c = b;
console.log('c object specialProperty: ', c.__proto__.specialProperty)`;

