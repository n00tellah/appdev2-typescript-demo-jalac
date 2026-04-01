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
Instead of using an enum, you can use literal types to limit a variable or function parameter to only specific values.

For example, `'admin' | 'teacher' | 'student'` means the value can only be one of those three strings — nothing else is allowed.

This is simpler than an enum because you don't need to define a separate block. You just write the allowed values directly using `|` (which means "or").

If you try to assign a value that's not in the list (like `'superadmin'`), TypeScript will give you an error.

## 07-custom-type-role.ts
Instead of repeating the same literal types everywhere, you can give it a name using the `type` keyword. That named type is called a type alias.

For example, instead of writing `'admin' | 'teacher' | 'student'` every time, you just create `type Role = 'admin' | 'teacher' | 'student'` and use `Role` anywhere you need it.

## 08-functions.ts
Demonstrates function return types including `void` for functions that return nothing, `never` for functions that never complete, and how to type callbacks using `(m: string) => void` instead of `Function` for better type safety.

## 09-special-types.ts
`Null` means a variable intentionally has `no value`. If you type it as `just null`, it can only ever be null. If you want it to also hold a `string`, you use `null | string or | number` if you want it to hold a `number`. Useful when u have a state u want to make the value null after an operation. `Undefined` means a variable has been declared but `no value` has been assigned yet. Same idea — you can combine it with other types like undefined | string or | number'.

## 10-type-narrowing.ts
`document.getElementById('user-name')` looks for the `<input id="user-name" />` in `10-form.html` but TypeScript doesn't know what type it is, and it might not even find it (returns `null`). I added `as HTMLInputElement` so TypeScript knows it's an input field and lets me use `.value` to get what the user typed. I added `?.` just in case the element doesn't exist — so instead of crashing, it just gives `undefined`.

## 11-optional.ts
The 11-optional.ts demontrates how ? makes function parameters and object properties optional, and how || and ?? work as fallbacks — || falls back on any falsy value while ?? only falls back on null or undefined.



