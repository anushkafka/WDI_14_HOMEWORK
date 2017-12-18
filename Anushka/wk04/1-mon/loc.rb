require 'pry'
puts "Enter filename"
filename = gets
count = 0

File.open(filename.strip, 'r') do |f1|  
  #binding.pry
  while line = f1.gets  
    count = count + 1 
  end 
end

puts " #{count} lines of code inside file"