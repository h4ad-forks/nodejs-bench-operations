const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const object = {
  a: 5,
  b: 42,
  c: 7
}

suite.add('Using Object.keys().forEach', function () {
  Object.keys(object).forEach(key => {
    const result = object[key] * 2;
  });
})
.add('Using Object.keys() + foreach', function () {
  const keys = Object.keys(object);

  for (const key of keys) {
    const result = object[key] * 2;
  }
})
.add('Using Object.keys() + for', function () {
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    const result = object[keys[i]] * 2;
  }
})
.add('Using Object.entries()', function () {
  for (const [key, value] of Object.entries(object)) {
    const result = value * 2;
  }
})
.add('Using Object.hasOwn()', function () {
  for (const key in object) {
    if (!Object.hasOwn(object, key))
      continue;

    const result = object[key] * 2;
  }
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Object.keys vs Object.getOwnPropertyNames comparison'))
  console.log(tableHeader)
})
.run({ 'async': false });