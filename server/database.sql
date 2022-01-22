create DATABASE blameitonthebutter;

create table recipes(
    recipe_id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    instructions VARCHAR(255),
    ingredients VARCHAR(max),
    estimated_time INT,
    meal VARCHAR(255)

)

-- CREATE TABLE public."recipes-ingredients"
-- (
--     recipe_id serial,
--     ingredient_id serial,
--     CONSTRAINT recipe_id FOREIGN KEY (recipe_id)
--         REFERENCES public.recipes (recipe_id)
--         ON DELETE CASCADE,
--     CONSTRAINT ingredient_id FOREIGN KEY (ingredient_id)
--         REFERENCES public.ingredients (ingredient_id)
--         ON DELETE CASCADE);
-- create table public."meals"
-- (
--     meal_id serial PRIMARY KEY,
--     type VARCHAR(255) NOT NULL
-- );

-- create TABLE public."recipes-meals"
-- (
--     recipe_id serial,
--     meal_id serial,
--     CONSTRAINT recipe_id FOREIGN KEY (recipe_id)
--         REFERENCES public.recipes (recipe_id)
--         ON DELETE CASCADE,
--     CONSTRAINT meal_id FOREIGN KEY (meal_id)
--         REFERENCES public.meals (meal_id)
--         ON DELETE CASCADE);
-- )

-- ALTER TABLE IF EXISTS public."recipes-ingredients"
--     OWNER to postgres;