(() => {
  // Avoid excesive if else, includes in array is an option
  function isRedFruit(fruit: string): boolean {
    const redFruits = ['manzana', 'cereza', 'ciruela'];

    return redFruits.includes(fruit);
  }

  // Avoid if else, use literal objects instead
  type FruitColor = 'red' | 'yellow' | 'purple';

  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    };

    if (!fruitsByColor[color]) { throw Error('the color must be: red, yellow, purple'); }

    return fruitsByColor[color];


    // Alternative, using switch statement
    // switch (color) {
    //   case 'red':
    //     return ['manzana', 'fresa'];
    //   case 'yellow':
    //     return ['piña', 'banana'];
    //   case 'purple':
    //     return ['moras', 'uvas'];
    //   default:
    //     throw Error('the color must be: red, yellow, purple')
    // }
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  // For simplicity, we could set many exceptions flow on top.
  function workingSteps() {
    if (!isFirstStepWorking) { return 'First step broken.'; }
    if (!isSecondStepWorking) { return 'Second step broken.'; }
    if (!isThirdStepWorking) { return 'Third step broken.'; }
    if (!isFourthStepWorking) { return 'Fourth step broken.'; }

    return 'Working properly!';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() });
})();