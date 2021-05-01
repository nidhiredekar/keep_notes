import React from 'react';
import "./sort.css";

const Sort = (props)=>{
    const{
        handleSort
    }=props;

    return(
        
        <div class="fixed_button">
             <button onClick={handleSort}>SORT</button>   
    
       </div>
    )
}


export default Sort;