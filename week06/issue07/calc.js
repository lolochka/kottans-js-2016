function calc(args) {
    
  var match = args.match(/\/\/(\D)\n/);
  var delimeter = /\n|,/g;
 
  if (match) {
    args = args.slice(match[0].length);
    delimeter = match[1];
  }
  
  var numbers = args.split(delimeter);
  var sum = 0;
  
  var negative = []
  
  numbers.forEach(function(item) {
    if (0 <= item && item <= 1000) {
      return sum = sum + +item;
    }
    if (item < 0 ) negative.push(item);
  })
  
  if (negative.length > 0) throw new Error('negatives not allowed ' + negative);
  
  return sum;
}