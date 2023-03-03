// spy js is for spying a function

const sinon = require("sinon");

const fakeFunctionality = require("../letThisClassAsRealLifeFx");

describe("##SPYING using sinon", () => {
  const newObj = new fakeFunctionality();
  it("spying add fx", () => {
    const spyAdd = sinon.spy(newObj, "add");
    newObj.add(3, 5);
    newObj.add(3, 5);

    if (spyAdd.called) console.log(spyAdd.callCount);
    // sinon.assert.calledOnce(spy); // calledTwice // calledThrice

    // multiple spying
    const spyMul = sinon.spy(newObj, "multiply");
    newObj.multiply(5, 3);

    sinon.assert.calledOnce(spyMul); // true

    // comparing timelines of spy functions

    spyMul.calledBefore(spyAdd); // compares general timeline order
    spyMul.calledAfter(spyAdd);
    spyMul.calledImmediatelyBefore(spyAdd); // no calls in between two spies
    spyMul.calledImmediatelyAfter(spyAdd);

    console.log(spyMul.calledWith(5)); // calledWith arguments --if any one matched then true
  });
});
