<template>
    <div>
        <div class='userHeader-bg'></div>
        <div class="main">
            <header class="user-header">
                <van-row type="flex" class="userHead-box">
                    <van-col span="6">
                        <img class="user-header" src="../../assets/img/icon_vipGood1.png" alt="">
                    </van-col>
                    <van-col span="12">
                        <div class="user-name">李登</div>
                        <div class="user-tel">17688829466</div>
                    </van-col>
                    <van-col span="4"></van-col>
                </van-row>

            </header>

            <ul class="user-link">
                <li >
                    <van-cell
                            v-for="(item,index) in userLink1" :key="index"
                            is-link
                           :title="item.text"
                           :to="item.url"
                           :icon="item.icon" />
                </li>
                <li >
                    <van-cell
                            v-for="(item,index) in userLink2" :key="index"
                            is-link
                            :title="item.text"
                            :to="item.url"
                            :icon="item.icon" />
                </li>
                <li >
                    <van-cell
                            v-for="(item,index) in userLink3" :key="index"
                            is-link
                            :title="item.text"
                            :to="item.url"
                            :icon="item.icon" />
                </li>
            </ul>


        </div>

        <bottomBar/>
    </div>
</template>

<script>
    export default {
        name: "userMain",
        data() {
            return {
                userLink1:[
                    {
                        url: {name: 'drillMain',},
                        text:'我的预约',
                        icon:require('../../assets/icon/icon_myOrder.png'),
                        type:1,
                    },
                    {
                        url: {name: 'drillMain',},
                        text: '我的会籍',
                        icon: require('@/assets/icon/icon_myMembership.png'),
                        type: 2,
                    }
                ],
                userLink2: [
                    {
                        url: {name: 'drillMain',},
                        text: '我的团课',
                        icon: require('@/assets/icon/icon_myGroup.png'),
                        type: 3,
                    },
                    {
                        url: {name: 'drillMain',},
                        text: '我的私教课',
                        icon: require('@/assets/icon/icon_myTrainer.png'),
                        type: 4,
                    },
                    {
                        url: {name: 'drillMain',},
                        text: '我的训练营',
                        icon: require('@/assets/icon/icon_myCamp.png'),
                        type: 5,
                    }
                ],

                userLink3: [
                    {
                        url: {name: 'drillMain',},
                        text: '培训购物车',
                        icon:  require('@/assets/icon/icon_myShopCar.png'),
                        type: 6,
                    },
                    {
                        url: {name: 'drillMain',},
                        text: '我的培训',
                        icon:  require('@/assets/icon/icon_myDdrill.png'),
                        type: 7,
                    },
                ],
            }
        },
        methods: {},
        created() {

        },
    }
</script>

<style scoped lang="scss">

</style>