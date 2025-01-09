import React, { useState } from 'react'


function EditUserForm({currentUser,updateUser,SetEditing}) {

    const[user,SetUser]=useState(currentUser);

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
        updateUser(user.id,user);
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
          <button type='submit' className='btn-submit'> Update User </button>
          <br></br>
          <button type='button' className='btn-submit' onClick={()=>{SetEditing(false)}}> Delete </button>
        </form>
      </div>
    </div>
  )
}

export default EditUserForm;