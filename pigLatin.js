var pigLatinTranslator = function (phrase) {

  var pigString = '';
  phrase = phrase.toLowerCase().split(' ');
  phrase.forEach(function (word) {

    pigString = pigString.concat(pigLatinWordTranslator(word) + ' ');
  })


  console.log('pigString: ', pigString);
}





var pigLatinWordTranslator = function (word) {

  var word = word.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var firstVowel = 0;
  var ay = 'ay';

  for (var i = 0; i < word.length; i++) {

    if (vowels.indexOf(word[i]) !== -1) {

      firstVowel = i;
      break;
    }
  }

  var removedCons = word.splice(0, firstVowel);
  removedCons = removedCons.join('');
  
  
  word = word.join('').concat('-' + removedCons + ay);
  
  return word;
}





pigLatinTranslator('This phrase will be converted into piglatin');