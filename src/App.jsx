import React, {useEffect, useState } from 'react';
import UpdateBook from './Books/UpdateBook';
import Book from './Books/Book';
import EditUserForm from './Books/EditUserForm';




function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Vignesh',
      age: 22,
      emailAddress: 'babuvignesh1106@gmail.com',
      phoneNo: '48456184',
    },
    {
      id: 2,
      name: 'Hazel',
      age: 22,
      emailAddress: 'hazelshiny@gmail.com',
      phoneNo: '48456184',
    },
    {
      id: 3,
      name: 'rashi',
      age: 25,
      emailAddress: 'rashi@gmail.com',
      phoneNo: '12345678',
    },
  ]);

  const AddUser=(user)=>{
    user.id = users.length+1;
    setUsers([...users,user])
  }
  
  const DeleteUser= (id)=>{
    setUsers(users.filter((user)=>user.id!==id));

  };


  const[editing,SetEditing] = useState();

  const initialFormState={id:null,name:'',age:'',emailAddress:'',PhoneNO:''}

  const[currentUser,SetCurrentUser]=useState(initialFormState);

  const handleEdit=(user)=>{
    SetEditing(true);
    SetCurrentUser({id:user.id,name:user.name,age:user.age,emailAddress:user.emailAddress,phoneNo:user.phoneNo});
  }

  const updateUser=(id,updatedUser)=>{
    SetEditing(false);
    setUsers(users.map((user)=>(user.id === id?updatedUser:user)))

  }


  return (
    <div className="main-container">
     <Book users={users} handleEdit={handleEdit} deleteUser={DeleteUser}/>
     <div>
     {editing?(<div>
      <h1>EDIT USER</h1>
      <EditUserForm SetEditing={SetEditing} updateUser={updateUser} currentUser={currentUser}/>
     </div>):(
      <div>
        <UpdateBook addUser={AddUser}/>
      </div>
     )
     }
     
     </div>
     
    </div>
  );
}

export default App;
