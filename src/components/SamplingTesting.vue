<template>
  <div>
    <van-nav-bar title="我的采样任务" left-text="" left-arrow @click-left="onClickLeft" />
    <van-steps :active="active">
      <van-step>采样记录</van-step>
      <van-step>现场检测</van-step>
      <van-step>无</van-step>
      <van-step>无</van-step>
    </van-steps>
    <van-sidebar>
      <van-sidebar-item title="采样点信息" />
    </van-sidebar>
    <van-cell-group>
      <van-cell title="采样点名称" value="白（34）" />
      <van-cell title="采样点地址" value="广州市天河区白支路456号南向100米" />
      <van-cell title="样品编号" value="A-202101001" />
    </van-cell-group>
    <van-sidebar>
      <van-sidebar-item title="样品信息" />
    </van-sidebar>
    <van-row class="table">
      <van-col span="6">样品编码</van-col>
      <van-col span="6">容器信息</van-col>
      <van-col span="3">冷藏</van-col>
      <van-col span="9">保存剂</van-col>
    </van-row>
    <van-row class="table-cell" v-for="(item,i) in 3" :key="i">
      <van-col span="6">A-202101001-01</van-col>
      <van-col span="6">【4】100ml玻璃瓶</van-col>
      <van-col span="3">是</van-col>
      <van-col span="9">
        采样后加入0.025mL乙二胺溶液
      </van-col>
    </van-row>
    <van-sidebar>
      <van-sidebar-item title="采样记录" />
    </van-sidebar>
    <van-tabs v-model="active1" class="tab">
      <van-tab title="余氯">
        <van-field v-model="username" name="检测数据" label="检测数据" placeholder="请输入检测数据" />
        <van-field v-model="username" name="检测单位" label="检测单位" placeholder="请输入检测单位" />
      </van-tab>
      <van-tab title="PH">
        <van-field v-model="username" name="检测数据" label="检测数据" placeholder="请输入检测数据" />
        <van-field v-model="username" name="检测单位" label="检测单位" placeholder="请输入检测单位" />
      </van-tab>
      <van-tab title="浊度">
        <van-field v-model="data" name="检测数据" label="检测数据" placeholder="请输入检测数据" />
        <van-field v-model="danwei" name="检测单位" label="检测单位" placeholder="请输入检测单位" />
      </van-tab>
    </van-tabs>
    <div class="btnbox">
  <van-button type="info" round class="nextstep" @click="next()">确认完成</van-button>
</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 1,
        data: '',
        danwei: '',
        active1: 0
      }
    },
    components: {},
    mounted() {
      let d = new Date()
      this.value = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d
        .getMinutes() + ':' + d.getSeconds();
    },
    destroyed() {

    },
    watch: {},
    methods: {
      onClickLeft() {

      },
      onConfirm(d) {
        let datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d
          .getMinutes() + ':' + d.getSeconds();
        this.showPicker = false;
        this.value = datetime
      },
      onConfirm1(value) {
        this.value1 = value;
        this.showPicker1 = false;
      },
      onConfirm2(value) {
        this.value2 = value;
        this.showPicker2 = false;
      },
      onConfirm3(value) {
        this.value3 = value;
        this.showPicker3 = false;
      },
      next() {
        this.$router.push('/SamplingPlanCard/:id');
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.table
    text-align center
.table-cell
    margin 20px 0
    text-align center 
    font-size 12px
    color #969799
    padding: 0 10px;
.btnbox
  width 100%
  position: fixed;
  background-color #fff
  bottom: 0;
  .nextstep
    width: calc(100% - 20px);
    margin 10px
.tab
  padding-bottom 65px
</style>
