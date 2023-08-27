import Overlap from "./Overlap";
import Pagination from "./Pagination";
import UserDetails from "./UserDetails";
import UserListLine from "./UserListLine"
import UserDelete from "./UserDelete";
import { useState } from "react";

import { getOneUser } from '../services/userService';
import UserCreate from "./UserCreate";

export default function UserList({ users, onUserCreateSubmit, onUserDelete, onUserUpdateSubmit }) {

    const [selectedUser, setSelectedUser] = useState(null);
    const [showDeleteUser, setShowDeleteUser] = useState(null);
    const [showEditUser, setShowEditUser] = useState(null);
    const [showAddUser, setShowAddUser] = useState(false);

    async function onInfoClick(userId) {
        const user = await getOneUser(userId);
        setSelectedUser(user);
    }

    function onClose() {
        setSelectedUser(null);
        setShowAddUser(false);
        setShowDeleteUser(null);
        setShowEditUser(null);
    }

    function onUserAddClick() {
        setShowAddUser(true);
    }

    function onUserCreateSubmitHandler(e) {
        onUserCreateSubmit(e);
        setShowAddUser(false);
    }

    function onDeleteClickHandler(userId) {
        setShowDeleteUser(userId);
    }

    function onDeleteHandler() {
        onUserDelete(showDeleteUser);
        onClose();
    }

    async function onEditClick(userId) {
        const user = await getOneUser(userId);
        setShowEditUser(user);
    }

    function onUserUpdateSubmitHandler(data, userId) {
        onUserUpdateSubmit(data, userId);
        onClose();
    }

    return (
        <>
            {selectedUser && <UserDetails {...selectedUser} onClose={onClose} />}
            {showAddUser && <UserCreate onClose={onClose} onUserCreateSubmit={onUserCreateSubmitHandler} />}
            {showDeleteUser && <UserDelete onClose={onClose} onDelete={onDeleteHandler} />}
            {showEditUser && <UserCreate user = {showEditUser} onClose={onClose} onUserCreateSubmit={onUserUpdateSubmitHandler}/>}

            <div className="table-wrapper">

                {/* <Overlap />         */}

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => <UserListLine key={user._id} {...user} onInfoClick={onInfoClick} onDeleteClickHandler={onDeleteClickHandler} onEditClick={onEditClick}/>)}

                    </tbody>
                </table>

                {/* <Pagination /> */}

            </div>

            <button className="btn-add btn" onClick={onUserAddClick} >Add new user</button>

        </>
    )

}