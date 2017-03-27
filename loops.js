function forLoop(array) {
  for(var i=1; i<=25; i++) {
    var text = "";
    if(i==1) {
      text = "I am 1 strange loop";
    } else  {
      text = "I am "+i+" strange loops";
    }
    array.push(text);
  }
  return array;
}

function whileLoop(n) {
  while(n>0) {
    console.log(n);
    n--;
  }
  return "done";
}

function doWhileLoop(array) {
  while(array.length>0 && maybeTrue()) {
      array.pop();
  }
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
