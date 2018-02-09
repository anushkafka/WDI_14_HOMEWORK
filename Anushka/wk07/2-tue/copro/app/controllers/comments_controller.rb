class CommentsController < ApplicationController

  def create
    redirect_to '/login' unless session[:user_id]

    comment = Comment.new
    comment.user_id = session[:user_id]
    comment.project_id = params[:project_id]
    comment.comment = params[:comment]    
    if comment.save 
      redirect_to "/projects/#{comment.project_id}"
    else
      return 'error'
    end
  end
end
