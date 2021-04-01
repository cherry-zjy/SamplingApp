<template>
  <div>
    <van-nav-bar title="我的采样计划" left-text="" left-arrow @click-left="onClickLeft" />
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <van-tabs v-model="active">
      <van-tab title="未完成">
        <van-cell class="plan" value="2021-01-01​" is-link v-for="(item,i) in Detail.completed" :key="i" @click="navto('/SamplingRecord/'+item.samplingpointid)">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="name">{{item.samplingpointname}}</div>
            <div class="title">剩  {{item.planquantity - item.finishedquantity}}  个，共  {{item.planquantity}}  个  采样点</div>
            <div class="title">负责人:{{item.principal}}</div>
            <div class="title">所属计划:{{item.samplingplanname}}</div>
            <div class="title">所属任务:{{item.taskname}}</div>
          </template>
        </van-cell>
      </van-tab>
      <van-tab title="已完成">
        <van-cell class="plan" value="2021-01-01​" is-link v-for="(item,i) in Detail.uncompleted" :key="i" @click="navto('/SamplingRecord/1')">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="name">{{item.samplingpointname}}</div>
            <div class="title">剩  {{item.planquantity - item.finishedquantity}}  个，共  {{item.planquantity}}  个  采样点</div>
            <div class="title">负责人:{{item.principal}}</div>
            <div class="title">所属计划:{{item.samplingplanname}}</div>
            <div class="title">所属任务:{{item.taskname}}</div>
          </template>
        </van-cell>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value:'',
        active:0,
        Detail:[]
      }
    },
    components: {},
    mounted() {
      this.getInfo()
    },
    destroyed() {

    },
    watch: {},
    methods: {
      getInfo(){
        this.$http
          .get("/wqlmpt/getMySamplingTask", {
            // params:{
            //   SampleID:'07b46f21-f848-4cb1-b3c8-c79e7deb5bde'
            // }
          })
          .then(
            function (res) {
              if(res.data.code == 200){
                this.Detail = res.data.data
              }
            }.bind(this)
          )
      },
      navto(path) {
        this.$router.push(path);
      },
      onClickLeft(){

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.name
  font-size 16px
  color #000
.title 
  color #969799
</style>
