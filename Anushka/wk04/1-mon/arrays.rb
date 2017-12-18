require 'pry'
days_of_the_week = ["Monday","Tuesday","Wedsday","Thursday","Friday",
"Saturday","Sunday"]

days_of_the_week.unshift(days_of_the_week.pop)

# Part 03/04
days_of_week = Array.new(2)
days_of_week[0] = ["Monday","Tuesday","Wedsday","Thursday","Friday"]
days_of_week[1] = ["Saturday","Sunday"]

days_of_week.pop.sort


#binding.pry
