# https://gist.github.com/sherif-gamal/61aafb1cf473990ee15e95d6010fac5e

def is_palindrome1(str)
  str == str.reverse
end

def is_palindrome2(str)
  n = str.length

  for i in 0..n/2 do
    return false if str[i] != str[n - i - 1 ]
  end

  true
end

def is_palindrome3(str, s, e)
  # if s >= e
  #
  # return str[s] == str[e] && is_palindrome(str, s + 1, e - 1)

  s >= e ? true : str[s] == str[e] && is_palindrome3(str, s + 1, e - 1)

end

def palindrome(str)
  str = str.downcase.gsub(/[^a-z0-9]/,"")
  puts is_palindrome1(str)
  puts is_palindrome2(str)
  puts is_palindrome3(str, 0, str.length - 1)
end

palindrome("A man, a plan, a canal: Panama")
