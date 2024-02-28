 import React,{useState} from 'react'
 import "./OpenJobs.css"
 import{SlSpeedometer} from "react-icons/sl"
 import {BsFillBagCheckFill} from "react-icons/bs";
 import {MdRestore} from "react-icons/md"
 import {MdOutlineMessage} from "react-icons/md"
 import {AiFillCar} from "react-icons/ai"
 import {FcBusinessman} from "react-icons/fc"
 import {MdDomainDisabled} from "react-icons/md"
 import Main from '../Jobhistory/Main'
 import OverMain from "../Overviewbody/OverMain"; 
 import Inboxbody from "../Inbox/Inboxbody";
 import Vehicles from '../Vehicles/Vehicles';
 import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
 
 
 const OpenJobs = () => {
  
const  [click,setClick]=useState(false)
const [over,setOver]=useState(false)
const [vahicle,setVahicle]=useState(false)
const [inbox,setInBox]=useState(false)
 

 const handelclick=()=>{
  setClick(true)
  setOver(false)
  setVahicle(false)
  setInBox(false)
}
const handelover=()=>{
  setOver(true)
  setClick(false)
  setVahicle(false)
  setInBox(false)
}
const handelvehicles=()=>{
  setVahicle(true)
  setOver(false)
  setClick(false)
  setInBox(false)
}
const handelinbox=()=>{
  setInBox(true)
  setClick(false)
  setOver(false)
  setVahicle(false)
  
}
   return (
     <div className='openjobs_container'>
        <div className='openjob_border'>
      <div className='over_speed'>
     <SlSpeedometer className="speed_icon" />
     <button className='over' onClick={handelover}>Overview</button>
      </div>
      <span className='bag_open'>
      <BsFillBagCheckFill className='bag_icon'/>
      <button className='open'> Open Jobs</button>
      </span>
     
      <div className='waiting-applied-conf'>
      <span className='waiting'>Waiting</span>
      <span >Applied</span>
      <span >Confirmed</span>
      <span >In Progress</span>
      </div>

     <div className='all_icons'>
      <MdRestore className='restore'/>
      <button className='history_div' onClick={handelclick}>Job History </button>
      <MdOutlineMessage className='message_icon'/>
      <button className='inbox' onClick={handelinbox} >inbox </button>
      <AiFillCar className='message_icon'/>
      <button className='vehicles' onClick={handelvehicles}>My Vehicles</button>
      <FcBusinessman className='message_icon'/>
      <span className='manage_user'>Manage Users</span>
      <MdDomainDisabled className='message_icon'/>
      {/* <span className='companyprofile'>Company Profile</span> */}
      <div className='companyprofile'>
      <Box sx={{ minWidth: 120  }} className='muiBox'  >
      <FormControl sx={{ minWidth: 70 }} >
        <InputLabel    >
          
        </InputLabel>
        
        <NativeSelect
        
           defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Company profile</option>
          <option value={20}>Managr profile</option>
          <option value={30}>Manage Service</option>
          <option value={40}>Reviesws & Ratings</option>
          <option value={50}>Manage Offers</option>
        </NativeSelect>
      </FormControl>
    </Box>
    </div>
      </div>


      {click?<Main />:""}
      {over?<OverMain/>:""}
     {vahicle?<Vehicles/>:""}
      {inbox&&<Inboxbody/>}
    
      </div>
     </div>
   )
 }
 
 export default OpenJobs