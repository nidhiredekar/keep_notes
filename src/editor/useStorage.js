
import React,{useEffect, useState} from 'react';
import { firebase } from '@firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var projectStorage = firebase.storage();
var projectFirestore = firebase.firestore();

const useStorage = (file) => {
    const[progress,setProgress] = useState(0);
    const [error,setError]= useState(null);
    const [url,setUrl] = useState(null);


    useEffect(() =>{
        
        const storageRef = projectStorage.ref(file.name);
        const collref = projectFirestore.collection('notes');

        storageRef.put(file).on('state_changed', (snap) =>{
            let per = (snap.bytesTransferred/ snap.totalBytes) *100;
            setProgress(per);
        },(err) => {
            setError(err);
        }, async()=>{
            const url = await storageRef.getDownloadURL();
            collref.add({url});
            setUrl(url);
        })

    },[file]);
    
    return { progress, url, error }
}

export default useStorage;