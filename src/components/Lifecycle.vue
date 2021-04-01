<template>
  <div>
      <van-sticky>
    <div class="liftcycle">
      <!-- 使用 title 插槽来自定义标题 -->
        <div class="heard">
            <div class="name">{{Detail.samplecode}}</div>
            <div class="state">库中</div>
        </div>
        <van-row gutter="20">
          <van-col span="12">
            <div class="title">容器：{{Detail.containername}}</div>
          </van-col>
          <van-col span="12">
            <div class="title">保存剂:{{Detail.conservant}}</div>
          </van-col>
          <van-col span="24">
            <div class="title">采样点:{{Detail.samplingpointname}}</div>
          </van-col>
          <van-col span="12">
            <div class="title">采样人:{{Detail.sampler}}</div>
          </van-col>
        </van-row>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="检测项目" name="1">
              <div class="title">氟化物</div>
              <div class="title">硝酸盐</div>
          </van-collapse-item>
        </van-collapse>
    </div>
      </van-sticky>
    <van-steps direction="vertical" :active="0">
  <van-step>
    <h3>采样</h3>
    <p>记录日期：2016-07-12 12:40</p>
    <p class="small">记录编号：1231231221</p>
    <van-collapse v-model="activeNames1" class="step">
        <van-collapse-item title="详细信息" name="1">
            <div class="title">氟化物</div>
            <div class="title">硝酸盐</div>
        </van-collapse-item>
    </van-collapse>
    
  </van-step>
  <van-step>
    <h3>送样</h3>
    <p>2016-07-11 10:00</p>
    <van-collapse v-model="activeNames2" class="step">
        <van-collapse-item title="详细信息" name="1">
            <div class="title">氟化物</div>
            <div class="title">硝酸盐</div>
        </van-collapse-item>
    </van-collapse>
  </van-step>
  <van-step>
    <h3>接样</h3>
    <p>2016-07-10 09:30</p>
    <van-collapse v-model="activeNames3" class="step">
        <van-collapse-item title="详细信息" name="1">
            <div class="title">氟化物</div>
            <div class="title">硝酸盐</div>
        </van-collapse-item>
    </van-collapse>
  </van-step>
  <van-step>
    <h3>分发</h3>
    <p>2016-07-10 09:30</p>
    <van-collapse v-model="activeNames4" class="step">
        <van-collapse-item title="详细信息" name="1">
            <div class="title">氟化物</div>
            <div class="title">硝酸盐</div>
        </van-collapse-item>
    </van-collapse>
  </van-step>
  <van-step>
    <h3>领用</h3>
    <p>2016-07-10 09:30</p>
    <van-collapse v-model="activeNames5" class="step">
        <van-collapse-item title="详细信息" name="1">
            <div class="title">氟化物</div>
            <div class="title">硝酸盐</div>
        </van-collapse-item>
    </van-collapse>
  </van-step>
  <van-step>
    <h3>销毁</h3>
    <p>2016-07-10 09:30</p>
    <van-collapse v-model="activeNames6" class="step">
        <van-collapse-item title="详细信息" name="1">
            <div class="title">氟化物</div>
            <div class="title">硝酸盐</div>
        </van-collapse-item>
    </van-collapse>
  </van-step>
</van-steps>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        activeNames: [1],
        activeNames1:[1],
        activeNames2:[1],
        activeNames3:[1],
        activeNames4:[1],
        activeNames5:[1],
        activeNames6:[1],
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
      navto(path) {
        this.$router.push(path);
      },
      getInfo() {
        let samplingpointid = window.location.href.split('Lifecycle/')[1]
        this.$http
          .get("/wqlmot/getSampleInfo", {
            params:{
              SampleID:samplingpointid
            }
          })
          .then(
            function (res) {
              if (res.data.code == 200) {
                this.Detail = res.data.data[0]
              }
            }.bind(this)
          )
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.liftcycle
    padding: 15px 20px;
    background-color #fff
.heard
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    .name
        color #000
    .state
        color #1989fa
.title 
  color #969799
  font-size 14px
  line-height 3
.small
  color #969799
</style>
