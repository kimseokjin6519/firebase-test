import React, { useEffect, useState } from "react";
import './App.css'
import { db, collection, getDocs } from './firebase.js'

function App() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      async function fetchUsers() {
         try {
            const querySnapshot = await getDocs(collection(db, "users"));
            const usersData = querySnapshot.docs.map(doc => ({
               id: doc.id,
               ...doc.data()
            }));     
            setUsers(usersData);
         } catch (error) {console.error("Error fetching users: ", error);}
      }
      fetchUsers();
   }, []);

   return (
      <div className="flex flex-col min-w-screen min-h-screen bg-white">
         <div>
            <div className="flex my-4 mx-4 text-2xl text-gray-800">Firestore Users Collection</div>
            {users.map(user => (
               <div key={user.id} className="mx-4 my-4 py-2 border border-gray-400 rounded-xl">
                  <pre className="text-sm text-gray-800">
                     {JSON.stringify(user, null, 2)}
                  </pre>
               </div>
            ))}
         </div>      
      </div>
   )
}

export default App
