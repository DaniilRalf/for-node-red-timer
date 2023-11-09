import React from 'react';
import {styleComponents} from "../assets/styles";
import {RedoOutlined} from "@ant-design/icons";
import {PropsRepeatType, RepeatEnum} from "../assets/types";
import {Select} from "antd"

const RepeatSetting = ({timerConf, setTimerConf}: PropsRepeatType) => {

    /** set data REPEAT TYPE */
    const setDataRepeatType = (data: RepeatEnum): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.repeat.typeRepeat = data
        setTimerConf(newTimerConf)
    }

    return (
        <div style={styleComponents.childBlock.timerRepeatBlock.main}>

            <div style={styleComponents.childBlock.timerRepeatBlock.title}>
                <p style={styleComponents.childBlock.timerRepeatBlock.icon}><RedoOutlined /></p>
                {/*TODO: add translate*/}
                <p>Повторять</p>
            </div>

            <Select
                defaultValue={timerConf.repeat.typeRepeat}
                style={styleComponents.childBlock.timerRepeatBlock.select}
                onChange={setDataRepeatType}
                options={[
                    // TODO: add translate
                    { value: RepeatEnum.None, label: 'нет' },
                    { value: RepeatEnum.Interval, label: 'с интервалом' },
                    { value: RepeatEnum.IntervalInGap, label: 'с интервалом в промежутке' },
                    { value: RepeatEnum.ConcreteTime, label: 'в определенное время'},
                ]}
            />

        </div>
    )
}
export default RepeatSetting
