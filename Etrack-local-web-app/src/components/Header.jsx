
import { IoAddCircleSharp  } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";


const Header = ({isFormAvailable, setisFormAvailable}) => {

  const handleClick = ()=>{
    setisFormAvailable(!isFormAvailable);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-4 text-2xl">
        <h1>Expense Track</h1>

        <button
        className={`mt-2 text-4xl ${
            isFormAvailable ? "text-grey" : "text-blue-500" 
          
        }`
        
    }
    onClick={handleClick}
      >
       {isFormAvailable ? <AiOutlineClose /> : <IoAddCircleSharp />}
        </button>
      </div>

      
    </div>
  );
};

export default Header;
