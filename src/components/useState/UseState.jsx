import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const UseState = () => {
  console.log(useState());
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const [name,setName] =useState('')
  console.log(name)
  const stock = 10;
  
const p ="Phone"
  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast("product quantity cant be in -");
    }
  };
  const handleIncrementClick = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      toast(`maximum quantity reached of ${p}!!!!!!!`, {
        position: "top-center",
        autoClose: 5000,
       
        
      });
    }
  };
  const handleChange = (e)=>{
    setName(e.target.value)
    console.log(e)
  }

  return (
    <>
      <ToastContainer />
      {/* <div className="flex items-center justify-center flex-col">
        <h1 className="border border-amber-300 text-5xl mt-50 px-6 py-2">
          {count}
        </h1>
        <div
          onClick={handleIncrementClick}
          className="text-4xl border border-amber-600 mt-20 px-4 cursor-pointer"
        >
          +
        </div>
        <div
          onClick={handleClick}
          className="text-4xl border border-amber-600 mt-20 px-4 cursor-pointer"
        >
          -
        </div>
      </div> */}
      <form action="">

        <input className="border border-amber-100" onChange={handleChange} type="name" value={name} name="" id="" />
      </form>
    </>
  );
};

export default UseState;
