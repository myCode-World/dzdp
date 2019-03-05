<template>
  <div class="DzPhotograph">
    <header>
      <div class="goBack" @click="goback">取消</div>
      <div class="send">发表</div>
    </header>
    <section>
      <div class="image-item space" @click="showActionSheet()">
        <div class="image-up"></div>
      </div>
        
      <div class="txt">
        <textarea name="" id="" cols="30" rows="10" placeholder="分享我喜欢..."></textarea>
      </div>
      <div class="upload_warp">
        <div class="upload_warp_img">
          <div class="upload_warp_img_div" v-for="(item,index) in imgList">
            <!--<div class="upload_warp_img_div_top">-->
              <!--<img src="http://114.115.162.39/static/image/x.png" class="upload_warp_img_div_del" @click="fileDel(index)">-->
            <!--</div>-->
            <img :src="item.file.src" style="display: inline-block;" class="imgFile">
          </div>
          <div class="upload_warp_left" id="upload_warp_left" @click="fileClick()" v-if="this.imgList.length < 9">
            <img src="../../static/img/photoAdd.png" class="addimgs"/>
          </div>
        </div>

      </div>

      <div class="upload_warp_text" v-if="imgList.length!==0">
        <span>选中{{imgList.length}}个文件，共{{bytesToSize(this.size)}}</span>
      </div>

    </section>
    <footer>
      <div class="upload_file_box">
          <i class="iconfont icon-jiahao" @click="changeColor(0)" :class="{changeColor:color === 0}"></i>
          <input id="upload_file" type="file"  style="display: block;" accept='image/*' name="file"  @change="fileChange($event)" />
      </div>
      <i class="iconfont icon-wode" @click="changeColor(1)" :class="{changeColor:color === 1}"></i>
      <i class="iconfont icon-dingwei" @click="changeColor(2)" :class="{changeColor:color === 2}"></i>
      <i class="iconfont icon-pinglun" @click="changeColor(3)" :class="{changeColor:color === 3}"></i>
    </footer>


  </div>

</template>

