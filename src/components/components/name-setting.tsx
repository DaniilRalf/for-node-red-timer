import React from 'react';
import {styleComponents} from "../assets/styles";
import {TagFilled} from "@ant-design/icons";
import {Input} from "antd";
import {PropsNodeNameType} from "../assets/types";


const NameSetting = ({timerConf, setTimerConf}: PropsNodeNameType) => {

    /** set data NODE_NAME */
    const setDataNodeName = (data: string): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.nodeName = data
        setTimerConf(newTimerConf)
    }


    return (
        <div style={styleComponents.childBlock.nameBlock.main}>
            <div style={styleComponents.childBlock.nameBlock.title}>
                <p style={styleComponents.childBlock.nameBlock.icon}><TagFilled /></p>
                {/*TODO: add translate*/}
                <p>Имя</p>
            </div>
            {/*TODO: add translate*/}
            <Input placeholder="Имя"
                   style={styleComponents.childBlock.nameBlock.input}
                   value={timerConf.nodeName ?? ''}
                   onChange={(el) => setDataNodeName(el.target.value)}
            />
        </div>
    )
}
export default NameSetting
