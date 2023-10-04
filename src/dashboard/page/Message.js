import React,{useState,useEffect} from 'react'
import Navbar from './compo/Navbar';

const Message = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("http://localhost/ecommerce/AfficherMessage.php")
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
    
  return (
    <div className=''>
        <Navbar />
      <div class="relative ml-[280px] overflow-x-auto w-2/3  mt-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className=" py-3">
                User Name
                </th>
                <th scope="col" className=" py-3">
                User Email
                </th>
                <th scope="col" className=" py-3">
                Message
                </th>
            </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr className="bg-white dark:bg-gray-800" key={user.id}>
            <td className="px-2 py-4">{user.user}</td>
              <td className="px-2 py-4">{user.email}</td>
              <td className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.message}</td>

            </tr>
          ))}
        </tbody>
    </table>
</div>
		</div>
  )
}

export default Message
