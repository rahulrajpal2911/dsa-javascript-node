# JavaScript DSA with Node.js (WIP)

A complete guide to mastering **Data Structures and Algorithms (DSA)** using modern **JavaScript (ES6+)** in a **Node.js** environment. This repository is designed to train developers in both the _fundamentals_ and _real-world applications_ of DSA with hands-on coding and test-driven development (TDD) practices using **Jest**.

---

## 🚀 Purpose

This repository is built with one clear goal:

> To train developers in solving real-world problems using **Data Structures & Algorithms**, in **JavaScript**—with an emphasis on **conceptual clarity**, **ES6+ best practices**, and **test-first development**.

---

## 🧠 What You'll Learn

### ✅ Core DSA Topics Covered

Each topic will include:

- Concept explanation
- Visual examples
- Real-world use-cases
- Implementations using TDD with Jest

| Category     | Concepts Included                                  |
| ------------ | -------------------------------------------------- |
| Arrays       | Traversal, Insertion, Deletion, Searching, Merging |
| Stack        | Push, Pop, Peek, Use-Cases                         |
| Queue        | Enqueue, Dequeue, Circular Queue, Priority Queue   |
| Linked Lists | Singly, Doubly, Circular                           |
| Trees        | Binary Trees, BSTs, Tree Traversals                |
| Graphs       | BFS, DFS, Weighted/Unweighted, Cycles              |
| Recursion    | Concepts, Stack Frames, Base Cases, Tail Recursion |
| Searching    | Linear Search, Binary Search                       |
| Sorting      | Bubble, Merge, Quick, Insertion, Heap Sort         |
| Merge Ops    | Merge Arrays, Linked Lists, Sorted Structures      |
| Maps & Sets  | Hash Maps, Sets, WeakMap/WeakSet, Use-cases        |

---

## 🧪 Test-Driven Development (TDD)

We believe in **writing tests first**. Every DSA problem will be implemented using **Jest**.

- Test case examples
- Red-Green-Refactor loop
- Code correctness over hacks

🧾 Example Flow:

```js
// test/factorial.test.mjs
import { factorial } from "../src/recursion/factorial.mjs";

test("Factorial of 5", () => {
  expect(factorial(5)).toBe(120);
});
```

---

## 📦 ES5 vs ES6 - A Pragmatic Comparison

We will intentionally contrast **ES5 vs ES6** to explain:

- `var` vs `let`/`const`
- Regular functions vs Arrow functions
- `this` binding differences
- Module loading: `require()` vs `import`

📝 Example:

```js
// ES5
function add(x, y) {
  return x + y;
}

// ES6
const add = (x, y) => x + y;
```

---

## ⚙️ Project Setup & JSConfig

We use `jsconfig.json` for better VSCode IntelliSense and module resolution:

```json
{
  // Configuration options to help VSCode understand your JS project
  "compilerOptions": {
    // Base directory for non-relative imports (e.g., import x from "utils/x")
    "baseUrl": "./src",

    // Set module system for IntelliSense (Node.js with ES modules)
    "module": "es6",

    // Allow default module resolution strategy (can be changed if needed)
    "moduleResolution": "node",

    // Enable IntelliSense for JS
    "checkJs": true,

    // Show JS errors in editor (optional, set to false to disable)
    "noEmit": true
  },

  // Folders and files to include in the project
  "include": ["src/**/*", "test/**/*"],

  // Folders to exclude (like build output or node_modules)
  "exclude": ["node_modules", "**/dist"]
}
```

---

## 📁 Folder Structure

```plaintext
📦dsa-javascript-node
 ┣ 📂src
 ┃ ┣ 📂array
 ┃ ┣ 📂graph
 ┃ ┣ 📂queue
 ┃ ┣ 📂recursion
 ┃ ┣ 📂stack
 ┃ ┣ 📂tree
 ┃ ┗ 📂utils
 ┣ 📂test
 ┣ 📜jsconfig.json
 ┣ 📜package.json
 ┗ 📜README.md
```

---

## 📄 File Format

- All modern code will use `.mjs` to support ES6 Modules.
- Legacy examples (ES5) will also be included to show differences.

---

## 📌 Requirements

- Node.js 18+
- npm or yarn
- Basic knowledge of JavaScript

---

## ✅ Getting Started

```bash
git clone https://github.com/rahulrajpal2911/dsa-javascript-node.git
cd dsa-javascript-node
npm install
npm test
```

---

## This repository is a work in progress

---

## 🙋‍♂️ Follow Me

If you find this project helpful or want to learn more about DSA, JavaScript, and backend/frontend development:

👉 Connect with me on [LinkedIn](https://www.linkedin.com/in/rahulrajpal2911/)  
Let’s learn and build better systems together!

---

## 📚 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
