import React from 'react';
import { styleComponents } from "../assets/styles";
import { Checkbox } from "antd";
import { PropsDayOfWeek } from "../assets/types";


const dayOfWeek: {day: string, index: number}[] = [
    // TODO: add translate
    {day: 'пн', index: 0},
    {day: 'вт', index: 1},
    {day: 'ср', index: 2},
    {day: 'чт', index: 3},
    {day: 'пт', index: 4},
    {day: 'сб', index: 5},
    {day: 'вс', index: 6},
]

//TODO: передавать не конфиг целиком а только масив индексов дней
const DayOfWeek = ({indexList, setDataDayOfWeek}: PropsDayOfWeek) => {

    /** generate indexes of day */
    const setIndexDay = (dayIndex: number): void => {
        let newIndexDayList: number[] = indexList && indexList.length
            ? [...indexList]
            : []
        if (indexList && indexList.length && indexList.includes(dayIndex)) {
                newIndexDayList = newIndexDayList.filter((el: number): boolean => el !== dayIndex)
        } else if (indexList && indexList.length && !indexList.includes(dayIndex)) {
            newIndexDayList.push(dayIndex)
        }
        setDataDayOfWeek(newIndexDayList)
    }

    const constructItemCheckbox: JSX.Element[] = dayOfWeek.map((itemDay: {day: string, index: number}) => {
        return (
            <div key={itemDay.index} style={styleComponents.childBlock.dayOfWeek.checkboxItem}>
                <Checkbox style={styleComponents.childBlock.dayOfWeek.checkboxElement}
                          checked={indexList.includes(itemDay.index) ?? false}
                          onChange={() => setIndexDay(itemDay.index)}
                /><p>{itemDay.day}</p>
            </div>
        )
    })

    return (
        <div style={styleComponents.childBlock.dayOfWeek.main}>
            {/* TODO: add translate */}
            <p style={styleComponents.childBlock.dayOfWeek.title}>по дням: </p>
            <div style={styleComponents.childBlock.dayOfWeek.checkboxList}>
                {constructItemCheckbox}
            </div>
        </div>
    )
}
export default DayOfWeek
