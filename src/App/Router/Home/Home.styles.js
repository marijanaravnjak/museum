export default {
    home: {
        height: '100%',
        width: '100%',
        opacity: '0.3'
    },
    welcome: {
        fontSize: 75,
        color: 'grey',
        textAlign: 'center',
        padding: 40
    },
    homes: {
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    homeArea: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        padding: '1.25rem',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    search: {
        marginLeft: 20
    },
    '@media (max-width: 991px)': {
        home: {
          height: 'calc(100vh - 3.5em)',
          padding: '3 3 3.5em'
        }
      },
    
}

