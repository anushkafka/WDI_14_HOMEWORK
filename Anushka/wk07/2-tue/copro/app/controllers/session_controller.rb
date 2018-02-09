class SessionController < ApplicationController

  def new
    
  end

  def create
    usr = User.find_by(email: params[:email])
    binding.pry
    if usr && usr.authenticate(params[:password])

      session[:user_id] = usr.id
      redirect_to '/'
    else
      return "Error!"
    end
  end

end