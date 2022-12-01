const user = {
    name: 'Johanna Pearson',
    login: 'johanna_pearson',
}

/**
 * 1) Optional Chaining Operator
 */
console.log(user?.email) // output: undefined
console.log(user?.getName?.()) // output: undefined

user.email = 'johanna_pearson@example.com'
user.getName = () => user.name

console.log(user?.email) // output: johanna_pearson@example.com
console.log(user?.getName?.()) // output: Johanna Pearson


/**
 * 2) Nullish coalescing assignment
 */
console.log(user.address) // output: undefined
user.address ??= '28202, North Carolina, Charlotte, 267 Broadcast Drive'
console.log(user.address) // output: 28202, North Carolina, Charlotte, 267 Broadcast Drive
user.address ??= ' 67451, Kansas, 2993 Nicholas Street'
console.log(user.address) // output: 28202, North Carolina, Charlotte, 267 Broadcast Drive


/**
 * 3) Logical OR assignment (||=)
 */
user.phone ||= '+1-123-456-7890'
console.log(user.phone) // output: +1-123-456-7890
user.phone ||= '+1-555-666-7777'
console.log(user.phone) // output: +1-123-456-7890

/**
 * 4) Logical AND assignment (&&=)
 */
user.phone &&= '+1-555-666-7777'
console.log(user.phone) // output: +1-555-666-7777
user.vehicleNumber &&= 'G40 JXH'
console.log(user.vehicleNumber) // output: undefined
