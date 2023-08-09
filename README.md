# Combine Function

A simple JavaScript function that generates a combination set from given parameters.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Installation

To use this function in your project, you can install it via npm:

npm install combine-data


## Usage
Import the function into your code and use it to generate a combination set of given data:


```Typescript
import { combine } from "combine-data"

const params = [
    [1,2,3],
    [4,5],
    [6]
];

const combinations = combine(params);
console.log(combinations); 
// Output: 
//[
// [1, 4, 6],
// [1, 5, 6],
// [2, 4, 6],
// [2, 5, 6]    
//]
```


## API

### `combine(params: any[][]): any[][]`

A function that processes the input parameters into combinations.

- `params`: The array of parameter array.


Returns the generated combinations.

## License
This project is licensed under the MIT License.