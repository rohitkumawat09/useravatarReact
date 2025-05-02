import { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci"
import { RxCross2 } from "react-icons/rx"
import color from './background'
import './App.css'

function App() {
  const [showText, setCount] = useState(null);
  const [nameInput, setNameInput] = useState('');
  const [firstUser, setFirstUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  console.log(users);
  // console.log(firstUser);
  

  function toggle(section) {
    setCount((prevSection) => (prevSection === section ? null : section));
  }




  function handleConfirm() {
    const nameInputTrim = nameInput.trim();
    if (nameInputTrim) {
      const firstWord = nameInputTrim;
      const form = firstWord.toUpperCase().split("")[0];
      console.log(form);
      const assignedColor = getRandomColor();
      
      const newUser = {
        letter: form,
        color: assignedColor,
      };
      setUsers([...users, newUser]);
      // setUsers([...users, form ]);
      setFirstUser(form);
      setNameInput('');
      setCount(null);
    }
  }
  function getRandomColor() {
    
    const randomIndex = Math.floor(Math.random() * color.length);
    
    return color[randomIndex];
  }
  

  // function cut(indexToRemove){
  //   setUsers((prevUsers) =>
  //     prevUsers.filter((_, index) => index !== indexToRemove)
  //   );
  // }
  function cut(index) {
    setDeleteIndex(index); }

    function handleDeleteUser() {
      if (deleteIndex !== null) {
        setUsers((prevUsers) =>
          prevUsers.filter((_, index) => index !== deleteIndex)
        );
        setDeleteIndex(null); 
      }
    }
    
  
  function handleDeleteCancel() {
    setDeleteIndex(null);
  }


  return (
    <>
      <div className="container">
        <div className="main">
          
          <div className='wrapper'>
          


   

<div className='usere'>
              {users.map((user, index) => (
                <div className='delete' key={index} style={{ backgroundColor: user.color }}>
                  <div className='userdelete' onClick={() => cut(index)}>X</div>
                  <p>{user.letter}</p>
                </div>
              ))}
            </div>

            <span onClick={() => toggle("HTML")} className='CiCirclePlus' ><CiCirclePlus /></span>

          </div>

          {deleteIndex !== null && (
  <div className="overlay">
    <div className="delete-modal">
      <p>Are you sure you want to delete this user?</p>
      <div className="modal-buttons">
        <button onClick={handleDeleteUser}>Delete</button>
        <button onClick={handleDeleteCancel}>Cancel</button>
      </div>
    </div>
  </div>
)}



          <div className="para_list" style={{ display: showText === "HTML" ? "block" : "none", backgroundColor: "white" }} >
            <span onClick={toggle} className='RxCross2'><RxCross2 /></span>
            <h2 className='new'>NEW USER</h2>
            <div className='target'>
              <lable htmlFor="">Enter Name</lable>
              <input type="text" placeholder='Enter Name'


                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
              <div className="btn">
                <button className='Cencel' onClick={toggle}>Cencel</button>
                <button className='Confirm' onClick={handleConfirm}>Confirm</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App