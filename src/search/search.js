import React from 'react';
import './search.css'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { removeHTMLTags } from '../helpers';
import { Search } from '@material-ui/icons';

const SearchNote = (props)=>{
    const{
        handleChange
    }=props;
    return(
        <div class="wrap">
        <div class="search">
           <input type="search" class="searchTerm" 
           placeholder={props.placeholder}
            onChange={(e) => handleChange(e.target.value)}
            />
        </div>
       
        </div>
    )
}


export default SearchNote;