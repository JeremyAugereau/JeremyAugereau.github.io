import { ref} from 'vue'
const score = ref(0)
export function useScore() {
    function add(point : number) {
        console.log('add'+point)
        score.value += point
    }
    return { score,add }
}