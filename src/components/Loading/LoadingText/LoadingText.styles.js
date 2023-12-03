export default {
    containerWrapper: {
        marginTop: '350px',
        marginLeft: 150,
        backgroundColor: '#fff',
    },

    background: {
        backgroundColor: '#fff',
        position: 'relative'
    },

    btn: {
        top: '50',
        left: '25%',
        height: '100%',
        width: '5%'
    },

    animatedBackground: {
        animationDuration: '2s',
        animationFillMode: 'forwards',
        animationIterationCount: 'infinite',
        animationName: '$loading',
        animationTimingFunction: 'linear',
        background: 'linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%)',
        backgroundSize: '800px 104px',
        height: '70px',
        position: 'relative'
    },

    '@keyframes loading': {
        '0%': {
            backgroundPosition: '-800px 0'
        },
        '100%': {
            backgroundPosition: '800px 0'
        },
    },

}
