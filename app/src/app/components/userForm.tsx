'use client';

import { useState } from 'react';

interface User {
  id: number;
  name: string;
}

export default function UserForm() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Amy'},
    { id: 2, name: 'Bravo'},
    { id: 3, name: 'Charlie'}
  ]);

  const [newUser, setNewUser] = useState({
    name: '',
  });

  const updateUser = (id: number, field: string, value: string) => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  const addUser = () => {
    if (newUser.name.trim()) {
      setUsers(users => [
        ...users,
        { id: users.length + 1, name: newUser.name }
      ]);
      setNewUser({ name: '' });
    }
  }

  const deleteUser = (id: number) => {
    setUsers(users =>
      users.filter(user =>
        user.id !== id
      )
    )
  };

  return (
    <div className="p-15 font-sans text-sm font-normal">
      <div>
        <h3 className="mb-10 text-black">Name</h3>
        <div className="mb-20">
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="New user name"
            className="p-5 bg-white rounded border border-black mr-10 text-black"
          />
          <button
            onClick={addUser}
            className="p-5 bg-[#7CB9E8] rounded text-white w-50"
          >
            Add
          </button>
        </div>
        <h3 className="mb-10 text-black">List of users</h3>
        {users.map(user => (
          <div key={user.id} className="mb-10 flex items-center text-black">
            <input
              type="text"
              value={user.name}
              onChange={(e) => updateUser(user.id, 'name', e.target.value)}
              className="p-5 bg-white rounded border border-black mr-10 text-black"
            />
            <button
              onClick={() => deleteUser(user.id)}
              className="p-5 bg-red-400 rounded text-white w-50"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}