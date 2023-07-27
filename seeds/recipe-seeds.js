const { Recipe } = require('../models');

const recipeData = [
    {
        recipe_name: 'Creamed Corn Orzo',
        description: 'Quick, one pot comfort food that can be made in 25 minutes!',
        instructions: '1. Heat a large pot over meadium-high heat and cook the bacon until crisp.\n2. Remove the bacon and drain off most of the bacon grease. \n3. To the same pot add the butter and onion, cook till fragrant (about 5 minutes).\n4. Mix in the G=garlic, orzo, corn, and thyme. Cook till orzo becomes golden and toasted (about 2 minutes). \n5. Add the broth to the pot and bring to a boil. Once boiling reduce to a simmer for  8-10 minutes, or until orzo is al dente. Stir often. \n6. Stir in the milk, green chilies, cheddar, parmesan, and green onions and cook till warmed throughout. \n Servers 4',
        source: 'Half-Baked Harvest',
        category_id: 2,
    },
    {
        recipe_name: 'Caramel Cream Cheese Cinnamon Rolls',
        description: 'Light and fluffy cinnamon rolls perfect for any occasion! These cinnamon rolls are taken to the next level with a brown butter and caramel cream cheese frosting. This recipe takes about 2.5 hours from start to finish and will make 12 cinnamon rolls',
        instructions: '1. using a stand mixer with a dough hook attachment combine the milk, yeast, and brown sugar. Let the mixture sit for 5 - 10 minutes until the mixture becomes bubbly. \n2. Add in the butter, eggs, vanilla, salt, and 3.5 - 4 cups of flour and mix till fully incoprperated (if the dough is still sticky add in more flour till the dough is smooth to the touch.\n3. Cover the bowl with plastic wrap and let it sit till the dough doubles in size (about 1 hour).\n4. While the dough rises prep the filling by combining the brown sugar, sugar, and cinnamon\n5. When the dough is done rising roll it out onto a floured surface unitl you get a 12 x 18 inch rectangle\n6. Spread the butter out onto the dough and sprinkle on the cinnamon sugar mixture.\n7. Starting with the longer end roll the dough into a log keeping it as tigh as possible as you roll. Cut the log into 12 equal sections and place into a greased 9x13 inch baking dish.\n8. Cover the cinnamon rolls in plastic wrap and allow to rise for another 15-20 minutes. Meanwhile preheat the over to 350 F. \n9. Bake the rolls for 25-30 minutes until golden brown.\n10. While the cinnamon rolls cook make the icing. Add the butter to a pot and heat over mediume heat unitl butter is slightly brown and has a nutty smell (about 3 minutes), then remove from heat.\n11. In a seperat bowl beat the cream cheese until fluffy, once fluffy add the brown butter and beat to combine. Then add the powdered sugar, caramel, vanilla, and a pinch of salt.\n12. When the cinnamon rolls come out of the oven top with icing and serve!\nMakes 12 Cinnamon Rolls',
        source: 'Half-Baked Harvest',
        category_id: 1,
    },
    {
        recipe_name: 'Garlic Butter Chicken and Zucchini Orzo',
        description: 'A quick and easy dinner to satisfy the whole family. This meal takes one hour to make from start to finish and can server a family of 6',
        instructions: '1. Preheat oven to 400° F\n2. In a medium bowl stir the chicken with 2 tbsp olive oil, 2 tbsp Italian seasoning, Dijon mustard, honey, and a pinch of salt and pepper\n3. Heat 1 tbsp of olive oil in a large skillet over medium-high heat. Add the chicken. Sear on both sides until golden, 3-5 minutes. Remove everything from the skillet and set aside.\n4. To the skillet, add 2 tbsp butter, the orzo, shallots, garlic, and 2 tbsp thyme. Mix in the zucchini slices. Cook until the orzo is toasted (about 2 minutes)\n5.  Add the wine and 2 cups water. Season with salt and pepper. Bring to a boil over high heat. Slide the chicken and any juices left on the plate back into the skillet. Arrange the cheese around the chicken. Bake, uncovered for 15 minutes or until the chicken is cooked through.\n6. While the skillet is in the oven begin making the garlic butter: Lightly brown 4 tbsp butter in a small skillet. Add 1 tbsp of Italian seasoning and 1 tbsp of thyme. Season with salt, pepper, and chili flakes.\n7. Once the chicken comes out of the oven top with the garlic butter and serve!',
        source: 'Half-Baked Harvest',
        category_id: 3,
    },
    {
        recipe_name: 'Chocolate Peanut Butter Ice Cream Stuffed Dates',
        description: 'A healthier Snickers alternative!',
        instructions: '1. Stuff the dates with 1-2 tbsp of ice cream and place on a parchment lined baking sheet and freeze for 30 minutes. \n2. Once frozen spread peanut butter over the ice cream and top with peanuts. Place back in the freezer and freeze for 1 hour or overnight. \n3. Melt the chocolate and cocnut oil together in the microwave. Dip each frozen date into the chocolate and place on the baking sheet and freeze for 2 hours',
        source: 'Half-Baked Harvest',
        category_id: 4,
    },
    {
        recipe_name: 'Kimchi and Sweet Corn Fritters',
        description: 'Vegan combination of kimchi and corn fritters ready in 40 minutes!',
        instructions: '1. Chop the kimchi and add it to a large bowl along with the corn kernals, gochujang, green onions, flour, cornstarch, kimchi juice, and sesame oil. Mix until there is no visible flour or cornstarch \n2. Heat a large skillet over medium high heat and prep the skillet with oil \n3. Add batter to the heated pan and spread the batter out into a thin layer. Fit as many fritters in the pan as possible and cook for 2-3 minutes on each side until golden brown and crisp. \n4. Serve hot with vegan mayo or sour cream \nMakes 24 Fritters',
        source: 'The Foodie Takes Flight',
        category_id: 4,
    },
    {
        recipe_name: '',
        description: '',
        instructions: '',
        source: '',
        category_id: ,
    },
    {
        recipe_name: '',
        description: '',
        instructions: '',
        source: '',
        category_id: ,
    },
    {
        recipe_name: '',
        description: '',
        instructions: '',
        source: '',
        category_id: ,
    },
    {
        recipe_name: '',
        description: '',
        instructions: '',
        source: '',
        category_id: ,
    },
    {
        recipe_name: '',
        description: '',
        instructions: '',
        source: '',
        category_id: ,
    },
    {
        recipe_name: '',
        description: '',
        instructions: '',
        source: '',
        category_id: ,
    },
    {
        recipe_name: '',
        description: '',
        instructions: '',
        source: '',
        category_id: ,
    },

]