import React from "react";
import { Stack } from "@mui/material";
// You can hover, and go to their demo page to see what they do
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
// if have trouble with the mui icons, do this command "npm install @mui/icons-material"
import SearchBar from "./SearchBar";
// shortcut for react code - rafce (give you the base code)

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
