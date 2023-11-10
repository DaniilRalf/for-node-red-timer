import React from 'react';
import {styleComponents} from "../assets/styles";
import {FieldTimeOutlined} from "@ant-design/icons";
import {Checkbox, Input} from "antd";
import {PropsDelayType} from "../assets/types";
import {CheckboxChangeEvent} from "antd/es/checkbox";

const DelaySetting = ({timerConf, setTimerConf}: PropsDelayType) => {

    /** set data DELAY VALUE */
    const setDataDelayValue = (data: string): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.delay.delayValue = Number(data)
        setTimerConf(newTimerConf)
    }

    /** set data DELAY IS ACTIVE */
    const setDataDelayActive = (data: CheckboxChangeEvent): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.delay.isDelay = data.target.checked
        setTimerConf(newTimerConf)
    }


    return (
        <div style={styleComponents.childBlock.timerDelayBlock.main}>

            <div style={styleComponents.childBlock.timerDelayBlock.title}>
                <p style={styleComponents.childBlock.timerDelayBlock.icon}><FieldTimeOutlined /></p>
                {/*TODO: add translate*/}
                <p>Задержка первого запуска<dfn>(сек.)</dfn></p>
            </div>

            <div style={styleComponents.childBlock.timerDelayBlock.active}>
                <Checkbox style={styleComponents.childBlock.timerDelayBlock.checkbox}
                          checked={timerConf.delay.isDelay}
                          onChange={(el: CheckboxChangeEvent) => setDataDelayActive(el)}
                />
                <Input placeholder=""
                       style={styleComponents.childBlock.timerDelayBlock.input}
                       type={'number'} min={0} step={1}
                       disabled={!timerConf.delay.isDelay}
                       value={timerConf.delay.delayValue ?? ''}
                       onChange={(el: React.ChangeEvent<HTMLInputElement>) => setDataDelayValue(el.target.value)}
                />
            </div>

        </div>
    )
}
export default DelaySetting
