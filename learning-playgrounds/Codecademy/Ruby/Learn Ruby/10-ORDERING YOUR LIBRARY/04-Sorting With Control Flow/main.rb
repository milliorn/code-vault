# Update your alphabetize method with two parameters: arr, representing the array to be passed in, and rev, a boolean that defaults to false.
# Inside your method, add a line that calls .sort! on the arr array. Since it is the last line of the method, the sorted array will be returned.
# After your .sort! call, add an if-else statement. If rev is true, call reverse! on arr, else return arr.
def alphabetize(arr, rev = false)
  arr.sort!
  if rev
    arr.reverse!
  else
    arr
  end
end

numbers = [5, 1, 3, 8]

puts alphabetize(numbers)