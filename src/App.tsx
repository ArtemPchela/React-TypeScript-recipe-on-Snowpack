import React, {useState} from 'react';
// import RecipeList from './RecipeList';
import Recipe from "./Recipe";

function App() {
    const mashedPotatoesRecipe = {
        title: "Mash Potatoes",
        description: "Carriers for gravy",
        instructions: 'fry',
        steps: [
            'Cut Potatoes',
            'Boil Potatoes',
            'Mash Potatoes'
        ]
    };

    const [recipe, setRecipe] = useState(mashedPotatoesRecipe);

    // Setting up state
    // Loading data
    return (
        // <RecipeList />
        <Recipe {...recipe} />
    )
}

export default App;