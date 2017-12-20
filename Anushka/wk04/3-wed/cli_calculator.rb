require 'pry'
bodmas = ['**','/','*','+','-']
isContinue = true
input_str = ''
input_bool = ''
equation = []

puts "Enter equation"
while isContinue do
  input_str = gets.chomp
  equation << input_str.scan(/\d+/).first
  equation << input_str.delete(input_str.scan(/\d+/).first)
  
  puts "continue? y/n"
  input_bool = gets.chomp

  if input_bool.upcase != 'N'
    isContinue = false
  end
end

binding.pry

equation.


def operation num1,num2,operator
  puts num1.send(operator, num2)
 end
 operation 2.00, 3.00, :**

#binding.pry
