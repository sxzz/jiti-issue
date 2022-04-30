// playground.ts

// error: The requested module './dist/index.mjs' does not provide an export named 'foo'
// import { foo } from './dist/index.mjs'

// default export works.
import fromJiti from './dist/index.mjs'

// original code works.
import { foo } from './src'

console.log(fromJiti.foo === foo) // true
