// Helper function to parse the expression
const parseExpression = (expression) => {
    const [leftOperand, operator, rightOperand] = expression.match(/(\d+)([+\-*^/])(\d+)/).slice(1);
    return [parseInt(leftOperand), operator, parseInt(rightOperand)];
  };
  
  // Main function to evaluate and return the operator function
  const evaluate = (expression) => {
    const [left, operator, right] = parseExpression(expression);
  
    switch (operator) {
      case '+':
        return (left, right) => left + right;
      case '*':
        return (left, right) => left * right;
      case '-':
        return (left, right) => left - right;
      case '/':
        return (left, right) => left / right;
      case '^':
        return (left, right) => Math.pow(left, right);
      default:
        throw new Error(`Unsupported operator: ${operator}`);
    }
  };
  
  // Test the evaluate function with example expressions
  const expressions = ['4+2', '5*7', '6-1', '9/2', '2^8'];
  
  expressions.forEach((expression) => {
    const operatorFunc = evaluate(expression);
    console.log(`${expression} = ${operatorFunc(parseExpression(expression)[0], parseExpression(expression)[2])}`);
  });
  