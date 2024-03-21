import search from "../../assets/icons/search.svg";

export default function SearchInput() {
  return (
    <div className="SearchInput w-full flex justify-between items-center ">
      <div className="flex justify-start items-center gap-1 border-4 border-main rounded-xl p-2 w-full">
        <span>Поиск </span>
        <input type="text" placeholder="(Например: термокружка)" className="w-full outline-none" />
      </div>
      <img src={search} alt="" className="bg-main border-2  border-main rounded-r-xl px-10 py-3 rounded-l-nonerounded-l-none -ml-1 " />
    </div>
  );
}
