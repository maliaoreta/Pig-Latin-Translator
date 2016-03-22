var pigLatinTranslator = function (phrase) {

  var pigString = '';
  phrase = phrase.replace(/[\d\.,?!'@$#%^*"()/\\]/g, '');
  phrase = phrase.toLowerCase().split(' ');
  
  phrase.forEach(function (word) {

    pigString = pigString.concat(pigLatinWordTranslator(word) + ' ');
  })

  return pigString;
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

console.log(pigLatinTranslator('Th/?is 4p3hra.se will. be. convert.,e6d into piglatin wit889out sy3mb.ols'));


var translatePhraseToEnglish = function (phrase) {

  var english = '';
  phrase = phrase.replace(/[\d\.,?!'@$#%^*"()/\\]/g, '');
  phrase = phrase.toLowerCase().split(' ');

  phrase.forEach(function (word) {

    english = english.concat(translateWordToEnglish(word) + ' ');
  })
  
  return english;
}

var translateWordToEnglish = function (word) {

  var ayIndex = 0;

  if (word.indexOf('-') !== -1) {

    ayIndex = word.indexOf('-');
  }

  var replaceCons = word.slice(ayIndex);
  replaceCons = replaceCons.replace('-', '');
  replaceCons = replaceCons.replace('ay', '');

  var pigWord = replaceCons + word.slice(0, ayIndex);
  return pigWord;
}

console.log(translatePhraseToEnglish('is-th...ay56) i,s-ay iglatin0,/-pay'));