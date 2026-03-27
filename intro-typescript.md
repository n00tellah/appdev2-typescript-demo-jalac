# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Declares explicitly typed variables (`string`, `number`) and defines a function with a typed parameter and a default value. Shows that passing the wrong type causes a compile error.

## 02-vanilla-js-types.js
Plain JavaScript file that declares variables of different types and uses `typeof` to log their runtime types, highlighting that JS has no compile-time type checking.

## 03-flexible-types.ts
Declares a variable with the `any` type and reassigns it to a string, boolean, object, and array — showing that `any` disables type checking and should be used sparingly.

## 04-arrays-objects.ts
Defines a typed array, a union-type array (`string | number`), a deeply nested object type with a `role` sub-object, the `{}` type for non-null values, and a `Record<string, ...>` for a flexible key-value object.

## 05-enum.ts
Defines a string enum (`Role`) with custom string values and shows that you must assign enum members using the enum reference (e.g., `Role.Teacher`) rather than a raw string.

## 06-alternative-to-enum.ts
Shows how to use **literal types** (e.g., `'admin' | 'guest'`) as a lightweight alternative to enums, restricting a variable or parameter to a fixed set of string values without defining a full enum.

## 07-custom-type-role.ts
Demonstrates **type aliases** using the `type` keyword to create reusable, named types — including a union literal type (`Role`) and a complex object type (`User`) that references the custom `Role` type as one of its properties.

## 08-functions.ts
Covers typed functions in depth: explicit return types, the `void` type for functions that return nothing, the `never` type for functions that never complete normally, and how to type **callback functions** and object methods.

## 09-special-types.ts
Explores the `null` and `undefined` special types, showing how to declare variables that hold only those values and how to combine them with other types using union types.

## 10-type-narrowing.ts
Illustrates **type narrowing** when working with potentially `null` DOM elements, and introduces the **non-null assertion operator** (`!`), **optional chaining** (`?.`), and **type casting / type assertion** (`as`) to safely handle nullable values.

## 11-optional.ts
Covers **optional parameters** (`?`) in functions and object types, and explains the difference between the **nullish coalescing operator** (`??`) and the logical OR (`||`) — `??` only falls back on `null` or `undefined`, while `||` falls back on any falsy value.
