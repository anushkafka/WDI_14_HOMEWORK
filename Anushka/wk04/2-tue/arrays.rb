require 'pry'
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
new_planeteers = []
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = []

planeteers[1]
planeteers.push("heart")

# laneteers.delete("Captain Planet")


  def custom_remove(planeteers, position)
    counter = 0
    array = []
    planeteers_array = []
    planeteers_array = planeteers_array.concat(planeteers)

    planeteers.each_with_index.map {|elm, index| 
    if index != position
      array[counter] = elm
      counter = counter + 1
    end
   
  }
  return array 
  end

  new_planeteers = custom_remove(planeteers, planeteers.index("Captain Planet"))
  
  puts new_planeteers

  heroes = planeteers.concat(rangers)
 
  heroes.sort_by { |word| word.downcase }
 binding.pry

  
