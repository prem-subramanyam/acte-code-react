myTest = {
  name: placeholder,
  myFun: function () {
    // console.log("Test");
    // console.log(this);
    return this;
  },
};

console.log(myTest.name());
