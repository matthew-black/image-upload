DROP TABLE IF EXISTS "image";
DROP TABLE IF EXISTS "user";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "image" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (500),
    "image_path" VARCHAR (250),
    "owner_id" INT REFERENCES "user" (id) ON DELETE CASCADE NOT NULL
);

INSERT INTO "user"
  ("username", "password")
  VALUES
  ('matt', '$2a$10$/KtP6uAI0ivyps7D2aVIRuejSLVE9sFHqpvqnGoMz2kYg3/gSXYIS');

INSERT INTO "image"
  ("description", "image_path", "owner_id")
  VALUES
  ('Bronze Gitane Tour de France', 'https://i.pinimg.com/originals/cb/5c/7e/cb5c7efe818df4c202017123a7f07aa5.jpg', 1),
  ('Blue Gitane Tour de France', 'https://www.velovilles.com/out/pictures/master/product/1/gitane-tour-de-france-rennrad-bicycle-velo-_1768.jpg', 1);