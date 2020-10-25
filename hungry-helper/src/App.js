import React, { useState } from 'react';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

const App = () => {
    const [recipe, setRecipe] = useState()
    
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Home />
            </div>
        </div>
    );
};

export default App;