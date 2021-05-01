import React from 'react';
import './App.css';
import SidebarComponent from './sidebar/sidebar'
import SidebaritemComponent from './sidebaritem/sidebaritem'
import EditorComponent from './editor/editor'
import { firebase } from '@firebase/app'
import fire from './fire';
import SearchNote from './search/search'
import SortNote from './sort/sort.js'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Notesdemo extends React.Component{
  constructor(){
    super()
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
      searchField:''
    }
  }

  render(){
    
    
    return(
     
      <div className="app-container">
       
        <SidebarComponent
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          selectNote = {this.selectNote}
          deleteNote = {this.deleteNote}
          newNote = {this.newNote}></SidebarComponent>

         {
          this.state.selectedNote ?
          <EditorComponent
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
            noteUpdate = {this.noteUpdate}></EditorComponent> :
          null
         }

         <SearchNote 
         placeholder="Enter title of Notes.."
         searchField={this.state.searchField} 
         handleChange={this.handleChange}
         />

       <SortNote
        handleSort={this.handleSort}
       />
         
      </div>
    );
  }

  componentDidMount = () => {
    var firestore = firebase.firestore();
    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        firestore.collection('notes').where('userId', '==' , user.uid)
        .onSnapshot(serverUpdate => {
          if(serverUpdate.docs) {
              const notes = serverUpdate.docs.map(_doc => {
                const data = _doc.data();
                data['id'] = _doc.id;
                return data}) 
             this.setState({notes:notes})
          } else  this.setState({notes:[]})   
        })
      }
    })
  }



  handleChange = async (searchField) =>{
    var firestore = firebase.firestore();
    var user = fire.auth().currentUser;
    if(user){
    const ref = firestore.collection('notes').where('userId', '==' , user.uid);
    const snapshot1 = await ref.where('lable', '==', searchField).get();
    const snapshot = await ref.where('title' ,'==', searchField).get();
      if(snapshot) {
          const notes = snapshot.docs.map(_doc => {
            const data = _doc.data();
            data['id'] = _doc.id;
            return data}) 
         this.setState({notes:notes})
      }  
      else if(snapshot1){
          const notes = snapshot1.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data})
          this.setState({notes:notes})
          console.log(snapshot1);
      }
      else  this.setState({notes:[]})   
    
    }
    
  
}
  
  handleSort = async()=>{
      var firestore = firebase.firestore();
      var user = fire.auth().currentUser;
      if(user){
        const ref = firestore.collection('notes').where('userId', '==' , user.uid);
        const snapshot = await ref.orderBy('timestamp').get()
     
        if(snapshot) {
            const notes = snapshot.docs.map(_doc => {
              const data = _doc.data();
              data['id'] = _doc.id;
              return data}) 
           this.setState({notes:notes})
        } else  this.setState({notes:[]}) 
      }   
  }

  selectNote = (note,index) => {
    this.setState({ selectedNoteIndex:index, selectedNote:note})   
  }

  noteUpdate = (id, noteObj) => {
    firebase
    .firestore()
    .collection('notes')
    .doc(id)
    .update({
      title: noteObj.title,
      body: noteObj.body,
      lable: noteObj.lable,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  newNote = async () => {
    const note = {
      title: '',
      body: '',
      time_of_creation: '',
      lable: ''
    }

    var firestore = firebase.firestore();

    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        firestore
        .collection('notes')
        .add({
          title:note.title,
          body:note.body,
          userId: user.uid,
          time_of_creation:note.time_of_creation,
          lable:note.lable,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()
          
        })
        .then((newDoc) => {
          const newID = newDoc.id
          this.setState({ notes: [...this.state.notes, note] })
          const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id===newID)[0])
          this.setState({ selectedNote:this.state.notes[newNoteIndex], selectedNoteIndex:newNoteIndex })
        });
      }
    });
    
  }

  deleteNote = async(note) => {
    const noteIndex = this.state.notes.indexOf(note)
    await this.setState({ notes: this.state.notes.filter(_note => _note!==note) })
    if(this.state.selectedNoteIndex===noteIndex){
      this.setState({ selectedNoteIndex:null, selectedNote:null })
    } else {
      this.state.notes.length > 1 
      ?
      this.selectNote(this.state.notes[this.state.selectedNoteIndex -1], this.state.selectedNoteIndex -1)
      :
      this.setState({ selectedNoteIndex:null, selectedNote:null })
    }
    firebase
    .firestore()
    .collection('notes')
    .doc(note.id)
    .delete()
  }

  

};

export default Notesdemo;