import React from "react";
import Katalog from "./Katalog";
import GrIcon from "./GrIcon";
import SearchInput from "./SearchInput";

export default function SerachHeader() {
  return (
    <div className="SerachHeader flex  items-center gap-8 w-full">
      <div className="flex justify-start items-center gap-5 w-full">
        <Katalog />
        <GrIcon />
        <SearchInput />
      </div>
      <div className="flex justify-center items-center gap-5 cursor-pointer">
        <div className="flex gap-3 text-[#EC1026]">
          <p className="text-3xl border-b-2 border-[#EC1026]">new</p>
          <span className="text-xl">243</span>
        </div>
        <div className="flex gap-3 text-[#00B6BA] cursor-pointer">
          <p className="text-3xl border-b-2 border-[#00B6BA]">hits</p>
          <span className="text-xl">237</span>
        </div>
      </div>
    </div>
  );
}
