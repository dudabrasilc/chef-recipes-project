# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "👩👨 Seeding users..."

user1 = User.create(username: 'Jean Claude', password: 'dog')
user2 = User.create(username: 'Melissa Windsor', password: 'cat')
user3 = User.create(username: 'Josh Taylor', password: 'ball')
user4 = User.create(username: 'David Bright', password: 'orange')
user5 = User.create(username: 'Daniel Mark', password: 'cucumber')
user6 = User.create(username: 'Pamela Hurdein', password: 'banana')
user7 = User.create(username: 'Paola Frose', password: 'beans')
user8 = User.create(username: 'Jeremy Guillermo', password: 'party')


puts "🥘🍝 Seeding recipes..."

recipe1 = Recipe.create(title: "Potato with wok", image: "https://i.pinimg.com/564x/9e/d1/bc/9ed1bcc6389cda1abe0f7837bd62017b.jpg", chef: "Chef John Zhang", description: "Check out Chef's favorite potato recipes in two form. Masterchef John Zhang shares easy and delicious ways of cooking potato with a wok. The 1st recipe, Potato Pancakes - Wonderfully crisp, tender, and just melt-in-your mouth amazing. The 2nd recipe, Beef and Potato, is simple to make. It's a comforting, delicious dinner any day of the week.", video: "https://www.youtube.com/embed/xXPxUtWDTAA")

recipe2 = Recipe.create(title: "Creamy Mushroom pasta", image: "https://i.pinimg.com/564x/ef/37/4e/ef374ef4f4c232ddc62f346fc4839133.jpg", chef: "Chef Jean Pierre", description: "Creamy Mushroom Pasta is an easy recipe for anyone to make! Make sure to cook all the water out of the mushrooms; even people that do not like mushrooms love this recipe!", video: "https://www.youtube.com/embed/xXPxUtWDTAA&t=4s")

recipe3 = Recipe.create(title: "Fine Salmon", image: "https://i.pinimg.com/564x/7c/3a/de/7c3adec4beb94d9af06ed0ca912c862f.jpg", chef: "Chef Majk", description: "This recipe is very simple and you can do it at home for your friends and family. Brussel sprouts and chestnuts are great combinations for Christmas dinner. If you wanna enjoy Michelin star food you don't have to spend all your money in a fine dining restaurant. You can learn to cook fine dining dishes at home and with some plating skills amaze everyone in your house.", video: "https://www.youtube.com/embed/6o0oTQpI6RM")

recipe4 = Recipe.create(title: "Plated Chicken Breast", image: "https://i.pinimg.com/564x/2c/dc/3c/2cdc3cd5e3cd9625e4d49c5957c09362.jpg", chef: "Chef Majk", description: "Michelin star roasted cauliflower puree with yeast at home for you and your family. Super simple but tasty fine dining chicken recipe. You can learn to cook at home fine dining dishes and with your Michelin star plating amaze everyone in your house.", video: "https://www.youtube.com/embed/CexvLTTezw4")

recipe5 = Recipe.create(title: "L'Omelette", image: "https://i.pinimg.com/564x/16/42/82/1642824601c04eaeb554b84449ddb9c6.jpg", chef: "Chef Mauro Colagreco", description: "The omelette is the best known and most reproduced French comfort food. Two ingredients for a recipe as simple as full of pitfalls. To discover its secrets we went to Menton, inside Mauro Colagreco's 3-star Michelin Mirazur restaurant. The young (and very excited) chef de cuisine Donato Russo was confronted with the classic recipe of the French omelette, to then present a soft and delicious variant created with the soufflé technique. The original use of a great Italian cheese unites the two recipes.", video: "https://www.youtube.com/embed/4XiWUis2eKc")

