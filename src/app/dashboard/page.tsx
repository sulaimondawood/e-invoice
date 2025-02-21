import { userAuthenticated } from "@/helpers/session";
import React from "react";

const Home = () => {
  userAuthenticated();

  return <div>Home</div>;
};

export default Home;
