import React, {useState} from 'react'
import {Collapse} from "antd";

interface TimerConfInterface {
    isOpen: boolean
}

/** timer-delay component */
const Timer = () => {

    const [timerConf, setTimerConf] = useState<TimerConfInterface>({} as TimerConfInterface)



    return (
        <div>
            <Collapse
                size="small"
                expandIconPosition={'end'}
                style={styleComponents.collapseBlock}
                items={[{
                    key: 'conf-default',
                    // TODO: add translate
                    label: 'Настройки',
                    children:
                        <p>asdasd</p>
                }]}
            />
            <style>{styleAntdCustom}</style>
        </div>
    )
}
export default Timer


/** styles for timer-delay component */
const styleComponents = {
    collapseBlock: {
        width: '100%'
    },
    childBlock : {

    }
}
/** styles for timer-delay ANTD library */
const styleAntdCustom = `
    .ant-collapse-header{display: flex; justify-content: end;}
    .ant-collapse-header-text{flex: none;}
`
