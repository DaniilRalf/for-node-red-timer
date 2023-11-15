import React, { useEffect, useMemo, useState } from 'react'
import { Collapse } from "antd"
import { styleAntdCustom, styleComponents } from "./assets/styles";
import NameSetting from "./components/name-setting";
import {
    PropsDelayType,
    PropsNodeNameType,
    RepeatEnum,
    RepeatIntervalTypeValueEnum,
    TimerConfInterface
} from "./assets/types";
import DelaySetting from "./components/delay-setting";
import RepeatSetting from "./components/repeat-setting";

const IS_OPEN_COLLAPSE = true

// TODO: мок дата, она будет приходить из пропса
const mockData: TimerConfInterface = {
    isOpen: true,
    nodeName: '',
    delay: {
        isDelay: false,
        delayValue: null,
    },
    repeat: {
        typeRepeat: RepeatEnum.IntervalInGap,
        dataRepeat: {
            interval: {
                value: 1,
                typeValue: RepeatIntervalTypeValueEnum.Sec
            },
            intervalInGap: {
                intervalValue: 1,
                gapValue: ['11:00:00', '12:00:00'],
                daysValue: [1, 2, 3, 4, 5, 6, 7]
            },
            concreteTime: {
                concreteTimeValue: '00:00:00',
                daysValue: [1, 2, 3, 4, 5, 6, 7]
            }
        }
    }
}


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


        /** =========================================================== */
        console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
        // setInterval((): void => {
        //     const nowDay: number = new Date().getDay()
        //     const actualTime = new Date('2000-01-01 ' + new Date().getHours() + ':' + new Date().getMinutes() + ':00')
        //     const confTimeStart = new Date('2000-01-01 ' + mockData.repeat.dataRepeat[RepeatEnum.IntervalInGap].gapValue[0] + ':00')
        //     const confTimeEnd = new Date('2000-01-01 ' + mockData.repeat.dataRepeat[RepeatEnum.IntervalInGap].gapValue[1] + ':00')
        //     if (mockData.repeat.dataRepeat[RepeatEnum.IntervalInGap].daysValue.includes(nowDay)
        //         && ((confTimeStart <= actualTime) &&  (actualTime <= confTimeEnd))) {
        //         console.log(actualTime)
        //     }
        //     // console.log(actualTime)
        // }, mockData.repeat.dataRepeat[RepeatEnum.IntervalInGap].intervalValue * 1000)

        // setInterval((): void => {
        //     const nowDate = new Date()
        //     const nowDay: number = nowDate.getDay()
        //     const nowTime = new Date(`2000-01-01 ${nowDate.getHours()}:${nowDate.getMinutes()}:00`)
        //     const confTime = new Date(`2000-01-01 ${mockData.repeat.dataRepeat[RepeatEnum.ConcreteTime].concreteTimeValue}`)
        //     if (nowTime === confTime && mockData.repeat.dataRepeat[RepeatEnum.ConcreteTime].daysValue.includes(nowDay)) {
        //
        //     }
        // }, 1000)
        /** =========================================================== */
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

    const propsRepeatSetting = useMemo<PropsDelayType>(() => (
        {timerConf, setTimerConf}
    ), [timerConf])

    return (
        <div>
            <Collapse
                size="small"
                expandIconPosition={'end'}
                style={styleComponents.collapseBlock}
                //* default open or close collapse
                activeKey={timerConf.isOpen ? ['conf-default'] : ['']}
                onChange={setDataOnOpenCollapse}
                items={[{
                    key: 'conf-default',
                    // TODO: add translate
                    label: 'Настройки',
                    children:
                        <>
                            <NameSetting {...propsNameSetting} />
                            <DelaySetting {...propsDelaySetting} />
                            <RepeatSetting {...propsRepeatSetting} />
                        </>
                }]}
            />
            <style>{styleAntdCustom}</style>
        </div>
    )
}
export default Timer
