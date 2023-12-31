import React, { useState } from 'react';
import { useAuth } from "../Auth/AuthContext";
// import {supabase} from './lib/SupabasseClient'


const UserProfile = () => {
  const { state } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: state.user.name,
    username: state.user.username,
    email: state.user.email,
    profileImage: state.user.avatar,
  });
  const [followers] = useState(['Seguidor1', 'Seguidor2', 'Seguidor3']);
  const [following] = useState(['Siguiendo1', 'Siguiendo2', 'Siguiendo3']);
 
 const handleEditClick = () => {
    setIsEditing(!isEditing);
    // supabase
    // .update({
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="absolute inset-y-0 right-0 w-4/5  bg-gray-100 min-h-screen p-2">
      <div className="bg-white rounded shadow-lg p-4">
        <div className="text-center">
          <img
            src={userData.profileImage}
            alt="Foto de perfil"
            className="rounded-full mx-auto h-20 w-20"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              name="profileImage"
              onChange={handleInputChange}
              className="mt-2"
            />
          )}
        </div>
        <div className="mt-4">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="border rounded w-full p-2"
            />
          ) : (
            <h2 className="text-xl font-bold">{userData.name}</h2>
          )}
          <p className="text-gray-600">{userData.email}</p>
          <p className="text-gray-600">{userData.username}</p>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white p-2 rounded hover-bg-blue-600"
          >
            {isEditing ? 'Guardar' : 'Editar Perfil'}
          </button>
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <h3 className="text-lg font-semibold">Seguidores: {followers.length}</h3>
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-2">Ver todos</button>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Siguiendo: {following.length}</h3>
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-2">Ver todos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;