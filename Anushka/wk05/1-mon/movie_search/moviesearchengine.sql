create DATABASE moviesearchengine;
create table movies
(
  id serial PRIMARY KEY,
  imdbID VARCHAR(255) unique,
  title VARCHAR(300),
  year varchar(4),
  poster VARCHAR(500),
  rating decimal,
  plot text,
  released VARCHAR(100),
  genre VARCHAR(50),
  lang VARCHAR(50),
  director VARCHAR(250),
  writer VARCHAR(250),
  actors VARCHAR(250)
);