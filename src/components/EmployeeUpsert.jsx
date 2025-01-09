import React, { useEffect, useState } from 'react'

export default function EmployeeUpsert({selectedEmployee,onAdd}) {

  const [formstate, SetFormState] = useState({
    name: "",
    age: "",
    emailAddress: "",
    phoneNo: "",
  });

  useEffect(()=>{
    if(selectedEmployee){
      SetFormState({
        name: selectedEmployee.name,
    age: selectedEmployee.age,
    emailAddress: selectedEmployee.emailAddress,
    phoneNo: selectedEmployee.phoneNo,
      });
    } else{
      SetFormState(
        {
          name: "",
          age: "",
          emailAddress: "",
          phoneNo: "",
        }
      );
    }


  },[selectedEmployee])

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!formstate.name || !formstate.age || !formstate.emailAddress || !formstate.phoneNo) {
      alert("All fields are required!");
      return;
    }
    onAdd(formstate);
    SetFormState(
      {
        name: "",
        age: "",
        emailAddress: "",
        phoneNo: "",
      }
    );
  };


  return (
    <div> 
      <div className='form-container'>
        <h1>ADD EMPLOYEES</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'> Name </label>
          <input
            type='text'
            name='name'
            value={formstate.name}
            onChange={handleChange}
          >
          </input>
          <label htmlFor='name'> Age </label>
          <input
            type='text'
            name='age'
            value={formstate.age}
            onChange={handleChange}
          >
          </input>
          <label htmlFor='name'> Email Address </label>
          <input
            type='text'
            name='emailAddress'
            value={formstate.emailAddress}
            onChange={handleChange}
          >
          </input>
          <label htmlFor='name'> PhoneNO </label>
          <input
            type='text'
            name='phoneNo'
            value={formstate.phoneNo}
            onChange={handleChange}
          >
          </input>
          <button type='submit' className='btn-submit'> Add </button>
        </form>

      </div>
    </div>
  )
}
