
import React, { useState } from 'react'

const ExpenseForm = () => {
    const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = ()=>{

  }


  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md my-4">
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 mb-2 border rounded">
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Expense</button>
    </form>
  );
}

export default ExpenseForm

// {
//     id: "1",
//     title: "Groceries",
//     amount: 2500,
//     category: "Food",
//     date: "2025-02-12"
//   }
  