import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import CharactersPage from "./pages/CharactersPage"
import FavoritesPage from "./pages/FavoritesPage"
import CharacterDetailsPage from "./pages/CharacterDetailsPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[{
            index: true,
            element: <HomePage/>
        },
        {
            path: "about/",
            element: <AboutPage/>
        },
        {
            path: "contact/",
            element: <ContactPage/>
        },
        {
            path: "characters/",
            element: <CharactersPage/>
        },
        {
            path: 'favorites/',
            element: <FavoritesPage/>
        },
        {
            path: 'character/:id',
            element: <CharacterDetailsPage/>
        }
    ],
    errorElement: <NotFoundPage/>
    }
])

export default router;