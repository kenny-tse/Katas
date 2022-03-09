// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (paraString) => {

  let stackPara = [];

  for (const bracket of paraString) {

    if (bracket === '(' || bracket === '[' || bracket === '{') {
      stackPara.push(bracket);
    } else if (bracket === ')' && stackPara.length > 0 && stackPara[stackPara.length - 1] === '(') {
      stackPara.pop();
    } else if (bracket === '}' && stackPara.length > 0 && stackPara[stackPara.length - 1] === '{') {
      stackPara.pop();
    } else if (bracket === ']' && stackPara.length > 0 && stackPara[stackPara.length - 1] === '[') {
      stackPara.pop();
    } else {
      return false;
    }
  }

  if (stackPara.length === 0) {
    return true;
  }

  return false;

}

console.log(isValid("(("))