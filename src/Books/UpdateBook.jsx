import React, { useState } from 'react'

function UpdateBook({addUser}) {
 
  const intialFormState={id:null,name:'',age:'',emailAddress:'',phoneNo:''}

  const [user,SetUser]=useState(intialFormState);

  const handleInputChange = (event)=>{
     const {name,value}=event.target;
     
     SetUser({...user,[name]:value})
  }

  return (
    <div> 
      <div className='form-container'>
        <h1>ADD BOOKS</h1>
        <form onSubmit={
      event=>{
        event.preventDefault();
        if(!user.name||!user.age||!user.emailAddress||!user.phoneNo) return;
        addUser(user);
        SetUser(intialFormState);
        
      }
    } >
          <label htmlFor='name'> Name </label>
          <input
            type='text'
            name='name'
            onChange={handleInputChange}
            value={user.name}
          >
          </input>
          <label htmlFor='name'> Age </label>
          <input
            type='text'
            name='age'
            onChange={handleInputChange}
            value={user.age}
          >
          </input>
          <label htmlFor='name'> Email Address </label>
          <input
            type='text'
            name='emailAddress' 
            onChange={handleInputChange}
            value={user.emailAddress}
          >
          </input>
          <label htmlFor='name'> PhoneNO </label>
          <input
            type='text'
            name='phoneNo'
            onChange={handleInputChange}
            value={user.phoneNo}
          >
          </input>
          <button type='submit' className='btn-submit'> Add </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateBook;