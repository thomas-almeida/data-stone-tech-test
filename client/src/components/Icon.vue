<template>
    <ion-icon :name="name"></ion-icon>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: {
            type: String
        }
    }
});
</script>
