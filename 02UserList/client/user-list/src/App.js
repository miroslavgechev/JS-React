import { useEffect, useState } from 'react';

import { getAllUsers } from './services/userService';

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then(setUsers)
            .catch(
                error => console.log(error)
            )
    }, [])


    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} />

                    <button className="btn-add btn">Add new user</button>
                </section>

                {/* Add other components here */}

            </main>

            <Footer />
        </>
    );
}

export default App;
