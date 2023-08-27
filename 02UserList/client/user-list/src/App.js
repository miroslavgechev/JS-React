import { useEffect, useState } from 'react';

import { getAllUsers, createUser, deleteUser, updateUser } from './services/userService';

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

    async function onUserCreateSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const createdUser = await createUser(data);

        setUsers(prevState => [...prevState, createdUser]);

    }

    async function onUserUpdateSubmit(e, userId) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const updatedUser = await updateUser(userId, data);

        setUsers(state => state.map(u => u._id === userId ? updatedUser : u));
    }

    async function onUserDelete(userId) {
        await deleteUser(userId)

        setUsers(state => state.filter(u => u._id !== userId))
    }

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} onUserCreateSubmit={onUserCreateSubmit} onUserDelete={onUserDelete} onUserUpdateSubmit={onUserUpdateSubmit} />

                </section>

                {/* Add other components here */}

            </main>

            <Footer />
        </>
    );
}

export default App;