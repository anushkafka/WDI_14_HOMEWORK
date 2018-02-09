class DishesController < ApplicationController
  def new
    
  end

  def index
    @dishes = Dish.all
  end

  def api_index
    @dishes = Dish.all
    render json:@dishes
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.save
    redirect_to '/dishes'
  end

  def destroy
    @dish = Dish.find(params[:id])
    if @dish.destroy
      redirect_to '/dishes'
    else
      render :show
    end
  end
end
