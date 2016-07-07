# http://stackoverflow.com/questions/8462512/ruby-way-to-check-for-string-palindrome
require 'pry'

def is_palindrome(value)
 value.downcase!

 # Reverse the string
 reversed = ""
 count = value.length

 while count > 0
  count -= 1
  reversed += value[count]
 end
# Instead of writing codes for reverse string
# we can also use reverse ruby method
# something like this value == value.reverse
if value == reversed
  return "#{value} is a palindrom"
 else
  return "#{value} is not a palindrom"
 end
end

puts "Enter a Word"
a = gets.chomp
p is_palindrome(a)
