import React, {useEffect, useMemo, useState} from 'react'
import {Collapse} from "antd"
import {styleAntdCustom, styleComponents} from "./assets/styles";
import NameSettings from "./components/name-settings";
import {PropsDelayType, PropsNodeNameType, TimerConfInterface} from "./assets/types";
import DelaySetting from "./components/delay-setting";

const IS_OPEN_COLLAPSE = true

// TODO: мок дата, она будет приходить из пропса
const mockData: TimerConfInterface = {
    isOpen: true,
    nodeName: '',
    delay: {
        isDelay: false,
        delayValue: null,
    }
}

/** timer-delay component */
const Timer = () => {

    const [timerConf, setTimerConf] = useState<TimerConfInterface>({} as TimerConfInterface)

    useEffect((): void => {
        setDataOnInit()
    }, [])

    /** set data when initializing the component */
    const setDataOnInit = (): void => {
        // TODO: засунуть в переменную timerConf данные из пропсов
        mockData.isOpen = IS_OPEN_COLLAPSE
        setTimerConf(mockData)
    }

    /** set data when open collapse IS_OPEN */
    const setDataOnOpenCollapse = (): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.isOpen = !newTimerConf.isOpen
        setTimerConf(newTimerConf)
    }

    const propsNameSetting = useMemo<PropsNodeNameType>(() => (
        {timerConf, setTimerConf}
    ), [timerConf])

    const propsDelaySetting = useMemo<PropsDelayType>(() => (
        {timerConf, setTimerConf}
    ), [timerConf])




    return (
        <div>
            <Collapse
                size="small"
                expandIconPosition={'end'}
                style={styleComponents.collapseBlock}
                /** default open or close collapse */
                activeKey={timerConf.isOpen ? ['conf-default'] : ['']}
                onChange={setDataOnOpenCollapse}
                items={[{
                    key: 'conf-default',
                    // TODO: add translate
                    label: 'Настройки',
                    children:
                        <>
                            <NameSettings {...propsNameSetting} />
                            <DelaySetting {...propsDelaySetting} />
                        </>
                }]}
            />
            {/*<div className="" onClick={() => console.log(timerConf)}>asdasd</div>*/}
            <style>{styleAntdCustom}</style>
        </div>
    )
}
export default Timer
