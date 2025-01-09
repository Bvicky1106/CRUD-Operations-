import React from 'react'

export default function Employee({employees , onEdit}) {
  return (
    <div className='cards'>
      
      {employees.map((employees)=>{
        return(
          <div className='card' key={employees.id}>
            <p>
              <span className='title'>Name: </span>{employees.name}
            </p>
            <p>
              <span className='title'>Age: </span>{employees.age}
            </p>
            <p>
              <span className='title'>EmailAddress: </span>{employees.emailAddress}
            </p>
            <p>
              <span className='title'>PhoneNo: </span>{employees.phoneNo}
            </p>
            <div className='btn-group'>
            <button className='btn-update' onClick={()=>{onEdit(employee.id)}}>edit</button>
            <button className='btn-delete'>Delete</button>
              </div>
          </div>
        );
      })}
    </div>
  )
}
