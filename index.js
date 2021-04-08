const R = require("ramda");

const users = require("./data.json");

/**
 * Get last element of the users array
 */
console.log(R.last(users));

/**
 * Gets the users array lenght
 */
console.log(R.length(users));

/**
 * Gets the user with the given id
 */
console.log(R.find(R.propEq("id", 4))(users));

/**
 * Makes a descending comparator
 */
console.log(R.sort(R.descend(R.prop("id")), users));

/**
 * Drops the last two elements from the users array
 */
console.log(R.dropLast(2, users));

/**
 * Add elements to the users array
 */
const user = { id: 5, name: "Mateus", active: true };
console.log(R.append(user, users));

/**
 * Define the empty value of Array
 */
console.log(R.empty(users));

/**
 * Finds the index of the element with the given name
 * Then merges the changes to the corresponding object
 */
const i = R.findIndex(R.propEq("name", "Rodrigo"))(users);
console.log(R.merge(users[i], { active: true }));
