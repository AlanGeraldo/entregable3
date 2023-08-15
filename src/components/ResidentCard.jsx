import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  });

  return (
    <article className="grid justify-center place-items-center mt-4 ">
      <section className="w-[100%] max-w-[1350px] leading-normal ">
        <div className="h-[240px] overflow-hidden block border-2 border-green-600">
          <img
            className="h-full  w-full block object-cover"
            src={residentInfo?.image}
            alt=""
          />
        </div>
        <section className="relative">
          <div className="flex items-center bg-black/70 pr-4 pl-4 border-2 border-green-500 text-center gap-2 p-1 absolute top-[-70px] right-[60px]">
            <div
              className={`h-[13px] aspect-square rounded-full ${
                residentStatus[residentInfo?.status]
              }`}
            ></div>
            {residentInfo?.status}
          </div>
        </section>

        <section className=" p-2 bg-black/40 border-2 text-center border-green-600">
          <h3 className=" mb-2 px-2 text-lg text-left  font-bold line-clamp-1">
            {" "}
            {residentInfo?.name}{" "}
          </h3>
          <hr />
          <ul className="text-left text-[12px] p-2 grid gap-1 ">
            <li className="line-clamp-1">
              {" "}
              <span className="text-white/50">Species</span>{" "}
              <span className="ml-10">{residentInfo?.species}</span>{" "}
            </li>
            <li className="line-clamp-1">
              {" "}
              <span className="text-white/50">Origin</span>{" "}
              <span className="ml-12 text-center">
                {residentInfo?.origin.name}{" "}
              </span>
            </li>
            <li>
              {" "}
              <span className="text-white/50">Times appear</span>{" "}
              <span className="ml-[5px]">{residentInfo?.episode.length} </span>{" "}
              Time
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
};
export default ResidentCard;
