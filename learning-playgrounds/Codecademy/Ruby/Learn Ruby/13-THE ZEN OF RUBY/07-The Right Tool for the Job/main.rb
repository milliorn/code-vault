my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

my_array.each { |x|
  if x % 2 == 0
    puts x
  end
}