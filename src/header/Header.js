import React,{useState} from 'react'
import "./header.css"
import {RiArrowDropDownLine} from "react-icons/ri"
import {AiOutlineSearch} from 'react-icons/ai'
import {BiInfoCircle} from "react-icons/bi"
import {BsFillExclamationTriangleFill} from "react-icons/bs"
import {IoIosNotifications} from "react-icons/io"
import {RiMessage2Fill} from "react-icons/ri"
import { Switch } from 'antd';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Header = () => {
const [Schedule,setSchedule]=useState(false)
const [click,setClick]=useState(false)
const [drop, setDrop] = React.useState('');

const handleChange = (event) => {
  setDrop(event.target.value);
};
const   handelclick=(cheked)=>{
    setClick(cheked)
}
  return (
    <div className='headermain_div'>
<img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIKMrHVRcDQ75d4y6O_5uGEMpYu1yJG2iWyD682YXpLiKrVj8Efn4NnpNxQPwkqsOFXk&usqp=CAU" alt='' height='42px' width='42px' />
<span className='input'>
  <div className='dropdown'>
   <Box sx={{ minWidth: 20 }}>
      <FormControl  style={{minWidth: 120}}>
        <InputLabel id="demo-simple-select-label">Open</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={drop}
          label="drop"
          onChange={handleChange}
        >
          <MenuItem value={10}>waiting</MenuItem>
          <MenuItem value={20}>Applied</MenuItem>
          <MenuItem value={30}>Confirmed</MenuItem>
          <MenuItem value={30}>In Progress</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>

<input className='search_' placeholder='Search by Job ID, Customer Name…' />
<AiOutlineSearch className='search_icon'/>
</span>

<Switch className='switch_div' size="small"cheked={click}  onChange={handelclick}  /><span className='auto'>Auto Quote: {click?"ON":"OFF"}</span>

<BiInfoCircle className='info_icon'/>
<span className='trial'>Trial Version</span>
<div>
<BsFillExclamationTriangleFill className='notofication'/>
<IoIosNotifications className='notofication1'/>
<RiMessage2Fill className='notofication2'/>
</div>
    </div>
  )
}

export default Header