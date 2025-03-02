
import React, { useState } from 'react'
import { categories } from './../data/data.js'; 
import Select from 'react-select';

const ExpenseForm = () => {
    const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = ()=>{

  }



  const categoryOptions = categories.map((cat) => ({
    value: cat.title, 
    label: ( 
      <div className="flex items-center">
        <img src={cat.icon} alt={cat.title} className="w-4 h-4 mr-2" />
        {cat.title}
      </div>
    ),
  }));


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
      <Select
        options={categoryOptions} 
        value={category}
        onChange={(selected) => setCategory(selected)}
        placeholder="Select Category"
        className="mb-2"
        formatOptionLabel={(option) => option.label} 
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Expense</button>
    </form>
  );
}

export default ExpenseForm

