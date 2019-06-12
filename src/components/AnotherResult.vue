<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
                ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }
        // This one is an old way of writing it
        // computed: {
        //     counter(){
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks(){
        //         return this.$store.getters.stringCounter;
        //     }
        // }
    }
</script>