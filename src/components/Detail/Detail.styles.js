export default {
    container: {
        width: '100%',
        height: '100%',
        textSize: 'bold',
        textAlign: 'center',
        position: 'relative',
        padding: 20
    },

    welcome: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginLeft: '200px',
        textShadow: '-1px -1px 1px #c2a4a4'
    },

    title: {
        position: 'absolute',
        marginLeft: '300px',
        margin: 40,
        width: '40%',
        color: 'black',
        fontSize: '20px',
        textAlign: 'center',
        background: 'light',
        opacity: '0.7',
        textShadow: '-1px -1px 1px #c2a4a4'
    },

    obj: {
        position: 'absolute',
        width: '40%',
        color: 'black',
        fontSize: '20px',
        textAlign: 'center',
        marginLeft: '300px',
        paddingTop: 100,
        background: 'liht grey',
        opacity: '0.7',
        textShadow: '-1px -1px 1px #c2a4a4',
        transform: 'translate(0%, 10%)'
    },

    departmentContainer: {
        position: 'absolute',
        marginLeft: '300px',
        paddingTop: 200,
        width: '40%',
        color: 'black',
        fontSize: 'small',
        textAlign: 'center',
        backgroundColor: 'light grey',
        opacity: '0.7',
        textShadow: '-1px -1px 1px #c2a4a4',
        transform: 'translate(0%, 10%)'
    },

    searchContainer: {
        height: 100,
        width: 40,
    },

    image: {
        marginTop: 10
    },

    link: {
        color: 'grey',
        fontSize: 18,
        fontWeight: 'bold',
        border: '1px solid grey',
        borderRadius: 5,
        textDecoration: 'none',
        marginLeft: -20,
        marginBottom: 40
    },

    linkInf: {
        color: 'grey',
        fontSize: 18,
        fontWeight: 'bold',
        border: '1px solid grey',
        borderRadius: 5,
        textDecoration: 'none',
        marginLeft: 150,
        '& image': {
            backgroundColor: 'grey'
        },
    },

    '@media screen and (minWidth: 480px)': {
        container: {
            maxWidth: '41.66667%',
            flex: '0 0 41.66667%',
            paddingTop: '20rem',
            paddingRight: '3rem',
            paddingLeft: '15px',
            textAlign: 'left',
            transform: 'translate(-40%, -50%)'
        },
    },
}

