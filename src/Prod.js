import { useState, useEffect } from "react";

function Tables() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost/projet/Afficher.php")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Product Name: {user.productName}</p>
          <p>Price: {user.price}</p>
          <p>Product Image: {user.productImage}</p>
          <p>Category: {user.category}</p>
          <p>Page: {user.page}</p>
          <p>Description: {user.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Tables;