import { userAuthenticated } from "@/helpers/session";
import { signOut } from "@/lib/auth/auth";
import React from "react";

const Home = async () => {
  await userAuthenticated();

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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam
          ea voluptatem mollitia alias eos ipsa praesentium quos quaerat magni,
          illo consequatur laborum natus. Dolorum et consequuntur impedit totam
          doloribus?
        </p>
      </form>
    </div>
  );
};

export default Home;
