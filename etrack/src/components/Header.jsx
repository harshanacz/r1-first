
import { IoAddCircleSharp } from "react-icons/io5";


const Header = ({isFormAvailable, setisFormAvailable}) => {

  const handleClick = ()=>{
    setisFormAvailable(true);
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
          <IoAddCircleSharp />
        </button>
      </div>

      
    </div>
  );
};

export default Header;
