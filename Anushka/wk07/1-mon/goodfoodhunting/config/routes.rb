Rails.application.routes.draw do
  resources :comments
   resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
                
                # controller file & method
  root to: 'pages#home' #get '/', to: 'pages#home'
  get '/about', to: 'pages#about'
  # get '/dishes/new', to: 'dishes#new'
  # get '/dishes/:id', to: 'dishes#show'
  # get '/dishes', to: 'dishes#index'
  # post '/dishes', to: 'dishes#create'
  get 'api/dishes', to: 'dishes#api_index'
  post 'api/comments', to: 'comments#api_create'
end