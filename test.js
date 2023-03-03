const assert = require("assert");
const chai = require("chai");
const db = require("../services/users/users.model");
const fakeFunctionality = require("../letThisClassAsRealLifeFx");

//   describe('#indexOfssss()', function () {

// it("should return -1 when the value is not present", function () {
//   assert.equal([1, 2, 3, 4].indexOf(6), -1);
// });

// it("this is my first test", function () {
//   assert.equal(-1, -1);
// });

// it("this is going fine i am enjoying", function () {
//   assert.notEqual(-1, 1);
// });

// it("lets touch arrays", function () {
//   chai.assert.isArray([2, 3, 4]);
// });

// // pending tests
// it("lets test for no callbacks -- this will return pending test");

// const test = new Promise((resolve, reject) => {
//   let t1 = () => console.log("testttest");
//   let t2 = () => console.log("rejected");
// //   resolve(t1);
//   reject(t2);
// });

// test
//   .then((x) => x())
//   .catch((x) => x());

// const promise = Promise.resolve().then(() => {
//   console.log("creating promise with wild card resolver");
// });

// console.log(promise.then((res) => res));

// describe("#grouped tests", () => {
//   describe("#test1 - this will run", () => {
//     it("this is essentials - is 2 + 2 is fours", () => assert.equal(2 + 2, 4));
//   });

//   describe.skip("#this will not run", () => {
//     it("dont have a callback :<");
//   });
// });

//   });

// const expect = require("chai").expect;
// const sum = require("./sum.js");

// // const nums = [1, 2, 3, 4, 5];
// // assert.isArray(nums, "is array of numbers");

const dummyPromise = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "test1",
        "test1",
        "test1",
        "test1",
        "test1",
        "test1",
        "test1",
        "test1",
        "test1",
      ]);
    }, timeout);
  });
};

it("aync await", async function () {
  const users = await dummyPromise(250);
  assert.equal(users.length, 9);
});

it("okay as denoted, done keyword", function (done) {
  dummyPromise(250).then((res) => {
    if (res.length === 8) done();
    else done();
  });
  // assert.equal(users.length, 9)
});

describe("Now lets starts hooks", function () {
  // beforeEach(function(){
  //   it('this is before hook', function(){
  //     assert.equal(2+2, 4);
  //   });
  // })
  it("slow api", async () => assert.equal((await dummyPromise(250)).length, 9));
  it("intermediate api", async () =>
    assert.equal((await dummyPromise(55)).length, 9));
  it("fast api", async () => assert.equal((await dummyPromise(20)).length, 9));
});

describe("#fake functionality", function () {
  let newObj = new fakeFunctionality();
  it("#fake addition", function () {
    assert.equal(newObj.add(4, 3).result, 7);
  });

  it("#fake multiplication", function () {
    assert.equal(newObj.multiply(2, 4).result, 8);
  });

  it("#fake reset", function () {
    assert.equal(newObj.add(5, 6).reset().result, 0);
  });
});
// console.log('test1');
// it("lets make this test slow", ()=> {
//   dummyPromise().then((res)=> console.log(res));
// setTimeout(() => {

//   console.log('test2');
//     assert.notEqual(2+2, 5);
// }, 5000);
// });

// context("without arguments", function () {
//   it("should return 0", function () {
//     expect(sum()).to.equal(0);
//   });
// });

// context("with number arguments", function () {
//   it("should return sum of arguments", function () {
//     expect(sum(1, 2, 3, 4, 5)).to.equal(15);
//   });

//   it("should return argument when only one argument is passed", function () {
//     expect(sum(5)).to.equal(5);
//   });
// });

// // context("with non-number arguments", function () {
// //   it("should throw error", function () {
// //     expect(function () {
// //       sum(1, 2, "3", [4], 5);
// //     }).to.throw(TypeError, "sum() expects only numbers.");
// //   });
// // });
