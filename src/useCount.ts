import { computed, ref } from "vue"

export const useCount = () => {
    const count = ref(0)
    const nextCount = computed(() => count.value + 1)
    const addCount = ()=>{
        count.value++
    }

    return {
        count,
        nextCount,
        addCount
    }
}