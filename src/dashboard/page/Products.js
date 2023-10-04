import React, { useState, useEffect } from "react";
import  axios  from "axios";
import Navbar from "./compo/Navbar";
import { Link } from "react-router-dom";
function Tables(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
}, []);

function getUsers() {
    axios.get('http://localhost/api/users/').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteUser = (id) => {
    axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
        console.log(response.data);
        getUsers();
    });
}
  return (
    <div className=" overflow-x-auto h-screen shadow-md bg-cover bg-center bg-no-repeat" >  
  <Navbar></Navbar>
      
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
              <td className="px-2 py-4"><img src={user.productImage} className="w-[70px]" alt="not images"/></td>
              <td className="px-2 py-4">
              <button onClick={() => deleteUser(user.id)} className="hover:bg-red-400 bg-red-600 text-black w-20 h-7 rounded-md">Delete</button>
              <Link to={`user/${user.id}/edit`} className="hover:bg-blue-400 p-[5px] px-6 bg-blue-600 ml-2 text-black w-20 h-7 rounded-md" style={{marginRight: "10px"}}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
</div>
    </div>
  );
}

export default Tables;
