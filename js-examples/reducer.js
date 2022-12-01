/**
 * https://medium.com/javascript-in-plain-english/using-array-reduce-like-a-pro-4cea9840c773
 */

/**
 * Group an array of objects by a specified property
 */
const groupBy = (arr, property) => {
    return arr.reduce((acc, obj) => {
        let key = obj[property]
        acc[key] ||= []
        acc[key].push(obj)
        return acc
    }, {})
}

const users = [
    { name: "Bytefer", age: 30, city: 'NY' },
    { name: "Kakuqo", age: 28, city: 'NY' },
    { name: "Chris", age: 28, city: 'LA' }
]

const groupedByAge = groupBy(users, 'age');
const groupedByCity = groupBy(users, 'city')
console.log(groupedByAge)
console.log(groupedByCity)

/**
 * Deserialize query string
 */
const parseQueryString = (queryString) => {
    return queryString
        .replace(/(^\?)|(&$)/g, '')
        .split('&')
        .reduce((t, v) => {
            const [key, val] = v.split('=')
            t[key] = decodeURIComponent(val)
            return t
        }, {})
}

const params = parseQueryString("?name=Chris&email=chris%40example.com")
console.log(params)

/**
 * Get the value of the specified property in the object array
 */
const extractValue = (arr, property) => {
    return arr.reduce((acc, object) => {
        (property in object) && acc.push(object[property])
        return acc
    }, [])
}

const names = extractValue(users, 'name')
console.log(names)
