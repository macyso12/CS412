// Define the applyDecorator function
const applyDecorator = (inputString, decoratorFunction) => {
    return decoratorFunction(inputString);
  };
  
  // First expression: Split the input string on 'c'
  const expression1Result = applyDecorator(
    'supercalifragilisticexpialidocious',
    (str) => str.split('c')
  );
  
  // Second expression: Replace 'a' with 'A' and gather additional information
  const expression2Result = applyDecorator(
    'supercalifragilisticexpialidocious',
    (str) => {
      const modifiedString = str.replace(/a/g, 'A');
      const numberReplaced = (str.match(/a/g) || []).length;
      return {
        originalString: str,
        modifiedString,
        numberReplaced,
        length: modifiedString.length,
      };
    }
  );
  
  // Print the results using console.table
  console.table([expression1Result, expression2Result]);
  