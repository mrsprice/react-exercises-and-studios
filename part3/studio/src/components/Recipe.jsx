import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://barefootcontessa.com/recipes/chicken-pot-pie-soup";
   let authorPhoto = "https://d14iv1hjmfkv57.cloudfront.net/assets/cookbooks/modern-comfort-food/_540x720_crop_center-center_82_line/Gart_ModComfort_cvrfr_final.jpg.webp?v=1708575912";
   let authorName = "Ina Garten";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{"Ina Garten"}</h3>
            <a href={"https://d14iv1hjmfkv57.cloudfront.net/assets/cookbooks/modern-comfort-food/_540x720_crop_center-center_82_line/Gart_ModComfort_cvrfr_final.jpg.webp?v=1708575912"}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["3 chicken breasts, skin-on, bone-in (2½ to 3 pounds total)",
      "Good olive oil",
      "Kosher salt and freshly ground black pepper",
      "6 tablespoons (¾ stick) unsalted butter",
      "5 cups chopped leeks, white and light green parts (3 leeks) (see note)",
      "4 cups chopped fennel, tops and cores removed (2 bulbs)",
      "3 cups (½-inch) diced scrubbed carrots (5 medium)",
      "1 tablespoon minced garlic (3 cloves)",
      "1 tablespoon chopped fresh tarragon leaves",
      "¼ cup Wondra flour",
      "¾ cup cream sherry, divided",
      "7 cups good chicken stock, preferably homemade",
      "1 (2 by 3-inch) piece of Italian Parmesan cheese rind",
      "1 (10-ounce) box frozen peas",
      "1 cup frozen whole pearl onions",
      "¼ cup minced fresh parsley",
      "Puff Pastry Croutons (recipe follows)"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
            <li>{ingredients[8]}</li>
            <li>{ingredients[9]}</li>
            <li>{ingredients[10]}</li>
            <li>{ingredients[11]}</li>
            <li>{ingredients[12]}</li>
            <li>{ingredients[13]}</li>
            <li>{ingredients[14]}</li>
            <li>{ingredients[15]}</li>
            <li>{ingredients[16]}</li>
            <li>{ingredients[17]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chicken Pot Pie Soup</h1>
            <p>Preheat the oven to 350 degrees.

Place the chicken on a sheet pan skin side up, rub the skin with olive oil, and season generously with salt and pepper. Roast for 35 minutes, until a thermometer registers 130 to 140 degrees. Set aside until cool enough to handle. Remove and discard the skin and bones and cut the chicken in 1-inch dice. Set aside.

Meanwhile, melt the butter in a medium (10 to 11-inch) heavy-bottomed pot or Dutch oven, such as Le Creuset, over medium heat. Add the leeks, fennel, and carrots, and sauté over medium-high heat for 10 minutes, stirring occasionally, until the leeks are tender but not browned. Stir in the garlic and tarragon and cook for one minute. Sprinkle on the flour and cook, stirring constantly, for 2 minutes. Add ½ cup of the sherry, the chicken stock, 4 teaspoons salt, 1½ teaspoons pepper, and the Parmesan rind. Bring to a boil, lower the heat, and simmer, partially covered, for 20 minutes.

Add the chicken, peas, and onions and simmer uncovered for 5 minutes. Off the heat, remove the Parmesan rind and add the remaining ¼ cup of sherry and the parsley. Serve hot in large shallow bowls with two Puff Pastry Croutons on top.

Note: To prep the leeks, cut off the dark green leaves at a 45-degree angle and discard. Chop the white and light green parts, wash well in a bowl of water, and spin dry in a salad spinner. Wet leeks will steam rather than sauté.

</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://d14iv1hjmfkv57.cloudfront.net/assets/recipes/chicken-pot-pie-soup/_1200x600_crop_center-center_82_line/159397/IMG_4375.jpg?v=1708577012" alt="Bowl of Chicken Pot Pie Soup" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
