const LocationInfo = ({ curretLocation }) => {
  return (
    <section className="bg-[url(/public/images/bg-header.png)]  text-center">
      <div className="flex justify-center h-[255px] px-3 pb-4">
        <img src="/images/portal.png" alt="portal image" />
        <img
          className="absolute w-[420px] px-4 top-[50px]"
          src="/images/logo.png"
          alt=""
        />
      </div>
      <section className=" flex justify-center px-4 text-green-500 mt-[100px] overflow-hidden">
        <article className="bg-green-300/20 text-left p-3 rounded-lg shadow-md mb-4 shadow-green-800/40">
          <h2>
            {" "}
            <span className="text-xl">Name:</span> {curretLocation?.name}{" "}
          </h2>
          <ul>
            <li className="text-[17px]">
              {" "}
              <span className="text-xl">Type:</span> {curretLocation?.type}{" "}
            </li>
            <li className="text-[17px]">
              <span className="text-xl">Dimension:</span>{" "}
              {curretLocation?.dimension}{" "}
            </li>
            <li className="text-[17px]">
              <span className="text-xl">Population:</span>{" "}
              {curretLocation?.residents.length}{" "}
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
};
export default LocationInfo;
