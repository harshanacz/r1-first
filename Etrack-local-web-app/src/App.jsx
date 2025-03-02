import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm"
import { useState } from "react";
import ExpenseTile from "./components/ExpenseTile";

function App() {
  const [isFormAvailable, setisFormAvailable] = useState(false);

  return (
    <div className="lg:mx-20 mx-5">
      <Header isFormAvailable={isFormAvailable}
        setisFormAvailable={setisFormAvailable} />
      {isFormAvailable && <ExpenseForm />}

      <ExpenseTile/>
    </div>
  );
}

export default App;