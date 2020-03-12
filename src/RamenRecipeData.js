/**
 * Get data from database
 */
let url = "/RamenRecipes/resources";
export async function getRecipeData() {
  let result = await fetch(url + "/recipe/1", {
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


export async function getRecipeData2() {
  let result = await fetch(url + "/recipe/2", {
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


export async function getRecipeData3() {
  let result = await fetch(url + "/recipe/3", {
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



