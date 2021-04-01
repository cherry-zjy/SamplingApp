<template>
  <div>
    <img :src="aa"/>
    <div class="photo van-cell van-field">
      <div class="van-cell__title van-field__label"><span>拍照上传</span></div>
      <div class="van-cell__value van-field__value">
        <div class="van-field__body">
          <div class="van-field__control van-field__control--custom">
            <div class="van-uploader" @click="getphoto()">
              <div class="van-uploader__wrapper">
                <div class="van-uploader__upload"><i class="van-icon van-icon-photograph van-uploader__upload-icon">
                    <!----></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ccworkBridge from 'ccwork-jsbridge';
  export default {
    data() {
      return {
       aa:[],
       userInfo:[]
      }
    },
    components: {},
    mounted() {
    //  this.copyText(this.$refs.qq)
    },
    watch: {},
    methods: {
      getphoto(){
        return new Promise((resolve, reject) => {
        ccworkBridge.ccworkGetPicsFromCameraAndAlbum({ 
            quality:'mid',
            mode:'camera',
            mark:'',//水印
        },data => {
          alert(data)
          
            let status = data['status']
            let msg = data['errormessage']
            let res = data['result']
            this.aa = 'data:image/jpg;base64,'+res
            if(typeof res =='string'){
                res = Array(res)
            }
            if(status == 1 || status == true){
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
