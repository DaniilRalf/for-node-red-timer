export interface TimerConfInterface {
    isOpen: boolean,
    nodeName: string,
    delay: {
        isDelay: boolean,
        delayValue: number | null
    }
}

/** PROPS INTERFACE============================== */
export type PropsNodeNameType = {
    timerConf: TimerConfInterface,
    setTimerConf: any
}
export type PropsDelayType = PropsNodeNameType
