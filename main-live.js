const pigLatin = (word) => {
  word = document.getElementById("user-input").value;
  word = word.toLowerCase().trim();
  const vowel = ["a", "e", "i", "o", "u"];
  let vowelTranslated = "";
  let consonantTranslated = "";
  let firstLetter = word.slice(0, 1);
  if (vowel.includes(firstLetter)) {
    vowelTranslated = word + "yay";
    document.getElementById("pigLatin").innerHTML = response = vowelTranslated;
    return word + "yay";
  } else {
    consonantTranslated = word.slice(1) + word.slice(0, 1) + "ay";
    document.getElementById("pigLatin").innerHTML = response =
      consonantTranslated;
  }
};

const clearDisplay = () => {
  document.getElementById("pigLatin").innerHTML = "";
};
