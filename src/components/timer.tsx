import React, {useEffect, useState} from 'react'
import {Collapse, Input} from "antd"
import {TagFilled} from "@ant-design/icons";
import {styleAntdCustom, styleComponents} from "./assets/styles";

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

    /** set data when open collapse IS_OPEN */
    const setDataOnOpenCollapse = (): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.isOpen = !newTimerConf.isOpen
        setTimerConf(newTimerConf)
    }

    /** set data NODE_NAME */
    const setDataNodeName = (data: string): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.nodeName = data
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

                            {/** NAME setting */}
                            <div style={styleComponents.childBlock.nameBlock.main}>
                                <div style={styleComponents.childBlock.nameBlock.title}>
                                    <p style={styleComponents.childBlock.nameBlock.icon}><TagFilled /></p>
                                    {/*TODO: add translate*/}
                                    <p>Имя</p>
                                </div>
                                {/*TODO: add translate*/}
                                <Input placeholder="Имя"
                                       style={styleComponents.childBlock.nameBlock.input}
                                       value={timerConf.nodeName}
                                       onChange={(el) => setDataNodeName(el.target.value)}
                                />
                            </div>

                            {/** TIMER setting */}
                            <div style={styleComponents.collapseBlock}></div>

                        </>
                }]}
            />
            <style>{styleAntdCustom}</style>
        </div>
    )
}
export default Timer
