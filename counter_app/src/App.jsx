import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0);

  const addCount =()=> {
      setCount(count+1);
  }

  const removeCountby5 =() =>{
    setCount(count-5);
  }


  return (
   <div style={styles.main}>
      <h1 style={styles.title}>Counter App</h1>
      <p>Current count: {count}</p>
      <button style={styles.button} onClick={
        addCount
      }>Add One</button>
      <button style={styles.button} onClick={
        removeCountby5
      }>-5</button>
   </div>
  )
}

const styles = {
  main: {
    textAlign: 'center',
    width: '100%'
  },
  title: {
    fontSize: '40px',
    textAlign: 'center',
    marginTop: '20px'

  },
  button : {
    margin:'20px'
  }
}

export default App
