// Generator function that emits each word of a sentence
const wordGenerator = (sentence) => {
    const words = sentence.split(' ');
    for (const word of words) {
      yield word;
    }
  };
  
  // Initialize the generator with the sentence
  const sentence = "All I know is something like a bird within her sang";
  const words = wordGenerator(sentence);
  
  // Use the generator to print each word, one per line
  for (const word of words) {
    console.log(word);
  }
  