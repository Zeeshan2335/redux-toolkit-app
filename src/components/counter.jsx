
import { useDispatch, useSelector } from "react-redux";
import {
  handleDecreament,
  handleIncreament,
} from "../features/counter/counterSlice";

const Counter = () => {
  
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.counter?.counter);

  function incrementHandler() {
    dispatch(handleIncreament(count));
  }
  function decrementHandler() {
    dispatch(handleDecreament(count));
  }

  return (
    <div className="flex justify-center">
      <div className="bg-purple-950 w-1/4 rounded-md p-4">
        <h1 className="py-2 px-4 text-white">{count} </h1>
        <button
          onClick={incrementHandler}
          className="bg-yellow-400 py-2 px-4 rounded-md mx-1 w-1/3"
        >
          +
        </button>
        <button
          onClick={decrementHandler}
          className="bg-yellow-400 py-2 px-4 rounded-md mx-1 w-1/3"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
