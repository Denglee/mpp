<template>
    <div>

        <!--五星好评-->
        <div class="star-box">
            <div v-for="(item,index) in starInp_selected" :key="index">
                <img @click='chooseStar($event)' :data-starId='index+1' :data-starState='star_select' src='../../assets/img/icon_star_selected.png'>
            </div>
            <div v-for=" (item,index) in starInp_noSelected" :key="index+1">
                <img @click='chooseStar($event)' :data-starId='index+1' :data-starState='star_noSelect' src='../../assets/img/icon_star.png'>
            </div>
            <text class="valuate-score">{{valuateScore}}</text>
        </div>

    </div>
</template>

<script>


    export default {
        name: 'groupValuate',
        data () {
            return {
                // 星星
                num: 4,//后端给的分数,显示相应的星星
                star_selected: '',  //有颜色的 分值星星
                star_noSelected: '',//没颜色的 填充星星
                starInp_selected: 5,
                starInp_noSelected: 0,
                valuateScore:'很好',
                star_select:1,
                star_noSelect:2,

                // 评语
                commentActive:[],
                commentIsActive:false,
                valuateComment:[
                    {
                        comment:'专业',
                        checked: false,
                        id:'1'
                    },
                    {
                        comment: '很有耐心',
                        checked: false,
                        id: '2'
                    },
                    {
                        comment: '设备齐全',
                        checked: false,
                        id: '3'
                    },
                    {
                        comment: '氛围好',
                        checked: false,
                        id: '4'
                    },
                    {
                        comment: '态度好',
                        checked: false,
                        id: '5'
                    },
                    {
                        comment: '效果强',
                        checked: false,
                        id: '6'
                    },
                    {
                        comment: '准时',
                        checked: false,
                        id: '7'
                    },
                    {
                        comment: '细心',
                        checked: false,
                        id: '8'
                    },
                ],
            }
        },
        methods:{
            chooseStar: function (e) {
                let that=this;
                var starState = e.currentTarget.dataset.starstate;
                var starInp_selected;
                if (starState == 1) {
                    starInp_selected = e.currentTarget.dataset.starid;
                    console.log('aaa: ' + starInp_selected);
                } else {
                    let noSelect= Number(e.currentTarget.dataset.starid),
                        starInp_selected1=Number(that.starInp_selected),
                        starInp_selected =noSelect + starInp_selected1 ;
                    console.log('bbb:   ' + typeof (noSelect));
                    console.log('bbb:   ' + typeof (starInp_selected1));
                    console.log('bbb:   ' + starInp_selectedall);
                }

                switch (starInp_selected) {
                    case 1:
                        this.valuateScore='加油1';
                        break;
                    case 2:
                        this.valuateScore='加油2';
                        break;
                    case 3:
                        this.valuateScore='加油3';
                        break;
                    case 4:
                        this.valuateScore='加油4';
                        break;
                    case 5:
                        this.valuateScore='加油5';
                        break;
                    default:
                }

                this.starInp_selected= starInp_selected;
                this.starInp_noSelected= (5 - starInp_selected);

            },
        },
        computed: {

        },

    }


</script>

<style scoped lang="scss">

</style>