import React from 'react'
import ReactQuill from 'react-quill'
import debounce from '../helpers'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { Divider } from '@material-ui/core'
import AddMedia from './addMedia'
import useStorage from './useStorage'
import ProgressBar from './progressBar'

class EditorComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            body: '',
            title: '',
            notes_id: '',
            lable: '',
            url: ''
        }
    }
    componentDidMount = () => {
        this.setState({
            body: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id,
            lable: this.props.selectedNote.lable,
            url: this.props.selectedNote.url
           
        })
    }
    componentDidUpdate = () => {
        if(this.props.selectedNote.id !== this.state.id) {
            this.setState({
                body: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id,
                lable: this.props.selectedNote.lable, 
                url: this.props.selectedNote.url
            })
        }
    }
    render(){
        const {classes} = this.props
        return(
            <div className={classes.editorContainer}>
                <BorderColorIcon
                    className={classes.editIcon1}>
                </BorderColorIcon>
                <input
                    className={classes.titleInput}
                    placeholder={'Note title..'}
                    value={this.state.title ? this.state.title : ''}
                    onChange={(e)=> this.updateTitle(e.target.value)}>
                </input>

                <Divider></Divider>
                <BorderColorIcon
                    className={classes.editIcon2}>
                  
                </BorderColorIcon>
                <input
                    className={classes.titleLable}
                    placeholder={'Note lable..'}
                    value={this.state.lable ? this.state.lable : ''}
                    onChange={(e)=> this.updateLable(e.target.value)}>
                </input>

                <ReactQuill 
                value = {this.state.body}
                onChange = {this.updateBody}/>
                  <AddMedia 
                  />
                 

            </div>
        )
    }
    updateBody = async (val)=>{
        await this.setState({body:val})
        this.update()
    }
    updateTitle = async (txt) => {
        await this.setState({title:txt})
        this.update()
    }
    updateLable = async (txt) => {
        await this.setState({lable:txt})
        this.update()
    }

    

    update = debounce(()=>{
        this.props.noteUpdate(this.state.id, {
            title:this.state.title,
            body: this.state.body,
            lable:this.state.lable,
            date_of_creation:this.state.date_of_creation,
            url: this.state.url
        })
    }, 1500)
}

export default withStyles(styles)(EditorComponent)