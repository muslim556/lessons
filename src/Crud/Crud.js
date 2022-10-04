import React, { useState } from "react";
import edit from "./pen 1.svg";
import trash from "./trash 1.svg";
import "./Crud.css";

export function Crud() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setUser({
      name: "",
      email: "",
      phone: "",
      id: "",
    });
    setModal(!modal);
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    id: "",
  });

  const inputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const [data, setData] = useState([]);

  function send() {
    if (user.id === "") {
      setData([...data, { ...user, id: new Date().getTime() }]);
      setUser({
        name: "",
        email: "",
        phone: "",
        id: "",
      });
    } else {
      setData((data) =>
        data.map((item) => (item.id === user.id ? user : item))
      );
      setUser({
        name: "",
        email: "",
        phone: "",
        id: "",
      });
    }
    openModal();
  }

  const deleteData = (i) => {
    setData((data) => data.filter((item, index) => index !== i));
  };

  const editData = (item) => {
    openModal();
    setUser({
      ...user,
      name: item.name,
      email: item.email,
      phone: item.phone,
      id: item.id,
    });
  };

  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="flex">
        <div>
          <input
            type="text"
            className="inputs"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search..."
          />
        </div>
        <div>
          <button
            onClick={openModal}
            className="btn add"
            style={{
              cursor: "pointer",
            }}
          >
            Add New Students
          </button>
        </div>
      </div>
      <hr />
      <table border="1" className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Activatsiya</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.filter((item) => item.name.toLowerCase().indexOf(search) !== -1)
            .length === 0 && search !== ""
            ? "Xato"
            : data.filter(
                (item) => item.name.toLowerCase().indexOf(search) !== -1
              ).length === 0 && search === ""
            ? data.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td className="crudDetil">
                    <button onClick={() => editData(item)}>
                      <img src={edit} alt="" />
                    </button>
                    <button onClick={() => deleteData(i)}>
                      <img src={trash} alt="" />
                    </button>
                  </td>
                </tr>
              ))
            : data
                .filter(
                  (item) => item.name.toLowerCase().indexOf(search) !== -1
                )
                .map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td className="crudDetil">
                      <button onClick={() => editData(item)}>
                        <img src={edit} alt="" />
                      </button>
                      <button onClick={() => deleteData(i)}>
                        <img src={trash} alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
        </tbody>
      </table>
      <div className={modal ? "modal activ" : "modal"}>
        <div className={modal ? "modal_body activ" : "modal_body"}>
          <h1 className="modal_name">
            {user.id === "" ? "Add Student" : "Edit Student"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="form"
          >
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              value={user.name}
              onChange={inputChange}
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              value={user.value}
              onChange={inputChange}
              placeholder="Email"
            />
            <label className="label">Phone</label>
            <input
              type="tel"
              className="input"
              name="phone"
              value={user.phone}
              onChange={inputChange}
              placeholder="Phone"
            />
            <button className="btn btnAdd">ADD</button>
          </form>
          <div className="close btn" onClick={openModal}>
            X
          </div>
        </div>
      </div>
    </div>
  );
}
