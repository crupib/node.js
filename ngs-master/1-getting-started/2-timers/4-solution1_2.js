const theOneFunc = delay => {
  console.log('Hello after ' + delay + ' seconds');
};

setTimeout(theOneFunc, 5 * 1000, 5);

setTimeout(theOneFunc, 9 * 1000, 9);
