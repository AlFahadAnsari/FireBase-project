import React, { useState } from "react";
import { logout,db, auth} from '../Firebase.js'
import { query,getDocs,where,collection, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";



function Dashboard() {

  let [user,loading,error]=useAuthState(auth)
  const [name, setname] = useState('')
  let navi=useNavigate()

  const fecthUsername=async ()=>{
   try {
    const q=query(collection(db,'users'),where('uid','==',user?.uid))
    let docs=await getDocs(q)
    let data=doc.docs[0].data()
    setname(data.name)
   } catch (error) {
    console.log(error.message);
   }
  }


function handle(){
  logout()
  setTimeout(() => {
    navi('/')
    location.reload()
  }, 1000);
}
  


  return (
    <div>

    <div className="dashbord">
      <div className="dashboard__container">
        logged in as
      
        <div>{name}</div>
        <div>{user?.email}</div>
      </div>
    </div>


    <button onClick={handle} className="dashbtnlogout">
  

    logOut

    </button>

  </div>
  )

}

export default Dashboard;