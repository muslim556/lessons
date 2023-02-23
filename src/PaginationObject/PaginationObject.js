import React, { useState, useEffect, useMemo } from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export function PaginationObject() {
  const data = [
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
    {
      name: "name",
      price: 120,
    },
  ];
  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);
  const [postsPerPage] = useState(12);
  const navigate = useNavigate();
  const numberOfPages = [];

  // Get current posts
  const indexOfLastPost = currentButton * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentButton(pageNumber);
  };

  //paginate numbers
  const maxPageNumber = Math.ceil(data.length / postsPerPage);
  for (let i = 1; i <= maxPageNumber; i++) {
    numberOfPages.push(i);
  }

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentButton > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setCurrentButton(currentButton);
    setArrOfCurrButtons(tempNumberOfPages);
  }, [arrOfCurrButtons, currentButton, numberOfPages]); // eslint-disable-line

  let left = currentButton - 1;
  let right = currentButton + 1;

  const paginationRange = useMemo(() => {
    // Our implementation logic will go here
  }, []);
  return paginationRange;

  // return (
  //   <div id="ShowProduct">
  //     <div className="container">
  //       {currentPosts.map((item, i) => {
  //         // const price = item.price.toString().split("").slice(0, 3).join("");
  //         // const img = JSON.parse(item.images || [])[0];
  //         return (
  //           <div
  //             key={i}
  //             onClick={() => {
  //               navigate(`/view/product/${item.id}`);
  //               window.scroll({
  //                 top: 0,
  //                 left: 0,
  //                 behavior: "smooth",
  //               });
  //             }}
  //           >
  //             <h2>{item.name}</h2>
  //             <p>{item.price} sum</p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //     {maxPageNumber > 1 ? (
  //         <IconButton
  //           onClick={() =>
  //             setCurrentButton(currentButton !== 1 ? left : currentButton)
  //           }
  //         >
  //           <ChevronLeftIcon />
  //         </IconButton>
  //         {arrOfCurrButtons.map((number) => (
  //           <IconButton
  //             key={number}
  //             onClick={() => paginate(number)}
  //             className={
  //               currentButton === number ? "pageLink activeLink" : "pageLink"
  //             }
  //           >
  //             {number}
  //           </IconButton>
  //         ))}
  //         <IconButton
  //           onClick={() =>
  //             setCurrentButton(currentButton !== maxPageNumber ? right : 1)
  //           }
  //         >
  //           <ChevronRightIcon />
  //         </IconButton>
  //       </div>
  //     ) : (
  //       ""
  //     )}
  //   </div>
  // );
}
