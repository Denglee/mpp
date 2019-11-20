<template>
    <div class="container">
        <topBar :title="title"  :routerName="routerName"/>



    </div>
</template>
<script>
    export default {
        name:'trainMain',
        data(){
            return {
                title:'私人教练',
                routerName:'home',
            }
        },
        methods: {

        },
        watch: {

        },
        mounted() {

        }
    }
</script>
