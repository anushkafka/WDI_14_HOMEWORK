require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/movie_result' do
  search_key = params["movie"]

  response = HTTParty.get('http://www.omdbapi.com/?t='+search_key+'&apikey=ef858bce')
  @no_error = response.parsed_response["Response"]

  @title = response.parsed_response["Title"]
  @year = response.parsed_response["Year"]
  @poster = response.parsed_response["Poster"]
  @rating = response.parsed_response["imdbRating"]
  @plot = response.parsed_response["Plot"]

  @released = response.parsed_response["Released"]
  @runtime = response.parsed_response["Runtime"]
  @genre = response.parsed_response["Genre"]
  @language = response.parsed_response["Language"]

  @director = response.parsed_response["Director"]
  @writer = response.parsed_response["Writer"]
  @actors = response.parsed_response["Actors"]

  erb :movie
end





