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
  console.log(users);
  // console.log(firstUser);
  

  function toggle(section) {
    setCount((prevSection) => (prevSection === section ? null : section));
  }




  function handleConfirm() {
    const nameInputTrim = nameInput.trim();
    if (nameInputTrim) {
      const firstWord = nameInputTrim;
      const form = firstWord.toUpperCase();
      setUsers([...users, nameInputTrim.split("")[0]]);
      setFirstUser(form);
      setNameInput('');
      setCount(null);
    }
  }
  function getRandomColor() {
    
    const randomIndex = Math.floor(Math.random() * color.length);
    
    return color[randomIndex];
  }
  

  function cut(indexToRemove){
    setUsers((prevUsers) =>
      prevUsers.filter((_, index) => index !== indexToRemove)
    );
  }

  function handleDeleteUser() {
  }
  
  function handleDeleteCancel() {

  }


  return (
    <>
      <div className="container">
        <div className="main">
          <div className='wrapper'>
          
{/* 
<div className="usere">

{users.map((user, index) => (
    <p key={index}   style={{ backgroundColor: getRandomColor(),  }}>{user}</p>
  ))}



</div> */}


   
<div className='usere'>
  {users.map((firstUser, index) => (
    <div className='delete' key={index}  style={{ backgroundColor: getRandomColor(),  }}>
      <div className='userdelete' onClick={() => cut(index)}>X</div>
      <p>{firstUser}</p>
    </div>
  ))}
</div>

            <span onClick={() => toggle("HTML")} className='CiCirclePlus' ><CiCirclePlus /></span>

          </div>


<div className='good'>
  <div className='one'>
    <button  onClick={ handleDeleteUser}>Delete</button>
  </div>
  <div className='two'>
    <button onClick={handleDeleteCancel}>
      cancel
    </button>
  </div>
</div>



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