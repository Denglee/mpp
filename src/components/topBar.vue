<template>
    <header class="header-box">
        <nav class="header-nav">
            <div class="header-top">
                <i class="iconfont icon-xiangzuo1"   @click='goBack'  :noIndex='noIndex' :data-routername="routerName"></i>
                {{title}}
            </div>
        </nav>
    </header>
</template>

<script>
  export default {
    name: "topBar",
    data() {
      return {

      }
    },
    props:{
      "title":String,
      "noIndex":Boolean,
       "routerName":String,
    },
    methods:{
      goBack(e){
          // console.log()
          let routerName=e.target.dataset.routername;
          console.log(routerName);
        this.$router.push({name:routerName});
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>

