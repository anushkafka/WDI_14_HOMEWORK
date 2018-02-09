Project.delete_all
User.delete_all

arr1 = ['cal','lightman', 'lucifer','morningstar']
arr2 = ['gillian', 'foster', 'anakin','skywalker']

user = User.new
user.email = "dt@ga.co"
user.password = "pwd"
user.save

10.times do
  Project.create(title: "#{arr1.sample} #{arr2.sample}",
                  user_id: user.id)
end