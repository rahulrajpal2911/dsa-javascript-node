import { logRecord } from "../utils/logger.mjs";

const sheetName = "Array";
const tabName = "Traversal";

export const arr = Array.from({ length: 10000000 }, (_, i) => ({
  id: i + 1,
  name: `Item-${i + 1}`,
  value: Math.floor(Math.random() * 1000),
  isActive: i % 2 === 0,
}));

/**
 * 1. **For Loop**
 * The classic `for` loop is flexible and widely used for traversing arrays. It's ideal when you need full control over the loop's index.
 * Example Use Case: Iterating through an array of numbers and processing each number.
 * Time Complexity: `O(n)` where `n` is the size of the array. The loop runs once for each element.
 */
function forLoopTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]; // Accessing element
    console.log(element);
  }

  // Now log the differences
  return logRecord(
    sheetName,
    tabName,
    "For Loop",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 2. **For-of Loop**
 * The `for-of` loop is introduced in ES6 and provides a cleaner syntax for iterating through arrays.
 * Example Use Case: When you don’t need the index, just the value from the array.
 * Time Complexity: `O(n)` where `n` is the size of the array. Similar to a traditional `for` loop.
 */
function forOfLoopTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  for (const element of arr) {
    // Accessing element
  }

  return logRecord(
    sheetName,
    tabName,
    "For-of Loop",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 3. **For-in Loop**
 * The `for-in` loop iterates over all enumerable property names (keys) of an object, including array indices.
 * Example Use Case: It's mainly used when you need to loop over an object, but it can also be used on arrays to get the index.
 * Time Complexity: `O(n)` but may have performance issues on large arrays since it includes all enumerable properties.
 */
function forInLoopTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  for (let index in arr) {
    const element = arr[index]; // Accessing element by index
  }

  return logRecord(
    sheetName,
    tabName,
    "For-in Loop",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 4. **forEach()**
 * `forEach()` is a higher-order function that executes a provided callback function once for each element in the array.
 * Example Use Case: When you want to perform a side effect (e.g., printing or modifying elements) on each array element.
 * Time Complexity: `O(n)` where `n` is the size of the array. Each element is visited once.
 */
function forEachTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  arr.forEach((element) => {
    // Accessing element
    console.log(element);
  });

  return logRecord(
    sheetName,
    tabName,
    "forEach",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 5. **map()**
 * The `map()` method creates a new array by applying a function to each element of the original array.
 * Example Use Case: When you need to transform the elements of an array, like squaring each element in a number array.
 * Time Complexity: `O(n)` since it iterates over each element once and applies the function.
 */
function mapTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  const newArr = arr.map((element) => {
    return element; // Identity function (no transformation)
  });

  console.log("mapTraversal", JSON.stringify(newArr, null, 2));

  return logRecord(
    sheetName,
    tabName,
    "map() method",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 6. **While Loop**
 * A `while` loop runs as long as the provided condition is true.
 * Example Use Case: Useful when you don't know the number of iterations in advance, and the loop's end condition is dynamic.
 * Time Complexity: `O(n)` where `n` is the size of the array. It checks the condition in every iteration.
 */
function whileLoopTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  let i = 0;
  while (i < arr.length) {
    const element = arr[i];
    console.log(element);
    i++;
  }

  return logRecord(
    sheetName,
    tabName,
    "While Loop",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 7. **do-while Loop**
 * A `do-while` loop executes at least once before checking the condition, making it different from a `while` loop.
 * Example Use Case: Useful when you want the loop body to run at least once, even if the condition is false initially.
 * Time Complexity: `O(n)` where `n` is the size of the array. It executes the loop body at least once.
 */
function doWhileLoopTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  let i = 0;
  do {
    const element = arr[i];
    console.log(element);
    i++;
  } while (i < arr.length);

  return logRecord(
    sheetName,
    tabName,
    "Do-while Loop",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 8. **reduce()**
 * The `reduce()` method reduces the array to a single value by applying a function to each element (accumulator).
 * Example Use Case: Summing all the elements in an array.
 * Time Complexity: `O(n)` since it processes each element once.
 */
function reduceTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value; // Summing elements
  }, 0);

  return logRecord(
    sheetName,
    tabName,
    "reduce() method",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 9. **for...of with break/continue**
 * The `for...of` loop can also use `break` or `continue` to control the flow.
 * Example Use Case: Looping through an array and breaking early if a condition is met (e.g., finding the first even number).
 * Time Complexity: `O(n)` in the worst case, but the loop may break early.
 */
function forOfWithControlTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  for (const element of arr) {
    if (element.value === 3) break; // Break on a specific element
  }

  return logRecord(
    sheetName,
    tabName,
    "For-of with break",
    startTime,
    startMemory,
    startCPU
  );
}

/**
 * 10. **filter()**
 * The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
 * Example Use Case: Filtering out all even numbers from an array.
 * Time Complexity: `O(n)` where `n` is the size of the array.
 */
function filterTraversal() {
  const startTime = process.hrtime();
  const startMemory = process.memoryUsage();
  const startCPU = process.cpuUsage();

  const filteredArray = arr.filter((element) => {
    return element.value % 2 === 0; // Filtering even elements
  });

  console.log("filteredArray", JSON.stringify(filteredArray, null, 2));

  return logRecord(
    sheetName,
    tabName,
    "filter() method",
    startTime,
    startMemory,
    startCPU
  );
}

// Export execution method for all traversal methods
export default function TraversalExecution() {
  forLoopTraversal();
  forOfLoopTraversal();
  forInLoopTraversal();
  forEachTraversal();
  mapTraversal();
  whileLoopTraversal();
  doWhileLoopTraversal();
  reduceTraversal();
  forOfWithControlTraversal();
  filterTraversal();
}
