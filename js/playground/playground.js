const myNums = [6, 5, 4];

const [...restMyNums] = myNums;

const copyMyNums = restMyNums;

const Foo = (a, b, c, ...restNums) => {
  return restNums;
};

console.log(Foo(1, 2, 3, ...myNums));
