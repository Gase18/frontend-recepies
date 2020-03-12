/**
 * Get data from database
 */
let url = "/RamenRecipes/resources";
export async function getIngredientData() {
    let result = await fetch(url + "/recipe_has_ingredients/1", {
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

export async function getIngredientData2() {
    let result = await fetch(url + "/recipe_has_ingredients/2", {
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

export async function getIngredientData3() {
    let result = await fetch(url + "/recipe_has_ingredients/3", {
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



