import React from "react";
//importing the transaction component
import Transaction from "./Transaction";



function TransactionsList({personalTransactions}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {/* using the map method to loop through every transaction and create a new array. */}
        {personalTransactions.map((personalTransaction)=>{
          return (
            // rendering the transaction component which has a key and a list of props
            <Transaction 
            key={personalTransaction.id} 
            date={personalTransaction.date}
            description={personalTransaction.description}
            category={personalTransaction.category}
            amount={personalTransaction.amount}
            id={personalTransaction.id}
            />
          )
        })}
        
      </tbody>
    </table>
  );
}

export default TransactionsList;
