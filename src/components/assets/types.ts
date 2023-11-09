export interface TimerConfInterface {
    isOpen: boolean,
    nodeName: string,
    delay: {
        isDelay: boolean,
        delayValue: number | null
    },
    repeat: {
        typeRepeat: RepeatEnum
    }
}

export enum RepeatEnum {
    None = 'none',
    Interval = 'interval',
    IntervalInGap = 'interval_in_gap',
    ConcreteTime = 'concrete_time',
}

/** PROPS INTERFACE============================== */
export type PropsNodeNameType = {
    timerConf: TimerConfInterface,
    setTimerConf: any
}
export type PropsDelayType = PropsNodeNameType
export type PropsRepeatType = PropsNodeNameType