<script>
    export default {
        name: "DzPhotograph",
        data(){
          return{
            color:0,
            imgList: [],
            datas: new FormData(),
            files:0,
            size:0
          }
        },
        methods:{
          goback(){
            this.$router.go(-1)
          },

          changeColor:function(i){
            this.color=i;
          },

          //调用相册&相机
          fileClick() {
            $('#upload_file').click();

          },
          //调用手机摄像头并拍照
          getImage() {
            let cmr = plus.camera.getCamera();
            cmr.captureImage(function(p) {
              plus.io.resolveLocalFileSystemURL(p, function(entry) {
                compressImage(entry.toLocalURL(),entry.name);
              }, function(e) {
                plus.nativeUI.toast("读取拍照文件错误：" + e.message);
              });
            }, function(e) {
            }, {
              filter: 'image'
            });
          },
          //从相册选择照片
          galleryImgs() {
            plus.gallery.pick(function(e) {
              let name = e.substr(e.lastIndexOf('/') + 1);
              compressImage(e,name);
            }, function(e) {
            }, {
              filter: "image"
            });
          },
          //点击事件，弹出选择摄像头和相册的选项
          showActionSheet() {
            let bts = [{
              title: "拍照"
            }, {
              title: "从相册选择"
            }];
            plus.nativeUI.actionSheet({
                cancel: "取消",
                buttons: bts
              },
              function(e) {
                if (e.index === 1) {
                  this.getImage();
                } else if (e.index === 2) {
                  this.galleryImgs();
                }
              }
            );
          },
          fileChange(el) {
            this.files=$("#upload_file").get(0).files;
            console.log(this.files.length);
            for(let i=0;i<this.files.length;i++){
              this.datas.append("file",this.files[i]);
            }
            this.show1=false;
            console.log(typeof this.files);
            console.log(this.files);
            if (!el.target.files[0].size) return;
            this.fileList(el.target);
            el.target.value = ''
          },
          fileList(fileList) {
            let files = fileList.files;
            for (let i = 0; i < files.length; i++) {
              //判断是否为文件夹
              if (files[i].type !== '') {
                this.fileAdd(files[i]);
              } else {
                //文件夹处理
                this.folders(fileList.items[i]);
              }
            }
          },
          //文件夹处理
          folders(files) {
            let _this = this;
            //判断是否为原生file
            if (files.kind) {
              files = files.webkitGetAsEntry();
            }
            files.createReader().readEntries(function (file) {
              for (let i = 0; i < file.length; i++) {
                if (file[i].isFile) {
                  _this.foldersAdd(file[i]);
                } else {
                  _this.folders(file[i]);
                }
              }
            })
          },
          fileAdd(file) {
            //总大小
            this.size = this.size + file.size;
            //判断是否为图片文件
            if (file.type.indexOf('image') === -1) {
              file.src = 'wenjian.png';
              this.imgList.push({
                file
              });
            } else {
              let reader = new FileReader();
              reader.vue = this;
              reader.readAsDataURL(file);
              reader.onload = function () {
                file.src = this.result;
                this.vue.imgList.push({
                  file
                });
              }
            }
          },
          // fileDel(index) {
          //   this.size = this.size - this.imgList[index].file.size;//总大小
          //   this.imgList.splice(index, 1);
          // },
          bytesToSize(bytes) {
            if (bytes === 0){
              return '0 B';
            }
            let k = 1000, // or 1024
              sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
              i = Math.floor(Math.log(bytes) / Math.log(k));
            return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
          },
          dragenter(el) {
            el.stopPropagation();
            el.preventDefault();
          },
          dragover(el) {
            el.stopPropagation();
            el.preventDefault();
          },
          drop(el) {
            el.stopPropagation();
            el.preventDefault();
            this.fileList(el.dataTransfer);
          },
          shows(et,tx){
            this.strut=et;
            this.txt=tx;
          },
          handleClick(){
            this.$store.commit('add')
          },
        }
    }
</script>

<style scoped>
  .DzPhotograph {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
  }
  header {
    color: #797878;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 0.2rem;
    background: #f7f5f3;
  }
  footer {
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*margin:0 0.2rem;*/
    background: #f7f5f3;
  }
  footer i{
    color: #bbb;
    font-size: 0.22rem;
  }

  .upload_warp_text span{
    display: block;
    font-size: 0.14rem;
    color: #2f2e2e;
    margin: 0 0.1rem;
  }

  #upload_file{
    opacity: 0;
    width:100%;
    height:100%;
    border-radius: 50%;
  }

  .upload_file_box {
    width: 0.35rem;
    height: 0.35rem;
    background: #f7f5f3;
    border-radius: 50%;
    position: relative;
  }
  .icon-jiahao {
    display: block;
    font-size: 0.2rem;
    position: absolute;
    right: 0.07rem;
    top: 0.06rem;
  }
  .goBack {
    font-size: 0.2rem;
  }
  .send {
    font-size: 0.18rem;
    padding: 0.03rem 0.12rem;
    border-radius: 0.2rem;
    background: #ff5c24;
    color: #fff;
  }

  .upload_warp_img_div {
    width: 1.1rem;
    height:1.1rem;
    margin-right: 0.02rem;
    margin-top: .02rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    overflow: hidden;
  }
  .addimgs {
    width: 1.1rem;
    height:1.1rem;
  }

  .upload_warp_img {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.1rem 0.15rem;
    flex-wrap: wrap;
  }
  .changeColor {
    color: #ff5c24;
  }

  .txt textarea {
    line-height: 0.3rem;
    font-size: 0.16rem;
    width: 100%;
    padding: 0;
    text-align: left;
    height: 1.2rem;
    border: 0;
    outline: none;
    text-indent: 0.15rem;

  }
  textarea::-webkit-input-placeholder{
    padding:0.19rem 0.16rem;
    font-size: 0.16rem;
    color: #7b7b7b;
  }


</style>
