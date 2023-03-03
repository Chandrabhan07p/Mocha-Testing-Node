const fakeFunctionality = require("../letThisClassAsRealLifeFx");
const sinon = require("sinon");
const newObj = new fakeFunctionality();

// BEST USECASE - - - FAKING API CALLS -- -- To test FURTHER FUNCTIONALITY

// mocking the add functionality from array

const mockerFx = {
  testing: function (arg1, arg2) {
    return arg1 + arg2;
  },
};

it("mock the add function from array", function () {
  const mock = sinon.mock(mockerFx);
  mock.expects("testing").once();
  mockerFx.testing(10, 20);
  mock.verify();
});

//  mocking the add functionality

it("mock the add function", function () {
  const mock = sinon.mock(newObj);
  mock.expects("add").exactly(2);
  newObj.add(10, 20);
  newObj.add(10, 30);
  mock.verify();
});
