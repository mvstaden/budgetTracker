import { useState } from "react";

const fakeExpenses = [
  {
    id: crypto.randomUUID(),
    amount: 400,
    category: "Fuel",
    date: "2026-01-02",
  },
  {
    id: crypto.randomUUID(),
    amount: 300,
    category: "Food",
    date: "2026-01-03",
  },
  {
    id: crypto.randomUUID(),
    amount: 200,
    category: "Restaurants",
    date: "2026-01-04",
  },
];

const AddTransaction = () => {
  const [expense, setExpense] = useState(fakeExpenses);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    const amountConverted = Number(amount);

    if (!amountConverted || !category || !date) {
      alert("Please enter all fields");
    }

    const newExpense = {
      id: crypto.randomUUID(),
      amount: amountConverted,
      category,
      date,
    };

    setExpense([...expense, newExpense]);

    setAmount("");
    setCategory("groceries");
    setDate("");
  };
  return (
    <div className="min-h-screen bg-sky-950 flex items-center justify-center">
      <div className="container bg-sky-500 w-4xl p-6 rounded-2xl shadow-md">
        {/* Header   */}
        <div className="bg-amber-200 py-3 text-center">
          <h1 className="text-3xl">Budget Tracker</h1>
          <p>Tracking daily budgets made easy</p>
        </div>

        {/* Expense inputs */}
        <div className="bg-green-300">
          <form onSubmit={handleExpenseSubmit} className="py-3">
            <div className="">
              <label htmlFor="">Expense Amount</label>
              <input
                type="text"
                placeholder="Enter expense amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="">Expense Category</label>
              <select
                name="expenseType"
                id="expenseType"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="groceries">Groceries</option>
                <option value="transportation">Transportation</option>
                <option value="restaurants">Food</option>
                <option value="household">HouseHold</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="">Expense Date</label>
              <input
                type="date"
                placeholder="Enter expense amount"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <button>Add Expense</button>
          </form>
        </div>
        {/* Display Expenses */}
        <div>
          <ul>
            {expense.map((exp) => (
              <li key={exp.id}>
                <span>{exp.category}</span>
                <span>{exp.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AddTransaction;
