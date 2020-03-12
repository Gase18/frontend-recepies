/**
 * Get data from database
 */
export async function getIngredientData(){
    let result = await fetch("/RamenRecipes/resources/recipe_has_ingredients",{
      method: "GET"

    });


    /**
     * extra data
     * */
    if(result.ok)
    {
      const data = await result.json();
      return await result.json();
    }
    throw new Error("Could not fetch data!");
  }


  
  