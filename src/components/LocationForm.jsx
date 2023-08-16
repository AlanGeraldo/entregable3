const LocationForm = ({ handleSubmit }) => {
  return (
    <section className="flex justify-center relative">
      <form
        className="flex absolute border-2 border-green-600 top-[300px] z-1 overflow-hidden"
        onSubmit={handleSubmit}
      >
        <input
          className="border-1 outline-none text-xs  border-green-600 bg-black/80 text-white text-center w-[170px]  sm:w-[280px]"
          id="newLocation"
          placeholder="Type a location Id..."
          min={1}
          max={126}
          type="number"
        />
        <button
          className={`bg-green-800 border-l-2 flex items-center cursor-pointer gap-2 hover:bg-green-400 text-[15px] hover:text-black border-green-600  px-4 py-1`}
        >
          {" "}
          Search <i className="bx bx-search"></i>{" "}
        </button>
      </form>
    </section>
  );
};
export default LocationForm;
