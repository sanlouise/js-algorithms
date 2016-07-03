function reverseInPlace(str){
  return str.split(' ').reverse().join(' '); //Adams-Hallie Sandra am I
}

function reverseStringInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join(''); //I ma Ardnas eillaH-smadA
}


console.log(reverseStringInPlace('I am Sandra Adams-Hallie'));