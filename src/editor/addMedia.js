import React,{useEffect, useState} from 'react';
import ProgressBar from './progressBar';
import 'firebase/firestore';

const AddMedia =()=> {
const [file, setFile] = useState(null);
const[error,setError] = useState(null);


const types = ['image/png', 'image/jpeg' , 'image/jpg','video/mp4','audio/mp3'];

const changeHandler = (e)=> {
   let selected = e.target.files[0];

 if(selected && types.includes(selected.type)){
     setFile(selected);
     setError('');
 }
else {
    setFile(null);
    setError('Please Enter valid format file');
}
}
    return(
        <form>
            <input type="file" onChange = {changeHandler}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                { file && <div>{file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            
            </div>
        </form>
       
    )
}

export default AddMedia;