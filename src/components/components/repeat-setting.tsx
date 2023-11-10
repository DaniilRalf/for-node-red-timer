import React, { useMemo } from 'react';
import { styleComponents } from "../assets/styles";
import { RedoOutlined } from "@ant-design/icons";
import {
    PropsDayOfWeek,
    PropsDelayType,
    PropsRepeatType,
    RepeatEnum,
    RepeatIntervalTypeValueEnum
} from "../assets/types";
import { DatePicker, Input, Select } from "antd"
import dayjs, { Dayjs } from "dayjs";
import DayOfWeek from "./day-of-week";

const RepeatSetting = ({timerConf, setTimerConf}: PropsRepeatType) => {

    /** set data select REPEAT TYPE */
    const setDataRepeatType = (data: RepeatEnum): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.repeat.typeRepeat = data
        setTimerConf(newTimerConf)
    }

    /** INTERVAL====================================================================== */
    /** set data input REPEAT VALUE */
    const setDataRepeatIntervalValue = (data: string): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.repeat.dataRepeat.interval.value = Number(data)
        setTimerConf(newTimerConf)
    }
    /** set data select REPEAT VALUE TYPE */
    const setDataRepeatIntervalValueType = (data: RepeatIntervalTypeValueEnum): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.repeat.dataRepeat.interval.typeValue = data
        setTimerConf(newTimerConf)
    }
    /** INTERVAL====================================================================== */

    /** INTERVAL IN GAP=============================================================== */
    /** set data input REPEAT VALUE INTERVAL */
    const setDataRepeatIntervalInGapInt = (data: string): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.repeat.dataRepeat.intervalInGap.intervalValue = Number(data)
        setTimerConf(newTimerConf)
    }
    /** set data input REPEAT VALUE GAP */
    const setDataRepeatIntervalInGapGp = (data: Dayjs | null, index: 0 | 1): void => {
        const newTimerConf = JSON.parse(JSON.stringify(timerConf))
        newTimerConf.repeat.dataRepeat.intervalInGap.gapValue[index] = `${data?.hour()}:00:00`
        setTimerConf(newTimerConf)
    }
    const setDataDayOfWeek = (data: number[]): void => {
        console.log(data)
    }
    const disabledTime = (): Record<string, () => number[]> => {
        return {
            disabledHours: () => {
                const hours: number[] = []
                for (let i: number = 0; i < 24; i++) {
                    if (i < (dayjs(timerConf.repeat.dataRepeat.intervalInGap.gapValue[0]).hour() + 1)) {
                        hours.push(i)
                    }
                }
                return hours
            },
            disabledMinutes: () => [],
            disabledSeconds: () => [],
        }
    }
    const propsDayOfWeek = useMemo<PropsDayOfWeek>(() => (
        {timerConf, setDataDayOfWeek}
    ), [timerConf])
    /** INTERVAL IN GAP=============================================================== */


    return (
        <>

            {/** Title and select place */}
            <div style={styleComponents.childBlock.timerRepeatBlock.main}>
                <div style={styleComponents.childBlock.timerRepeatBlock.title}>
                    <p style={styleComponents.childBlock.timerRepeatBlock.icon}><RedoOutlined /></p>
                    {/* TODO: add translate */}
                    <p>Повторять</p>
                </div>
                <Select
                    defaultValue={timerConf.repeat.typeRepeat || RepeatEnum.None}
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


            <>{/** Active place */}

                {/** INTERVAL */}
                {timerConf.repeat.typeRepeat === RepeatEnum.Interval &&
                    <div style={styleComponents.childBlock.timerRepeatBlock.active[RepeatEnum.Interval]}>
                        {/* TODO: add translate */}
                        <p>Каждые </p>&nbsp;&nbsp;
                        <Input placeholder=""
                               style={styleComponents.childBlock.timerRepeatBlock.active.intervalInputValue}
                               type={'number'} min={0} step={1}
                               value={timerConf.repeat.dataRepeat?.interval?.value ?? ''}
                               onChange={(el: React.ChangeEvent<HTMLInputElement>) => setDataRepeatIntervalValue(el.target.value)}
                        />&nbsp;&nbsp;
                        <Select
                            defaultValue={timerConf.repeat.dataRepeat?.interval?.typeValue || RepeatIntervalTypeValueEnum.Sec}
                            style={styleComponents.childBlock.timerRepeatBlock.active.intervalSelectType}
                            onChange={setDataRepeatIntervalValueType}
                            options={[
                                // TODO: add translate
                                { value: RepeatIntervalTypeValueEnum.Sec, label: 'секунд' },
                                { value: RepeatIntervalTypeValueEnum.Min, label: 'минут' },
                                { value: RepeatIntervalTypeValueEnum.Hour, label: 'час(а/ов)' }
                            ]}
                        />&nbsp;&nbsp;
                    </div>
                }

                {/** INTERVAL IN GAP */}
                {timerConf.repeat.typeRepeat === RepeatEnum.IntervalInGap &&
                    <>
                        <div style={styleComponents.childBlock.timerRepeatBlock.active[RepeatEnum.IntervalInGap]}>
                            {/* TODO: add translate */}
                            <p>Каждые<dfn>(мин.)</dfn></p>&nbsp;&nbsp;
                            <Input placeholder=""
                                   style={styleComponents.childBlock.timerRepeatBlock.active.intervalInGapInputInterval}
                                   type={'number'} min={1} step={1}
                                   value={timerConf.repeat.dataRepeat?.intervalInGap?.intervalValue ?? ''}
                                   onChange={(el: React.ChangeEvent<HTMLInputElement>) => setDataRepeatIntervalInGapInt(el.target.value)}
                            />&nbsp;&nbsp;&nbsp;
                            {/* TODO: add translate */}
                            <p>между</p>&nbsp;&nbsp;
                            <DatePicker picker={'time'} format={'HH:00'}
                                        style={styleComponents.childBlock.timerRepeatBlock.active.intervalInGapInputGap}
                                        //* указываем с датой, но используем только время, поскольку компонент принимает данные только такого вида
                                        defaultValue={dayjs(`2000-01-01 ${timerConf.repeat.dataRepeat[RepeatEnum.IntervalInGap].gapValue[0]}`)}
                                        onChange={(value) => setDataRepeatIntervalInGapGp(value, 0)}
                            />&nbsp;&nbsp;&nbsp;
                            {/* TODO: add translate */}
                            <p>и</p>&nbsp;&nbsp;
                            <DatePicker picker={'time'} format={'HH:00'}
                                        style={styleComponents.childBlock.timerRepeatBlock.active.intervalInGapInputGap}
                                        //* указываем с датой, но используем только время, поскольку компонент принимает данные только такого вида
                                        defaultValue={dayjs(`2000-01-01 ${timerConf.repeat.dataRepeat[RepeatEnum.IntervalInGap].gapValue[1]}`)}
                                        onChange={(value) => setDataRepeatIntervalInGapGp(value, 1)}
                                        disabledTime={disabledTime}
                            />
                        </div>

                        <DayOfWeek {...propsDayOfWeek}/>
                    </>
                }




            </>
        </>
    )
}
export default RepeatSetting
