class PokemonsController < ApplicationController
  def create
    pokemon = Pokemon.new
    pokemon.image = params[:image]
    pokemon.name = params[:name]
    pokemon.level = params[:level]
    pokemon.save
  end
end
