import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const INITIAL_PAGE = 1

export const ResidentList = ({ residents, curretLocation }) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const RESIDENTS_PER_PAGE = 6;

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentInPage = residents.slice(sliceStart, sliceEnd);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE)
  }, [curretLocation])

  return (
    <section className="bg-[url(/public/images/bg-image.png)] bg-cover min-h-screen">
      <section className="grid justify-center  gap-4 grid-cols-[repeat(1,_250px)] max-w-[1200px] sm:grid-cols-[repeat(2,_250px)]">
        {residentInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <Pagination
        setCurrentPage={setCurrentPage}
        pages={pages}
        currentPage={currentPage}
        />

    </section>
  );
};
