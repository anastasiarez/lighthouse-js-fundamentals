function makeLine(length){
  var line = "";
  for(var j =1; j <= length; j++){
    line = line + "* ";
  }
  return line + "\n";
}

function makeTriagle(length){
  var triangle = "";
  for (var lineNumber = 1; lineNumber <= length; lineNumber++){
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

console.log(makeTriagle(10));
