import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../searchInputForm/searchinputform.styles.css'
import{AiOutlineSearch} from 'react-icons/ai';

const SearchInputForm = () => {
const [searchField,setSearchField]=useState('');
const navigate =useNavigate();
const handleChange=(e)=>{
  setSearchField(e.target.value);
}
const redirectToSearch=()=>{
  navigate('/search',{state:searchField});
}
  return (
     <div>
      <form>
        <center>
        <table>
          <tr>
            <td>
              <input type='text' className=' search-input' value={searchField} onChange={handleChange}/>
            </td>
            <td>
              <button onClick={redirectToSearch} className=' btn search-button'><i><AiOutlineSearch/></i></button>
            </td>
          </tr>
        </table>
        </center>
      </form>
    </div>
  )
}

export default SearchInputForm