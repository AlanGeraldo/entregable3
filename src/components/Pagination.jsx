

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
 
  return (
    <footer className=" p-4 gap-4 text-center grid justify-center grid-cols-1">
    <ul className="flex justify-center flex-wrap gap-2 mt-3 p-2">
      {pages.map((page) => (
        <li
          className={`h-12 w-12 border-[1px] border-lime-400 grid items-center justify-center rounded-md hover:bg-green-300 hover:text-black hover:border hover:border-green-500 cursor-pointer ${currentPage === page && "bg-green-300/50"}`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
    </footer>
  );
};
export default Pagination;
