import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default function App() {
  const usersCollectionRef = collection(db, "crud");

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // Create User
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: name, age: age });
  };
  // Update Age
  const updateAge = async (id, age) => {
    const userDoc = doc(db, "crud", id);
    const newAge = { age: age + 1 };
    await updateDoc(userDoc, newAge);
    //console.log(id, age);
  };
  // Delete User
  const deleteUser = async (id) => {
    const userDoc = doc(db, "crud", id);
    await deleteDoc(userDoc);
  };
  // Get Users
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);

      const docsRef = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        id: doc.id,
      }));
      //console.log(docsRef);

      setUsers(docsRef);
    };

    getUsers();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <button onClick={() => updateAge(user.id, user.age)}>
              {" "}
              Update Age
            </button>
            <button onClick={() => deleteUser(user.id)}> delete User</button>
          </div>
        );
      })}
    </div>
  );
}