recipe6 = Recipe.create(title: "The filet Rossini", image: "https://i.pinimg.com/564x/bf/a0/64/bfa0646d83d17948d8947711468309dc.jpg", chef: "Martino Ruggieri", description: "Filet mignon, black truffle and foie gras are the basic ingredients of the Tournedos Rossini or Filetto alla Rossini, a classic of French cuisine whose invention is attributable, however, to the Italian composer Gioachino Rossini (19th century), one of the greatest opera composers of all times as well as a great lover of good food. Martino Ruggieri, chef of the 3-star Michelin restaurant Allenò Paris au Pavillon Ledoyen, after having accompanied us to discover ratatouille, tells the story of one of the richest and most opulent dishes ever with charm and competence, through the unanimous interpretation of his very young brigade . Let the show begin!", video: "https://www.youtube.com/embed/C30oD7w2nOw")

recipe7 = Recipe.create(title: "Chicken Parmesan", image: "https://chefjeanpierre.com/wp-content/uploads/2021/03/Thumnail-1-e1660000380389-1080x620.jpg.webp", chef: "Chef Jean-Pierre", description: "Chicken Milanese with a Marinara Sauce and some fantastic cheese on top. Come watch how its done!", video: "https://www.youtube.com/embed/2S3PIzbdxAw")

recipe8 = Recipe.create(title: "Dal Makhani", image: "https://i.pinimg.com/564x/4b/3a/7f/4b3a7f55ddfa895facdcbb286bc29175.jpg", chef: "Atul Kochhar", description: "Atul Kochhar, the first Indian chef to be awarded a Michelin Star, gives us a step by step guide to creating a traditional Dal Makhani that his mother would make him as a child.", video: "https://www.youtube.com/embed/MUesLbKX1bA")

recipe9 = Recipe.create(title: "Cacio e Pepe", image: "https://i.pinimg.com/564x/76/3e/8c/763e8ce4f4173df1d94a521fc02b30ce.jpg", chef: "Simone Zanoni", description: "Michelin starred chef behind the Le George restaurant at the Four Seasons Hotel Geroge V in Paris, Simone Zanoni cooks his recipe for the very best cacio e pepe spaghetti, exclusively for Vogue Paris. Follow this Italian classic at home, step by step. .", video: "https://www.youtube.com/embed/5E8AD5gJUgc")


puts "✍🏻🗒️ Seeding comments..."

comment1 = Comment.create(description: "I really like making this plate. I'd recommend to not add salt to the meat until it is sealed.", user_id: 2, recipe_id: recipe1.id)

comment2 = Comment.create(description: "Impressed by the skills of this chef. It taught me a lot!", user_id: 2, recipe_id: recipe2.id)

comment3 = Comment.create(description: "An exotic and artistic dish, Michelin Star!!", user_id: 2, recipe_id: recipe3.id)

comment4 = Comment.create(description: "I love this one. Definitely a new face to the chicken breasts! But I wouldn't serve it at a restaurant.", user_id: 2, recipe_id: recipe4.id)

comment5 = Comment.create(description: "I have always watched your videos and they always inspire me to adapt popular dishes.", user_id: 3, recipe_id: recipe5.id)

comment6 = Comment.create(description: "I would say this is one of the best recipes I have seem for this dish. I already made it and it's nothing compared to what I have tried so far. Good job.", user_id: 3, recipe_id: recipe6.id)

comment7 = Comment.create(description: "Simple and delicious. I would like to see more videos of your recipes, talented chef.", user_id: 4, recipe_id: recipe7.id)

comment8 = Comment.create(description: "It's not easy to make dishes from different cullinaires when you don't have experience with them. I'd try making this one.", user_id: 4, recipe_id: recipe8.id)

comment9 = Comment.create(description: "Amazing recipe. However I have a suggestion: you could make your own past with only eggs to add.", user_id: 5, recipe_id: recipe9.id)

comment10 = Comment.create(description: "Fine plate and well presentable!", user_id: 5, recipe_id: recipe3.id)

comment11 = Comment.create(description: "This chef has so much talent, making everyday dishes always tasty.", user_id: 6, recipe_id: recipe2.id)


puts "✅ Done seeding!"