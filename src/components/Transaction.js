import React from "react";

//passing the list of props from the transaction list
function Transaction({ date, description,category, amount,id}) {

  //function that will delete data from the server and the table as well
function isDelete(id){

      //deleting using the fetch method
      fetch(`http://localhost:8001/transactions/${id}`,{
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
      .then((response)=> response.json())
      .then(data=>{
        console.log(data)
        window.location.reload()
      })
      .catch((error)=>console.error(error))
    }
  return (
    //passing in the props so that we can display data
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      {/* introducing a delete button that will be responsible for deleting a transaction once it has been clicked */}
      <td><button onClick={()=>isDelete(id)}>delete</button></td>
    </tr>
  );
}

export default Transaction;
