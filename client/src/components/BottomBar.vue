<template>
    <div>
        <ul>
            <li v-for="(option, index) in options" :key="index" @click="redirectTo(option.link)">
                <Icon :name="option.name" />
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