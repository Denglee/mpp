<template>
    <div>

        <van-tabs v-model="active">
            <van-tab title="次卡">
                <div>
                    <div></div>
                </div>
            </van-tab>
            <van-tab title="期限卡">内容 2</van-tab>
        </van-tabs>
        <bottomBar/>
    </div>
</template>

<script>
    export default {
        name: "cardMain",
        data() {
            return {
                active:1,

            }
        },
        methods: {

        },
        created() {

        },
    }
</script>

<style scoped lang="scss">

</style>