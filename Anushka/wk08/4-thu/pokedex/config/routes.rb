Rails.application.routes.draw do
  resources :pokemons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'

  # get /pokemon, to: 'dishes#index'
  # <a href="/dishes?dish_type=dessert&">
end
