// Rest
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
}
console.log(typeof showProducts)
showProducts()
showProducts(10, "elma", "armut", "karpuz")

// Spread
console.log(Math.max(2, 54, 66, 23, 4))
let points = [2, 54, 66, 23, 4]
console.log(Math.max(points))
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H")

// Destructuring
let populations = [10000, 20000, 30000, [40000, 50000]]
let [low, medium, high, veryHigh, max] = populations
console.log(low)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(max)
let [low2, medium2, high2, [veryHigh2, max2]] = populations
console.log(veryHigh2)
console.log(max2)

function someFunction([low3], medium3) {
    console.log(low3)
    console.log(medium3)
}
someFunction(populations)
someFunction(populations, populations)

let category = { id: 1, name: "içecek" }
console.log(category.id)
console.log(category["name"])

let { id, name } = category
console.log(id)
console.log(name)

