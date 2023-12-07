const m1 = { default: { M1: [] }, m3: [] }
const m2 = { M1: [] }
console.log(Object.keys({...m1, ...m1.default}))
console.log(Object.keys(...m2, ...m2.default))