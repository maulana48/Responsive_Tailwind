module.exports = {

    content: [
        "./node_modules/flowbite/**/*.js"
    ],

    plugins: [
        require('flowbite/plugin')
    ],

    theme: {
        fontFamily: {
            'sans': ['Inter'],
        },
        container: {
            center: true,
            screens: {
                xl: '1170px',
            },
        },
        extend: {
            colors: {
                clifford: '#da373d',
            },
        },
    }

}