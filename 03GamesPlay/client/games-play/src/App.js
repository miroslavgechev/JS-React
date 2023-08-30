import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAll, create } from './services/gameService';
import { AuthContext } from './contexts/authContext';
import * as authService from './services/authService';

import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from "./components/GameDetails/GameDetails";

function App() {

    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        getAll().then(result => {
            setGames(result);
        })
    }, [])

    async function onCreateGameSubmit(data) {
        const newGame = await create(data);

        setGames(state => [...state, newGame])

        navigate('/catalog');
    }

    async function onLoginSubmit(data) {
        try {
            const result = await authService.login(data);
            setAuth(result);
        } catch (err) {
            console.log(err.message);
        }

    }

    return (
        <AuthContext.Provider value={{ onLoginSubmit }}>
            <div className="App">
                <div id="box">
                    <Header />

                    <main id="main-content">

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/create-game" element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
                            <Route path="/catalog" element={<Catalog games={games} />} />
                            <Route path="catalog/:gameId" element={<GameDetails />} />
                        </Routes>

                    </main>

                </div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
