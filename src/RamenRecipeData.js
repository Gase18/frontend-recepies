/**
 * Get data from database
 */
export async function getRecipeData(){
    let result = await fetch("/RamenRecipes/resources/recipes",{
      method: "GET"

    });


    /**
     * extra data
     * */
    if(result.ok)
    {
      const data = await result.json();
      return await data;
    }
    throw new Error("Could not fetch data!");
  }


  
  