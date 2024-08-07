import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
//importing the useState and useEffect hook from react
import React, {useEffect, useState} from "react";


function AccountContainer() {
//calling the useState hook
const [transactions, setTransactions]= useState([])
const [userInput, setUserInput] = useState('')

 //function that targets the input of the user on the search bar
function isSearch(event){
  setUserInput(event.target.value)
}

//function to filter the data that is on the search bar
const isFilterUserInput = transactions.filter((transaction)=>{
  return(transaction.description.toLowerCase().includes(userInput.toLowerCase()))
})

//introducing the useEffect method in order to fetch the data from the db.json
useEffect(()=>{
  fetch("http://localhost:8001/transactions")
  .then((response) => response.json())
  .then((data)=>{
      setTransactions(data)
    //console.log(data)
  })
  .catch((error)=>console.error(error))
}, [])



  return (
    <div>
      <Search  onChange={isSearch}/>
      <AddTransactionForm />
      <TransactionsList personalTransactions={isFilterUserInput}/>
    </div>
  );
}

export default AccountContainer;
