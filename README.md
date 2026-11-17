# TypeScript Learning

A hands-on repository for learning TypeScript step by step, from basic type annotations to object-oriented programming, browser DOM work, and more advanced type-safe patterns. Each topic is supported by small examples you can read, run, and modify.

## Learning path

Follow the folders in order for a gradual introduction:

1. [Basics](./Basics/) — variables, type annotations, and simple input examples.
2. [Data Types](./DataTypes/) — TypeScript's built-in and custom types.
3. [Object-Oriented Programming](./OOPs/) — classes and core object-oriented principles.
4. [DOM Handling](./DOM%20handling/) — typed interaction with HTML elements and events.
5. [Advanced Concepts](./Adv%20topics/) — generics, modules, asynchronous types, and more.

## Topics covered

### 1. Basics

- [Variable annotations](./Basics/app.ts) — declare values with explicit types such as `string` and `number`.
- [Reading form input](./Basics/input.ts) — access values from HTML input elements.
- [HTML examples](./Basics/index.html) — markup used by the browser-based examples.

### 2. Data types

| Topic | What it covers |
| --- | --- |
| [String](./DataTypes/string.ts) | Text values. |
| [Number](./DataTypes/number.ts) | Numeric values. |
| [Boolean](./DataTypes/boolean.ts) | `true` and `false` values. |
| [BigInt](./DataTypes/bigInt.ts) | Integers larger than the safe range of JavaScript numbers. |
| [Symbol](./DataTypes/symbol.ts) | Unique identifiers used as property keys. |
| [Null and undefined](./DataTypes/nullUndefined.ts) | Values representing absence or an uninitialized value. |
| [`any` and `unknown`](./DataTypes/anyUnknown.ts) | Broad types, with `unknown` requiring a check before use. |
| [never](./DataTypes/never.ts) | Values that cannot occur, such as a function that never returns normally. |
| [Arrays](./DataTypes/Array.ts) | Ordered collections with typed elements. |
| [Tuples](./DataTypes/tuple.ts) | Arrays with a fixed set of element types and positions. |
| [Objects](./DataTypes/Object.ts) | Structured values with typed properties. |
| [Functions](./DataTypes/function.ts) | Function parameter and return types. |
| [Type aliases](./DataTypes/type.ts) | Named reusable definitions for types. |
| [Interfaces](./DataTypes/interface.ts) | Contracts describing the shape of objects. |
| [Enums](./DataTypes/enum.ts) | Named sets of related constant values. |
| [Union types](./DataTypes/union.ts) | Values that may be one of several types. |
| [Intersection types](./DataTypes/intersection.ts) | Types that combine the requirements of multiple types. |

### 3. Object-oriented programming

- [Classes](./OOPs/class.ts) — create objects with properties and methods.
- [Access modifiers](./OOPs/accessModifiers.ts) — control where class members can be accessed.
- [Encapsulation](./OOPs/encapsulation.ts) — keep data and the operations on it together.
- [Inheritance](./OOPs/inheritance.ts) — build a class from another class and reuse its behavior.
- [Polymorphism](./OOPs/polymorphism.ts) — use a shared interface while allowing different implementations.
- [Abstraction](./OOPs/abstraction.ts) — expose essential behavior while hiding implementation details.

### 4. DOM handling

- [Typed DOM example](./DOM%20handling/dom.ts) — select typed HTML elements, check that they exist, and respond to a button click.
- [HTML page](./DOM%20handling/index.html) — page used by the DOM example.

### 5. Advanced concepts

- [Generics](./Adv%20topics/generic.ts) — write reusable functions and types that preserve the types of their inputs.
- [Type guards](./Adv%20topics/typeGuard.ts) — narrow a union type using checks such as `typeof` and `instanceof`.
- [Modules](./Adv%20topics/module.ts) — organize code with imports and exports.
- [Getters and setters](./Adv%20topics/getterAndSetter.ts) — control how class properties are read and updated.
- [Static members](./Adv%20topics/static.ts) — define class members that belong to the class itself, not an instance.
- [Typed promises](./Adv%20topics/typedPromises.ts) — describe the value an asynchronous operation resolves to.
- [Typed API calls](./Adv%20topics/typedAPICalls.ts) — model API response data and handle asynchronous requests.
- [Advanced example](./Adv%20topics/main.ts) — additional example using a structured interface.
