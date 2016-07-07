# https://gist.github.com/sherif-gamal/6dadc93128864eb91292a0e8548c96c1

def missing_number(numbers)
  n = numbers.length;
  numbers = numbers.sort
  for i in 1..n do
    return i if i != numbers[i - 1]
  end

  return -1
end

a = [3,2,5,4,1,7,6,9,10]
puts missing_number(a)
