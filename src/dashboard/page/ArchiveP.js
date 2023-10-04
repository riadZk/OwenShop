import React, { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "./compo/Navbar"
function ArchiveP(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost/ecommerce/AfficherArchive.php")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    axios
      .get(`http://localhost/ecommerce/Rsestore.php?id=${id}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" overflow-x-auto h-screen shadow-md bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div class="relative overflow-x-auto w-2/3 ml-96 mt-5">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className=" py-3">
                Product name
              </th>
              <th scope="col" className=" py-3">
                Price
              </th>
              <th scope="col" className=" py-3">
                Category
              </th>
              <th scope="col" className=" py-3">
                Description
              </th>
              <th scope="col" className=" py-3">
                Images
              </th>
              <th scope="col" className=" py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr className="bg-white dark:bg-gray-800" key={user.id}>
                <td className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.productName}</td>
                <td className="px-2 py-4">{user.price}</td>
                <td className="px-2 py-4">{user.category}</td>
                <td className="px-2 py-4">{user.description}</td>
                <td className="px-2 py-4"><img src={user.productImage} className="w-[70px]" alt="not images" /></td>
                <td className="px-2 py-4">
                  <button onClick={() => handleDelete(user.id)} className="hover:bg-slate-400 bg-slate-300 text-black w-24 h-7 rounded-md">Rsestore
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArchiveP;
