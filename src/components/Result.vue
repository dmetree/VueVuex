<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter(){
                return this.$store.state.counter * 2;
                // Can be replaced with the following line to make code more centralized
                // return this.$store.getters.doubleCounter;
            }
        }
    }
</script>