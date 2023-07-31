

const getRecipes = async () => {
    let data = await ( await fetch('/api/recipes') ).json();
    console.log(data);
};

getRecipes();