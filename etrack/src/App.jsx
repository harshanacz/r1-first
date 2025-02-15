import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm"
import { useState } from "react";

function App() {
  const [isFormAvailable, setisFormAvailable] = useState(false);

  return (
    <div>
      <Header isFormAvailable={isFormAvailable}
        setisFormAvailable={setisFormAvailable} />
      {isFormAvailable && <ExpenseForm />}
    </div>
  );
}

export default App;