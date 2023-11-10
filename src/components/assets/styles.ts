import { RepeatEnum } from "./types";

/** styles for timer-delay component */
export const styleComponents = {
    collapseBlock: {width: '100%'},
    childBlock : {
        nameBlock: {
            main: {display: 'flex', justifyContent: 'space-between', marginBottom: '15px'},
            title: {display: 'flex', alignItems: 'center'},
            input: {width: '300px'},
            icon: {marginRight: '5px'}
        },
        timerDelayBlock: {
            main: {display: 'flex', justifyContent: 'space-between', marginBottom: '15px'},
            title: {display: 'flex', alignItems: 'center'},
            icon: {marginRight: '5px'},
            active: {display: 'flex', justifyContent: 'end'},
            checkbox: {marginRight: '7px', transform: 'scale(1.3)'},
            input: {width: '80px'}
        },
        timerRepeatBlock: {
            main: {display: 'flex', justifyContent: 'space-between', marginBottom: '20px'},
            title: {display: 'flex', alignItems: 'center'},
            icon: {marginRight: '5px'},
            select: {width: '250px'},

            active: {
                [RepeatEnum.Interval]: {display: 'flex', justifyContent: 'start', alignItems: 'center'},
                intervalInputValue: {width: '80px'},
                intervalSelectType: {width: '120px'},
                [RepeatEnum.IntervalInGap]: {display: 'flex', justifyContent: 'start', alignItems: 'center'},
                intervalInGapInputInterval: {width: '60px'},
                intervalInGapInputGap: {width: '90px'},
                intervalInGapSetDay: {width: '100%'},
            }
        }
    }
}
/** styles for ANTD library */
export const styleAntdCustom = `
    .ant-collapse-header{display: flex!important; justify-content: end!important;}
    .ant-collapse-header-text{flex: none!important; margin-inline-end: 0px!important;}
    
    .ant-picker-now-btn{margin-right: 5px}
`
