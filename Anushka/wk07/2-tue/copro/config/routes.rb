Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :projects  #, only: [:new, :create]
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'pages#home'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'

  
end
