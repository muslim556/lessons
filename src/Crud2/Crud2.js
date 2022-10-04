import React, { useState } from "react";
import "./Crud2.css";
import edit from "./pen 1.svg";
import trash from "./trash 1.svg";

export function Crud2() {
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
  const send = (e) => {
    e.preventDefault();
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
  };

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
    <div id="worker">
      <div id="header">
        <div id="header-nav">
          <div id="h-n-texts">
            <p id="h-n-t-1">Weekly sumup</p>
            <p id="h-n-t-2">
              Get summary of your weekly online transactions here.
            </p>
          </div>

          <div>
            <input
              type="text"
              id="inputs"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder="search"
            />
          </div>

          <div id="profile">
            <button onClick={openModal}>Add New Student</button>
          </div>
        </div>
      </div>
      <hr />
      <table border="1" id="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Activatsiya</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {data.filter((item) => item.name.toLowerCase().indexOf(search) !== -1)
            .length === 0 && search !== ""
            ? "Topilmadi"
            : data.filter(
                (item) => item.name.toLowerCase().indexOf(search) !== -1
              ).length === 0 && search === ""
            ? data.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td id="credDetil">
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
                    <td id="credDetil">
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
      <div className={modal ? "modal activ " : "modal"}>
        <div className={modal ? "modal_body activ" : "modal_body"}>
          <h1 className="modal_name">
            {user.id === "" ? "ADD  STUDENT" : "EDIT STUDENT"}
          </h1>

          <form onSubmit={send} id="w-form">
            <label id="label">Name</label>
            <input
              type="text"
              id="w-inp"
              name="name"
              value={user.name}
              onChange={inputChange}
              placeholder="name"
            />

            <label id="label">Email</label>
            <input
              type="text"
              id="w-inp"
              name="email"
              value={user.email}
              onChange={inputChange}
              placeholder="email"
            />

            <label id="label">Phone</label>
            <input
              type="text"
              id="w-inp"
              name="phone"
              value={user.phone}
              onChange={inputChange}
              placeholder="phone"
            />

            <button className="btn btnAdd">ADD</button>
          </form>

          <button id="close" onClick={openModal}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}
