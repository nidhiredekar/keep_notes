const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '5px 5px 2px white'
    },
    titleInput: { 
      height: '50px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '5px',
      fontSize: '24px',
      width: 'calc(100% - 300px)',
      backgroundColor: '#fff',
      color: 'black',
      paddingLeft: '50px'
    },
    titleLable: { 
      height: '50px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '5px',
      fontSize: '24px',
      width: 'calc(100% - 300px)',
      backgroundColor: '#fff',
      color: 'black',
      paddingLeft: '50px'
    },
    editIcon1: {
      position: 'absolute',
      left: '310px',
      top: '150px',
      color:  'black',
      width: '10',
      height: '10'
    },
    editIcon2: {
      position: 'absolute',
      left: '310px',
      top: '95px',
      color:  'black',
      width: '10',
      height: '10'
    },
    editorContainer: {
      height: '100%',
      boxSizing: 'border-box',
      color: '#fff'
    },

    
  });
  
  export default styles;