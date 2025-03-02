import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const saveCountLocally=( value)=>{
    localStorage.setItem("count",value );
  }

  const viewLocalCount=()=>{
    const intVal = typeof window !== 'undefined' ? localStorage.getItem('count') : null
    
    toast(intVal);
  }

  // const addCount = () => {
  //   setCount(count + 1);
  // };

  // const removeCountby5 = () => {
  //   setCount(count - 5);
  // };

  const removeCountFromLocalStorage = () => {
    localStorage.removeItem("count"); 
    setCount(0); 
    toast("Count removed from localStorage.");
  };

  const handleInput = () => {
    if (inputValue !== "") {
      const integerResult = Number(inputValue);
      if (isNaN(integerResult) || !Number.isInteger(integerResult)) {
        toast("Please enter a valid integer.");
      } else {
        const newCount = count + integerResult;

        setCount(newCount);
        saveCountLocally(newCount);
        setInputValue("");
      }
    } else {
      toast("Enter Value.");
    }
  };

  useEffect(()=>{
    const savedCount = localStorage.getItem('count');

    if (savedCount !== null) {
      setCount(Number(savedCount));  
    }
  }, [])

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Counter App</h1>
      <p>Current count: {count}</p>
      {/* <button style={styles.button} onClick={
        addCount
      }>Add One</button>
      <button style={styles.button} onClick={
        removeCountby5
      }>-5</button> */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Input number"
      />

      <button
        style={styles.button}
        onClick={handleInput}
        aria-label="Submit Input"
      >
        Submit Input
      </button>

      <br/><button
        style={styles.button}
        onClick={viewLocalCount}
        aria-label="view"
      >
        View Count value
      </button>
      <br/><button
        style={styles.button}
        onClick={removeCountFromLocalStorage}
        aria-label="view"
      >
        Reset
      </button>
      <ToastContainer />
    </div>
  );
}

const styles = {
  main: {
    textAlign: "center",
    width: "100%",
  },
  title: {
    fontSize: "40px",
    textAlign: "center",
    marginTop: "20px",
  },
  button: {
    margin: "20px",
  },
};

export default App;
