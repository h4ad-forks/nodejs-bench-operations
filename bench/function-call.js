const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();
const { eventToMdTable, H2, createTableHeader } = require('../markdown');
const { Blob } = require('buffer');

const tableHeader = createTableHeader(['name', 'ops/sec', 'samples']);

const setup = function() {
  function callFn() {
    return 2;
  }

  function callFnWithArgs(num) {
    return num ** 2;
  }
}

suite
  .add('directly callFn', function () {
    const result = callFn();
  }, { setup })
  .add('directly callFnWithArgs', function () {
    const result = callFnWithArgs();
  }, { setup })
  .add('Reflect.apply callFn', function () {
    const result = Reflect.apply(callFn,undefined, []);
  }, { setup })
  .add('Reflect.apply callFnWithArgs', function () {
    const result = Reflect.apply(callFnWithArgs, undefined, []);
  }, { setup })
  .on('cycle', function (event) {
    console.log(eventToMdTable(event));
  })
  .on('start', function () {
    console.log(H2('Blob'));
    console.log(tableHeader);
  })
  .run({ async: false });
