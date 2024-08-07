import React from "react";

function Search({onChange}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        //using the props passed from the account container 
        onChange={onChange}
        
        
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
