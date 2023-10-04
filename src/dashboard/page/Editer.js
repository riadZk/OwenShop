import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/api/user/${id}`).then(function(response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function(response) {
      console.log(response.data);
      navigate('/productsA');
    });
  };

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        <h1>Edit user</h1>
        <form onSubmit={handleSubmit} className=" text-black">
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              value={inputs.productName || ""}
              className="form-control"
              name="productName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>price</label>
            <input
              type="number"
              value={inputs.price || ""}
              className="form-control"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>productImage</label>
            <input
              type="text"
              value={inputs.productImage || ""}
              className="form-control"
              name="productImage"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>category</label>
            <input
              type="text"
              value={inputs.category || ""}
              className="form-control"
              name="category"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>page</label>
            <input
              type="number"
              value={inputs.page || ""}
              className="form-control"
              name="page"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>description</label>
            <input
              type="description"
              value={inputs.description || ""}
              className="form-control"
              name="description"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
      <div className="col-2"></div>
    </div>
  );
}
