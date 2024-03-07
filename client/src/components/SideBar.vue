<template>
    <div>
        <h3>Data Stone.<b>hub</b></h3>
        <ul>
            <li v-for="(option, index) in options" :key="index" @click="redirectTo(option.link)">
                <Icon :name="option.name" />
                <span>{{ option.option }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from './Icon.vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    components: {
        Icon
    },
    setup() {
        const router = useRouter()

        const redirectTo = (link) => {
            router.push(link)
        }

        return {
            redirectTo
        }
    }
})
</script>