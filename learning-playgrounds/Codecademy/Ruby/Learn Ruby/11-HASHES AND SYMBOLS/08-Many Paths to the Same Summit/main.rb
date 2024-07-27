# Update your code from the last exercise to use .intern instead of .to_sym.

strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]
symbols = []

strings.each do |s|
  symbols.push(s.intern)
end
print symbols
