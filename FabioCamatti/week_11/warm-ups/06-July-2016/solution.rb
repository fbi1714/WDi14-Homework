# https://gist.github.com/sherif-gamal/335f1d252e210227ca5ec340ff01946a
@trues = {}

def collatz(seq, n)
  return true if n == 1 || @trues[n]
  seq[n] = true
  return n % 2 == 0 ? collatz(seq, n / 2) : collatz(seq, 3 * n + 1)
end

def collatz_all(n)
  for i in 2..n do
    seq = {}
    x = collatz(seq, i)
    puts "#{i}: #{x}"
    if x
      seq.each do |k, v|
        @trues[k] = v
      end
    end
  end
end

puts collatz_all(10)
