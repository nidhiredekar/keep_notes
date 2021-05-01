const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    newNoteBtn: {
      width: '100%',
      height: '35px',
      borderBottom: '1px solid white',
      borderRadius: '0px',
      backgroundColor: '#fff;',
      color: 'Black',
      '&:hover': {
        backgroundColor: '#fff;'
      }
    },
    sidebarContainer: {
      marginTop: '0px',
      width: '300px',
      height: '100%',
      boxSizing: 'border-box',
      float: 'left',
      overflowY: 'scroll',
      overflowX: 'hidden'
    }
  });
  
  export default styles;