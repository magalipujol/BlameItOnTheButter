create DATABASE blameitonthebutter;

create table recipes(
    recipe_id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    instructions VARCHAR(255),
    ingredients VARCHAR(max),
    estimated_time INT,
    meal VARCHAR(255)

)