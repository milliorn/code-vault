s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]

# Puts out every element inside the sub-arrays inside s.
s.each do |s_sub|
  s_sub.each do |y|
    puts y
  end
end