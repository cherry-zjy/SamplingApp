<template>
  <div>
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
      <van-datetime-picker v-model="currentDate" type="datetime" title="选择做样日期" :min-date="minDate" :max-date="maxDate"
        @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <van-field readonly clickable name="picker" :value="value3" label="做样人" placeholder="点击选择做样人"
      @click="showPicker3 = true" />
    <van-popup v-model="showPicker3" position="bottom">
      <van-picker show-toolbar :columns="columns3" @confirm="onConfirm3" @cancel="showPicker3 = false" />
    </van-popup>
    <van-field v-model="text" readonly label="判定结果" />
    <van-field v-model="text" readonly label="方法标准" />
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        showPicker2:false,
        showPicker:false,
        showPicker3:false,
        value2:'',
        text1:'',
        value:'',
        value3:'',
        columns2: ['1', '2', '3'],
        columns3:['郑嘉怡','李贲彦','陈子阳'],
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
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
      onConfirm(value, index) {
        Toast(`当前值：${value}, 当前索引：${index}`);
      },
      onConfirm1(value, index) {
        Toast(`当前值：${value}, 当前索引：${index}`);
      },
      onConfirm2(value, index) {
        Toast(`当前值：${value}, 当前索引：${index}`);
      },
      getInfo(){
        this.$http
          .get("/gsxmot/getSampleGets?apikey=08dd1ed4d789&language=zh-CHS&tenant-id=10000&SampleID=07b46f21-f848-4cb1-b3c8-c79e7deb5bde", {
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
