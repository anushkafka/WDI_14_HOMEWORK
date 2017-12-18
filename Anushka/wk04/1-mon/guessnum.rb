require 'pry'

puts "Enter range"
range = gets.to_i
puts "Guess the number"
guessed_num = gets.to_i
random_num = rand(range)

while random_num != guessed_num
if random_num == guessed_num
  puts "Congrats! your guess is correct"
elsif random_num > guessed_num
  puts "Wrong! Guess Higher"
  guessed_num = gets.to_i
elsif random_num < guessed_num
  puts "Wrong! Guess Lower"
  guessed_num = gets.to_i
end
end

if random_num == guessed_num
  puts "Congrats! your guess is correct"
end