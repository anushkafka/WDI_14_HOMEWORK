require 'pry'
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
new_planeteers = []
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = []

planeteers[1]
planeteers.push("heart")

# laneteers.delete("Captain Planet")


  def custom_remove(planeteers, position)
    array = []
    planeteers_array = []
    planeteers_array = planeteers_array.concat(planeteers)

    planeteers.each do |elm, index|
      #binding.pry
      if elm != "Captain Planet"
        array[index] = elm
      end 
    end
    return array
  end

  new_planeteers = custom_remove(planeteers, planeteers.index("Captain Planet"))
  puts new_planeteers

  heroes = planeteers.concat(rangers)
  heroes.sort_by { |word| word.downcase }

  
