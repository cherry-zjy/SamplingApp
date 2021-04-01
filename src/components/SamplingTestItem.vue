<template>
  <div>
    <van-dropdown-menu active-color="#1989fa" class="samplingitem">
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <div v-for="(item,i) in 10" :key="i">
    <van-cell value="类型​" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div class="name">样品编号:A20210322</div>
        <div class="title">检测结果：11</div>
        <div class="title">单位：22</div>
      </template>
      
    </van-cell>
    <van-collapse v-model="activeNames6" class="step">
          <van-collapse-item title="详细信息" name="1">
            <van-field v-model="text" readonly label="样品编号" />
            <van-field v-model="text" readonly label="样品类型" />
            <van-field v-model="text" readonly label="检测仪器" />
            <van-field readonly clickable name="picker" :value="value2" label="检测仪器" placeholder="点击选择消毒方式"
              @click="showPicker2 = true" />
            <van-popup v-model="showPicker2" position="bottom">
              <van-picker show-toolbar :columns="columns2" @confirm="onConfirm2" @cancel="showPicker2 = false" />
            </van-popup>
            <van-field v-model="text1" label="检测结果" />

            <van-field v-model="text" readonly label="质控指标" />
            <van-field readonly clickable name="datetimePicker" :value="value" label="做样日期" placeholder="点击选择做样日期"
              @click="showPicker = true" />
            <van-popup v-model="showPicker" position="bottom">
              <van-datetime-picker v-model="currentDate" type="datetime" title="选择做样日期" :min-date="minDate"
                :max-date="maxDate" @confirm="onConfirm" @cancel="showPicker = false" />
            </van-popup>
            <van-field readonly clickable name="picker" :value="value3" label="做样人" placeholder="点击选择做样人"
              @click="showPicker3 = true" />
            <van-popup v-model="showPicker3" position="bottom">
              <van-picker show-toolbar :columns="columns3" @confirm="onConfirm3" @cancel="showPicker3 = false" />
            </van-popup>
            <van-field v-model="text" readonly label="判定结果" />
            <van-field v-model="text" readonly label="方法标准" />
          </van-collapse-item>
        </van-collapse>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        option1: [{
            text: '大肠埃希氏菌',
            value: 0
          },
          {
            text: '贾第鞭毛虫',
            value: 1
          },
          {
            text: '隐孢子虫',
            value: 2
          },
        ],
        columns: ['1', '2', '3', '4'],
        columns1: ['5', '6', '7', '8'],
        columns2: ['9', '10', '11', '12'],

        showPicker2: false,
        showPicker: false,
        showPicker3: false,
        value2: '',
        text1: '',
        text: '',
        value: '',
        value3: '',
        columns3: ['郑嘉怡', '李贲彦', '陈子阳'],
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
        activeNames6: [1],
      }
    },
    components: {},
    mounted() {
      let d = new Date()
      this.value = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d
        .getMinutes() + ':' + d.getSeconds();
      // this.getInfo()
    },
    destroyed() {

    },
    watch: {},
    methods: {
      onConfirm(value, index) {
        Toast(`当前值：${value}, 当前索引：${index}`);
      },
      onConfirm1(value, index) {
        Toast(`当前值：${value}, 当前索引：${index}`);
      },
      onConfirm2(value, index) {
        Toast(`当前值：${value}, 当前索引：${index}`);
      },
      onConfirm3() {

      },
      getInfo() {
        this.$http
          .get(
            "/gsxmot/getSampleGets?apikey=08dd1ed4d789&language=zh-CHS&tenant-id=10000&SampleID=07b46f21-f848-4cb1-b3c8-c79e7deb5bde", {
              // params:{
              //   SampleID:'07b46f21-f848-4cb1-b3c8-c79e7deb5bde'
              // }
            })
          .then(
            function (response) {

            }.bind(this)
          )
      },
      navto(path) {
        this.$router.push(path);
      },
      onClickLeft() {

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
