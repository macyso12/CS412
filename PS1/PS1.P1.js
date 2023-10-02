const reverseAlpha1 = (string) => {
    // Remove non-letter characters and convert to lowercase
    const cleanedString = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    // Convert the string to an array of characters, sort it in reverse order
    const sortedChars = cleanedString.split('').sort().reverse();
  
    // Convert the sorted characters back to a string
    const reversedString = sortedChars.join('');
  
    return reversedString;
  };
  
  // Test the function with the given string
  const inputString = 'supercalifragilisticexpialidocious';
  const result = reverseAlpha(inputString);
  console.log(result);  // Output should be 'xoiieccssrrppiiiiiifffaaaaaaaallggggggrrr'
  