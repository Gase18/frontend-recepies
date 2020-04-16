/**
 * Get data from database
 */
let url = "/RamenRecipes/resources";

//Poängen med att lägga saker i separata funktioner är för att kunna återanvända
//snarlik kod till flera olika saker. Dessa tre funktioner är nästa helt identiska
//varför inte bara ha en funktion?

//bättre alternativ
export async function getRecipeData(id) {
  let result = await fetch(url + "/recipe/" + id, {
    method: "GET"

  });

  /**
   * extra data
   * */
  if (result.ok) {
    const data = await result.json();
    return await data;
  }
  throw new Error("Could not fetch data!");
}