import './App.css';
import DisplayCocktail from "./components/DisplayCocktail";
import Layout from "./components/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorMsg from "./pages/ErrorMsg";
import FavouriteDrinks from "./components/FavouriteDrinks";
import Homepage from "./pages/Homepage";
import {DrinksProviderWrapper} from "./state/DrinksContext";
import {FavouriteDrinksProviderWrapper} from "./state/FavouriteDrinksContext";


const App = () => {

    return (
        <BrowserRouter>
            <DrinksProviderWrapper>
                <FavouriteDrinksProviderWrapper>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Homepage/>} exact/>
                            <Route path='/cocktail-maker' element={<Homepage/>} exact/>
                            <Route path='/favourites' element={<FavouriteDrinks/>}/>
                            <Route path='/error' element={<ErrorMsg/>}/>
                            <Route path='/results' element={<DisplayCocktail/>}/>
                        </Routes>
                    </Layout>
                </FavouriteDrinksProviderWrapper>
            </DrinksProviderWrapper>
        </BrowserRouter>
    )
}


export default App;

