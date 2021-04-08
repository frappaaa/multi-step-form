const Navigation = (props) => {
  return (
    <div className="mt-10 flex flex-wrap justify-around">
      {
        <button
          onClick={props.prev}
          className="py-2 px-4 bg-blue-300 rounded-md"
        >
          Precedente
        </button>
      }
      {
        <button
          onClick={props.next}
          className="py-2 px-4 bg-blue-300 rounded-md"
        >
          Successivo
        </button>
      }
    </div>
  );
};

export default Navigation;
