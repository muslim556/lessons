// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Pagination.css";

// export function Pagination() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div id="container">
//       <nav>
//         <ul className="pagination">
//           {pageNumbers.map((number) => (
//             <li key={number} className="page-item">
//               <a
//                 onClick={() => paginate(number)}
//                 href="!#"
//                 className="page-link"
//               >
//                 {number}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <p id="pagination">Pagination</p>
//       <ul className="list-group mb-4">
//         {currentPosts.map((post) => (
//           <li key={post.id} className="list-group-item">
//             {post.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
