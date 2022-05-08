import React from "react";
import { Link } from "react-router-dom";
import ExpenseIllustration from "../../assets/svg/house_expense.svg";
import Blob from "../../assets/svg/savings-money-svgrepo-com.svg";
import Savings from "../../assets/svg/savings-svgrepo-com.svg";
import Transaction from "../../assets/svg/transaction-money-svgrepo-com.svg";

function Home() {
  return (
    <div className='home-container'>
      <div className='home-heading-wrapper'>
        <div className='intro-text'>
          <h2>Expense Tracking App</h2>
          <p>Track your expenses at ease!</p>
        </div>
        <div className='intro-illus'>
          <img src={ExpenseIllustration} alt='' />
        </div>
      </div>
      <div className='home-center-wrapper'>
        <div>
          <div className='blob'>
            <img src={Blob} alt='' />
          </div>
          <p>Can save your credit/debit cards and manage your transactions</p>
        </div>
        <div className='savings'>
          <p>
            Can view transaction details. This feature helps you to know about
            your expenses
          </p>

          <div className='blob'>
            <img src={Savings} alt='' />
          </div>
        </div>
        <div className='transactions'>
          <div className='blob'>
            <img src={Transaction} alt='' />
          </div>
          <p>
            Can view transaction details. This feature helps you to know about
            your expenses
          </p>
        </div>
      </div>
      <section>
        <h2>Ready to track your expense?</h2>
        <br />
        <Link to="dashboard"> Get Started now</Link>
      </section>
      <footer className='footer'>
        <div>
          <h1>Expense Tracker</h1>
        </div>
        <p>All Rights Reserved &#169;{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Home;
