import React, {useState} from "react";//importing useState hook from react

function AddTransactionForm() {
  // calling the useState hook
  const [form, setForm] = useState([])
  const [description, setDescription]= useState("")
  const [date, setDate]= useState("")
  const [category, setCategory]= useState("")
  const [amount, setAmount]= useState("")
  
  // creating a isSubmit function that submits the form once the Add Transaction button is pressed
  function isSubmit(event){
    event.preventDefault()
    
    //creating a newForm Array containing the users input
    const newForm = {
      date,
      description,
      category, 
      amount
    }

    // Posting data using the feth method
    fetch("http://localhost:8001/transactions",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify(newForm) 
    })
    .then((response)=> response.json())
    .then(newFormData=>{
      //using the spread operator to mutate the array and create a new array
      setForm([...form,newFormData ])
      window.location.reload()  
    })
    .catch((error)=>console.error(error))
    
   
    //Ensuring the forms shows an empty string once the user finishes inputting values
    setDate("")
    setDescription("")
    setCategory("")
    setAmount("")
  }
  

  //creating functions that target the value of the user inputs and display it
  function isDate(event){
    setDate(event.target.value)
  }
  function isDescription(event){
    setDescription(event.target.value)
  }

  function isCategory(event){
    setCategory(event.target.value)

  }

  function isAmount(event){
    setAmount(event.target.value)
  }
  
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={isSubmit}>
        <div className="inline fields">
          {/* Assigning value, required and events that will be rendered through their respective functions above */}
          <input type="date" value = {date} name="date" onChange={isDate} required />
          <input type="text" value = {description} name="description" placeholder="Description" onChange={isDescription} required/>
          <input type="text" value = {category} name="category" placeholder="Category" onChange={isCategory} required />
          <input type="number" value = {amount} name="amount" placeholder="Amount" step="0.01" onChange={isAmount} required/>
        </div>
        <button className="ui button" type="submit" >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
