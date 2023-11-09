/** styles for timer-delay component */
export const styleComponents = {
    collapseBlock: {
        width: '100%'
    },
    childBlock : {
        nameBlock: {
            main: {
                display: 'flex',
                justifyContent: 'space-between'
            },
            title: {
                display: 'flex',
                alignItems: 'center'
            },
            input: {
                width: '300px'
            },
            icon: {
                marginRight: '5px',
            }
        },
        timerBlock: {},
    }
}
/** styles for timer-delay ANTD library */
export const styleAntdCustom = `
    .ant-collapse-header{display: flex!important; justify-content: end!important;}
    .ant-collapse-header-text{flex: none!important; margin-inline-end: 0px!important;}
`
