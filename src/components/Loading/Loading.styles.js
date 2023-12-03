export default {
    containerWrapper: {
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f1f1f1',
        position: 'relative',
    },

    loader: {
        position: 'relative',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'linear-gradient(#f07e6e, #84cdfa, #5ad1cd)',
        '&:after': {
            content: '" "',
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            background: '#f1f1f1',
            border: 'solid white 10px',
            borderRadius: '50%'
        },

        '& span': {
            animationName: '$loading',
            animation: 'animate 1.2s linear infinite',
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(#f07e6e, #84cdfa, #5ad1cd)',
            left: 0,

            '&:nth-child(1)': {
                filter: 'blur(5px)'
            },

            '&:nth-child(2)': {
                filter: 'blur(10px)'
            },

            '&:nth-child(3)': {
                filter: 'blur(25px)'
            },

            '&:nth-child(4)': {
                filter: 'blur(50px)'
            },
        },
    },

    '@keyframes loading': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(360deg)'
        },
    },

}