import { userAuthenticated } from "@/helpers/session";
import { signOut } from "@/lib/auth/auth";
import React from "react";

const Home = () => {
  userAuthenticated();

  return (
    <div>
      Home
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default Home;
