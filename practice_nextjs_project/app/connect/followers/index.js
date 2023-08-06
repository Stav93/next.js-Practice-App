"use client";
import { useState, useEffect } from "react";
import getFollowers from "./get-followers";

export default function Followers() {
  const [goalString, setGoalString] = useState("?/?");
  getFollowers().then(followers =>setGoalString(`${followers}/?`))

  return (
    <div className="ml-[15px] lg:ml-[20px] mt-[5px]">
      Follower Progress: {goalString}
    </div>
  );
}
