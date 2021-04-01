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
      <van-cell title="采样点名称" :value="samplingpoint.samplingplanname" />
      <van-cell title="采样点地址" :value="samplingpoint.samplingplanname" />
      <van-cell title="样品编号" :value="samplingpoint.samplecode" />
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
    <van-row class="table-cell" v-for="(item,i) in Detail" :key="i">
      <van-col span="6">{{item.samplecode}}</van-col>
      <van-col span="6">{{item.containername}}</van-col>
      <van-col span="3">{{item.iscold == 1?'是':'否'}}</van-col>
      <van-col span="9">
        {{item.conservant}}
      </van-col>
    </van-row>
    <van-sidebar>
      <van-sidebar-item title="采样记录" />
    </van-sidebar>
    <van-field readonly clickable name="datetimePicker" :value="value" label="采样时间" placeholder="点击选择时间"
      @click="showPicker = true" />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker v-model="currentDate" type="datetime" title="选择采样时间" :min-date="minDate" :max-date="maxDate"
        @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <van-field readonly clickable name="datetimePicker" :value="value" label="排水时间" placeholder="点击选择时间"
      @click="showPicker = true" />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker v-model="currentDate" type="datetime" title="选择排水时间" :min-date="minDate" :max-date="maxDate"
        @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <van-field readonly clickable name="picker" :value="value1" label="天气" placeholder="点击选择天气"
      @click="showPicker1 = true" />
    <van-popup v-model="showPicker1" position="bottom">
      <van-picker show-toolbar :columns="columns" @confirm="onConfirm1" @cancel="showPicker1 = false" />
    </van-popup>
    <van-field readonly clickable name="picker" :value="value2" label="消毒方式" placeholder="点击消毒方式"
      @click="showPicker2 = true" />
    <van-popup v-model="showPicker2" position="bottom">
      <van-picker show-toolbar :columns="columns2" @confirm="onConfirm2" @cancel="showPicker2 = false" />
    </van-popup>
    <van-field readonly clickable name="picker" :value="value3" label="特殊情况" placeholder="点击特殊情况"
      @click="showPicker3 = true" />
    <van-popup v-model="showPicker3" position="bottom">
      <van-picker show-toolbar :columns="columns3" @confirm="onConfirm3" @cancel="showPicker3 = false" />
    </van-popup>
    <div class="photo van-cell van-field">
      <div class="van-cell__title van-field__label"><span>拍照上传</span></div>
      <div class="van-cell__value van-field__value">
        <div class="van-field__body">
          <div class="van-field__control van-field__control--custom">
            <div class="van-uploader" @click="ccworkBridgeApiCallback()">
              <div class="van-uploader__wrapper">
                <div class="van-uploader__preview" v-for="(item,i) in File" :key="i">
                  <div class="van-image van-uploader__preview-image">
                    <img :src="item"
                      class="van-image__img" style="object-fit: cover;"></div>
                  <div class="van-uploader__preview-delete"><i
                      class="van-icon van-icon-cross van-uploader__preview-delete-icon">
                      <!----></i></div>
                </div>
                <div class="van-uploader__upload"><i class="van-icon van-icon-photograph van-uploader__upload-icon">
                  </i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-uploader class="photo" :file-list="fileList" />
    <div class="btnbox">
      <van-button type="info" round class="nextstep" @click="next()">下一步</van-button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        File:[],
        fileList: [{
            url: 'https://img.yzcdn.cn/vant/leaf.jpg',
            name: '图片1',
          },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          {
            url: 'http://iph.href.lu/60x60?text=default',
            name: '图片2',
            isImage: true,
            deletable: true,
          },
        ],
        active: 0,
        uploader: [],
        activeNames: ['1'],
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
        showPicker: false,
        value: '',
        value1: '晴',
        value2: '灼烧',
        value3: '无',
        showPicker1: false,
        columns: ['晴', '雨', '阴'],
        columns2: ['灼烧', '直接消毒', '无'],
        columns3: ['高浊', '油污', '异色', '其他', '无'],
        showPicker2: false,
        showPicker3: false,
        samplingpointid: '',
        samplingpoint: [],
        Detail: [],
      }
    },
    components: {},
    mounted() {
      let d = new Date()
      this.value = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d
        .getMinutes() + ':' + d.getSeconds();
      this.getInfo()

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
        this.$router.push('/SamplingTesting/1');
      },
      getInfo() {
        this.samplingpointid = window.location.href.split('SamplingRecord/')[1]
        this.$http
          .get("/wqlmpt/getMySamplingTask", {
            // params:{
            //   SampleID:'07b46f21-f848-4cb1-b3c8-c79e7deb5bde'
            // }
          })
          .then(
            function (res) {
              if (res.data.code == 200) {
                this.Detail = res.data.data.completed.concat(res.data.data.uncompleted)
                console.log(this.Detail)
                let getid = false
                for (let i = 0; i < res.data.data.completed.length; i++) {
                  if (res.data.data.completed[i].samplingpointid == this.samplingpointid) {
                    this.samplingpoint = res.data.data.completed[i]
                    console.log(this.samplingpoint)
                    getid = true
                  }
                }
                if (!getid) {
                  for (let i = 0; i < res.data.data.uncompleted.length; i++) {
                    if (res.data.data.uncompleted[i].samplingpointid == this.samplingpointid) {
                      this.samplingpoint = res.data.data.uncompleted[i]
                    }
                  }
                }
              }
            }.bind(this)
          )
      },
      ccworkBridgeApiCallback() {
        return new Promise((resolve, reject) => {
          ccworkBridge.ccworkGetPicsFromCameraAndAlbum({
            quality: 'mid',
            mode: 'camera',
            mark: '', //水印
          }, data => {
            // alert(data)
            let status = data['status']
            let msg = data['errormessage']
            let res = data['result']
            let url = 'data:image/jpg;base64,' + res
            this.File.push(url)
            if (typeof res == 'string') {
              res = Array(res)
            }
            if (status == 1 || status == true) {
              resolve(res)
              return
            }
            reject(msg)
          })
        })
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
.photo
  padding-bottom 65px
</style>
