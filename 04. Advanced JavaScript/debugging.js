const flattened = [[0, 1], [2, 3],[4, 5]].reduce((a, b) => a.concat(b), []);

//step 1 change varaibles to somethisg that makes sense to you
const flattened = [[0, 1], [2, 3][(4, 5)]].reduce(
  (accumulator, array) => accumulator.concat(array),
  []
);

//step 2 open up the function
const flattened = [[0, 1], [2, 3],[4, 5]].reduce((accumulator, array) => {
  console.log("array", array);
  console.log("accumulator", accumulator);
  return accumulator.concat(array);
}, []);

//step debugger
const flattened = [[0, 1], [2, 3],[4, 5]].reduce((accumulator, array) => {
    debugger;
    return accumulator.concat(array);
  }, []);