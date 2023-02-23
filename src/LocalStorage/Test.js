// const dataYukla = () => {
//   if (localStorage.getItem("address")) {
//     setData(JSON.parse(localStorage.getItem("address")));
//   } else {
//     localStorage.setItem("address", JSON.stringify(data));
//   }
// };

// const inputChange = (e) => {
//   setUser({
//     ...user,
//     [e.target.name]: e.target.value,
//   });
// };

// const send = (e) => {
//   e.preventDefault();
//   if (
//     user.id === "" &&
//     user.name !== "" &&
//     user.surname !== "" &&
//     user.address !== "" &&
//     user.email !== "" &&
//     user.state !== "" &&
//     user.city !== "" &&
//     user.phone !== ""
//   ) {
//     localStorage.setItem(
//       "address",
//       JSON.stringify([...data, { ...user, id: new Date().getTime() }])
//     );
//     setUser({
//       id: "",
//       name: "",
//       surname: "",
//       email: "",
//       address: "",
//       state: "",
//       city: "",
//       phone: "",
//     });
//     dataYukla();
//   } else {
//     let edit = [...data.map((item) => (item.id === user.id ? user : item))];
//     localStorage.setItem("address", JSON.stringify(edit));
//     setUser({
//       id: "",
//       name: "",
//       surname: "",
//       email: "",
//       address: "",
//       state: "",
//       city: "",
//       phone: "",
//     });
//     dataYukla();
//   }
//   openModal();
