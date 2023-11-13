export interface TimerConfInterface {
    isOpen: boolean,
    nodeName: string,
    delay: {
        isDelay: boolean,
        delayValue: number | null
    },
    repeat: {
        typeRepeat: RepeatEnum
        dataRepeat: {
            [RepeatEnum.Interval]: {
                value: number,
                typeValue: RepeatIntervalTypeValueEnum
            },
            [RepeatEnum.IntervalInGap]: {
                intervalValue: number,
                gapValue: [string, string],
                daysValue: number[]
            },
            [RepeatEnum.ConcreteTime]: {
                concreteTimeValue: string,
                daysValue: number[]
            }
        }
    }
}

export enum RepeatEnum {
    None = 'none',
    Interval = 'interval',
    IntervalInGap = 'intervalInGap',
    ConcreteTime = 'concreteTime',
}

export enum RepeatIntervalTypeValueEnum {
    Sec = 'sec',
    Min = 'min',
    Hour = 'hour',
}

/** PROPS INTERFACE============================== */
export type PropsNodeNameType = {
    timerConf: TimerConfInterface,
    setTimerConf: any
}
export type PropsDelayType = PropsNodeNameType
export type PropsRepeatType = PropsNodeNameType
export type PropsDayOfWeek = {
    indexList: number[],
    setDataDayOfWeek: any
}
