describe('Calcurator', function() {
  
  it('should return 0 for an empty string', function() {
    expect(calc('')).toEqual(0);
  });
  
  it('should return same number for one argument', function() {
    expect(calc('1')).toEqual(1);
  });
  
  it('should return sum of numbers devided by coma', function() {
    expect(calc('1,2')).toEqual(3);
  });
  
  it('should handle an unknown amount of numbers', function() {
    expect(calc('1,2,3,4,20')).toEqual(30);
    expect(calc('20,100,10')).toEqual(130);
  });
  
  it('should handle new lines between numbers', function() {
    expect(calc('1\n2,3')).toEqual(6);
  });
  
  it('should Support different delimiters', function() {
    expect(calc('//;\n1;2')).toEqual(3);
    expect(calc('//k\n1k2')).toEqual(3);
  });
  
  it('negative numbers should return exeption', function() {
    expect(function(){calc('-1')}).toThrowError('negatives not allowed -1');
    expect(function(){calc('-2,-3')}).toThrowError('negatives not allowed -2,-3');
  });
  
  it('should ignore numbers bigger than 1000', function() {
    expect(function(){calc('1,1001').toEqual(1)});
  })
})