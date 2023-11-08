import React, {useEffect, useState} from 'react'
import {Collapse} from "antd";

interface TimerConfInterface {
    isOpen: boolean,
    nodeName: string,
}

const IS_OPEN_COLLAPSE = true

// TODO: мок дата, она будет приходить из пропса
const mockData: TimerConfInterface = {
    isOpen: true,
    nodeName: ''
}

/** timer-delay component */
const Timer = () => {

    const [timerConf, setTimerConf] = useState<TimerConfInterface>({} as TimerConfInterface)

    useEffect((): void => {
        setDataOnInit()
    }, [])

    /** set data when initializing the component */
    const setDataOnInit = (): void => {
        mockData.isOpen = IS_OPEN_COLLAPSE
        setTimerConf(mockData)
    }

    /** set data when open collapse */
    const setDataOnOpenCollapse = (): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.isOpen = !newTimerConf.isOpen
        setTimerConf(newTimerConf)
    }



    return (
        <div>
            <Collapse
                size="small"
                expandIconPosition={'end'}
                style={styleComponents.collapseBlock}
                /** default open or close collapse*/
                activeKey={timerConf.isOpen ? ['conf-default'] : ['']}
                onChange={setDataOnOpenCollapse}
                items={[{
                    key: 'conf-default',
                    // TODO: add translate
                    label: 'Настройки',
                    children:
                        <>


                            <div style={styleComponents.childBlock.nameBlock.main}>
                                {/*TODO: add translate*/}
                                <div style={styleComponents.childBlock.nameBlock.title}>Имя</div>
                                <div style={styleComponents.childBlock.nameBlock.input}></div>
                            </div>


                            <div style={styleComponents.collapseBlock}></div>


                        </>
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
        nameBlock: {
            main: {
                display: 'flex',
                justifyContent: 'space-between'
            },
            title: {},
            input: {},
        },
        timerBlock: {},
    }
}
/** styles for timer-delay ANTD library */
const styleAntdCustom = `
    .ant-collapse-header{display: flex!important; justify-content: end!important;}
    .ant-collapse-header-text{flex: none!important; margin-inline-end: 0px!important;}
`
