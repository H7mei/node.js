import assert from 'assert'
import { add, min, div, mul, mod } from './myLib.mjs'

// add()
try {
  console.log('add() should + two numbers ')
  assert.strictEqual(add(2, 5), 7)
  console.log('  ✅ passed')
} catch (e) {
  console.log('  🚫 fail')
  console.error(e)
}

// min()
try {
  console.log('min() should - two numbers ')
  assert.strictEqual(min(5, 2), 3)
  console.log('  ✅ passed')
} catch (e) {
  console.log('  🚫 fail')
  console.error(e)
}

// div()
try {
  console.log('div() should / two numbers ')
  assert.strictEqual(div(2, 5), 0.4)
  console.log('  ✅ passed')
} catch (e) {
  console.log('  🚫 fail')
  console.error(e)
}

// mul()
try {
  console.log('mul() should * two numbers ')
  assert.strictEqual(mul(2, 5), 10)
  console.log('  ✅ passed')
} catch (e) {
  console.log('  🚫 fail')
  console.error(e)
}

// mod()
try {
  console.log('mod() should % two numbers ')
  assert.strictEqual(mod(2, 9), 2)
  console.log('  ✅ passed')
} catch (e) {
  console.log('  🚫 fail')
  console.error(e)
}
