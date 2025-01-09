import React from 'react'

function Book({users,deleteUser,handleEdit}) {
  return (
    <div className='cards'>
        <h1>VIEW USERS</h1>
   {users.length>0?(
    users.map((user)=>{
        return(
            <div className='card' key={user.id}>
              <p>
                <span className='title'>Name: </span>{user.name}
              </p>
              <p>
                <span className='title'>Age: </span>{user.age}
              </p>
              <p>
                <span className='title'>EmailAddress: </span>{user.emailAddress}
              </p>
              <p>
                <span className='title'>PhoneNo: </span>{user.phoneNo}
              </p>
              <div className='btn-group'>
              <button className='btn-update' onClick={()=>handleEdit(user)}>Edit</button>
              <button className='btn-delete' onClick={()=>deleteUser(user.id)}>Delete</button>
                </div>
            </div>
          );
    })
   ):(
    <div>
        <h1>No Users Found</h1>
    </div>
   )
   }


    </div>
  )
}

export default Book;