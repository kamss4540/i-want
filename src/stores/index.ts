import { defineStore } from 'pinia'
import { Names } from '@/stores/store-name'

export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            current: 1,
            name: 'test1',
        }
    },
    // computed 修饰一些值
    getters: {

    },
    // methods
    actions: {
        setCurrent (val: number) {
            this.current = val
        }
    }
})