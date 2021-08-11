import React from "react";
import './App.css';
import Tax from './components/tax_logic.jsx'



function App() {
  return (
    <div>
      <header>
        <h1>Income Tax Calculator</h1>
      </header>

      <p>Please enter the </p>
      <Tax/>

      <form>
        {/* Input Amount Box */}
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i>Submit</i>
        </button>

        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Monthly</option>
            <option value="uncompleted">Annual</option>
            
          </select>
        </div>
      </form>


    </div>
  );
}

export default App;
