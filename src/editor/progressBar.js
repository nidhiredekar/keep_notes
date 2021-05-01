import React from 'react';
import { firebase } from '@firebase/app'
import useStorage from './useStorage';
import 'firebase/storage';


var projectStorage = firebase.storage();
const ProgressBar = ({file , setFile}) =>{
const { url, progress} = useStorage(file);

console.log(progress,url)
return(
    <div>
    <img src={'this.url'}></img>
    </div>
    
    ) 

}

export default ProgressBar;