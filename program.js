function telephoneCheck(str) {
  
//  const replaced = str.replace(/\D/g, '');
//  console.log(replaced);

//  if(replaced.length === 11 && replaced[0] === 1) {
//    return true;
//    } else {
//    if(replaced.length === 10) {
//      return true;
//    } else {
//      return false;
//    }
//}

  const validPatterns =[
    /^1? ?\d{3}-\d{3}-\d{4}$/g,
    /^1?\(\d{3}\)\d{3}-\d{4}$/g,
    /^1? ?\(\d{3}\) \d{3}-\d{4}$/g,
    /^\d{3} \d{3} \d{4}$/g,
    /^\d{10}$/g,
    /^1 \d{3} \d{3} \d{4}$/g,
  ]

  if(str.match(validPatterns[0])) {
    return true;
  } else if(str.match(validPatterns[1])) {
    return true;
  } else if(str.match(validPatterns[2])) {
    return true;
  } else if(str.match(validPatterns[3])) {
    return true;
  } else if(str.match(validPatterns[4])) {
    return true;
  } else if(str.match(validPatterns[5])) {
    return true;
  } else {
    return false;
  }

}

telephoneCheck("1 555-555-5555");
