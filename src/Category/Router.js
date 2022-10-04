import React from "react";
import { Route, Routes } from "react-router-dom";
import { Category } from "./Category";
import { All } from "./Pages/All";
import { Dresses } from "./Pages/Dresses";
import { Denim } from "./Pages/Denim";
import { Jeans } from "./Pages/Jeans";
import { Jumpsuits } from "./Pages/Jumpsuits";
import { Tops } from "./Pages/Tops";
import { Jacketsandcoats } from "./Pages/Jacketsandcoats";
import { Pants } from "./Pages/Pants";
import { Shorts } from "./Pages/Shorts";
import { Skirts } from "./Pages/Skirts";
import { Loungerieunderwear } from "./Pages/Loungerieunderwear";
import { Leather } from "./Pages/Leather";
import { Sweatersknits } from "./Pages/Sweatersknits";
export function Router() {
  return (
    <>
      <Category />
      <Routes>
        <Route path="/clothes/all" element={<All />} />
        <Route path="/clothes/dresses" element={<Dresses />} />
        <Route path="/clothes/denim" element={<Denim />} />
        <Route path="/clothes/jeans" element={<Jeans />} />
        <Route path="/clothes/jumpsuits" element={<Jumpsuits />} />
        <Route path="/clothes/tops" element={<Tops />} />
        <Route path="/clothes/jacketsandcoats" element={<Jacketsandcoats />} />
        <Route path="/clothes/pants" element={<Pants />} />
        <Route path="/clothes/shorts" element={<Shorts />} />
        <Route path="/clothes/skirts" element={<Skirts />} />
        <Route
          path="/clothes/loungerieandunderwear"
          element={<Loungerieunderwear />}
        />
        <Route path="/clothes/leather" element={<Leather />} />
        <Route path="/clothes/sweatersandknits" element={<Sweatersknits />} />
      </Routes>
    </>
  );
}
