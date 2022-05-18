<template>
  <div class="ird-design-upload">
    <el-upload
      :class="value ? 'avatar-uploader avatar-success' : 'avatar-uploader'"
      :action="action"
      :headers="{ Authentication: token }"
      :show-file-list="false"
      :before-upload="beforeAvatarUpload"
      :on-success="handleAvatarSuccess"
    >
      <i v-if="!value" class="el-icon-plus avatar-uploader-icon" />

      <template v-else>
        <template v-if="(rule.format || '').includes('video')">
          <video class="avatar" controls :src="value" />
          <i
            class="el-icon-delete"
            style="left: 50%; transform: translate(-50%, -50%)"
            @click.stop="avatarRemove"
          />
        </template>
        <template v-else>
          <img :src="value" class="avatar" alt="图片" />
          <div class="icon-control">
            <i class="el-icon-zoom-in" @click.stop="avatarPreview" />
            <i class="el-icon-delete" @click.stop="avatarRemove" />
          </div>
        </template>
      </template>
    </el-upload>
    <el-dialog :visible.sync="dialogImgVisible">
      <img width="300" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
  import { Dialog, Upload, Message } from "element-ui";

  const defaultRule = {
    lt: undefined,
    format: "image/jpeg,image/jpg,image/png,image/gif",
    size: { width: undefined, height: undefined },
    duration: [0],
    thre: 0, // 尺寸误差范围
  };
  export default {
    name: "IrdUpload",
    components: {
      [Dialog.name]: Dialog,
      [Upload.name]: Upload,
    },
    data() {
      return {
        dialogImgVisible: false,
        dialogImageUrl: undefined,
      };
    },
    props: {
      value: String,
      action: String, // 请求地址
      token: {
        type: String,
        default: localStorage.getItem("token"),
      },
      // prop: String, //当前数据集合的key
      // 图片大小、格式、尺寸
      rule: {
        type: Object,
        default() {
          return { ...defaultRule };
        },
      },
    },
    methods: {
      // 上传校验
      beforeAvatarUpload(file) {
        const rule = {
          ...defaultRule,
          ...this.rule,
        };
        /*
         * thre 阈值 视频的尺寸为一个区间
         * */
        const { lt, format, size = {}, duration, thre } = rule;
        const isJPG = format.split(",").includes(file.type);
        const isLt = lt ? Math.round(file.size / 1024) < lt : true;

        const { width, height } = size;
        let isSize = true;

        if (rule.format.includes("video")) {
          let [smallTime, longTime] = duration;
          let isDura = new Promise((resolve, reject) => {
            const videoUrl = URL.createObjectURL(file);
            const videoObj = document.createElement("video");
            videoObj.onloadedmetadata = function() {
              URL.revokeObjectURL(videoUrl);

              function check(str, m, n) {
                let re = /(\d+)/g;
                while (re.exec(str)) {
                  let int = parseInt(RegExp.$1);
                  if (int < m || int > n) return false;
                }
                return true;
              }

              console.log(
                "宽:" + videoObj.videoWidth,
                "长:" + videoObj.videoHeight,
                "时长：" + videoObj.duration,
              );

              if (
                !(
                  check(videoObj.videoWidth, width - thre, width + thre) &&
                  check(videoObj.videoHeight, height - thre, height + thre)
                )
              ) {
                reject({
                  ...videoObj,
                  message: `上传视频尺寸不符合，只能是${width}*${height}!`,
                });
              } else if (smallTime || longTime) {
                if (
                  !(
                    Math.round(videoObj.duration) <= longTime &&
                    Math.round(videoObj.duration) >= smallTime
                  )
                ) {
                  reject({
                    ...videoObj,
                    message: `上传视频时长不能超过${longTime}秒,不能小于${smallTime}秒！`,
                  });
                } else if (!(Math.round(videoObj.duration) >= smallTime)) {
                  reject({
                    ...videoObj,
                    message: `上传视频时长不能小于${smallTime}秒！`,
                  });
                }
              }
              resolve();
            };
            videoObj.src = videoUrl;
            videoObj.load();
          }).then(
            () => {
              return file;
            },
            (err) => {
              Message.error(err.message);
              return Promise.reject();
            },
          );

          if (!isJPG) Message.error(`上传视频只能是${format}格式!`);
          setTimeout(() => {
            // 防止两个同时弹出
            if (!isLt) Message.error(`上传视频大小不能超过${lt}K!`);
          }, 0);

          return isJPG && isLt && isDura;
        } else {
          if (width || height) {
            isSize = new Promise(function(resolve, reject) {
              let _URL = window.URL || window.webkitURL;
              let img = new Image();
              img.onload = function() {
                let valid = img.width === width && img.height === height;
                valid ? resolve() : reject(img);
              };
              img.src = _URL.createObjectURL(file);
            }).then(
              () => {
                return file;
              },
              (err) => {
                console.log("宽:" + err.width, "长:" + err.height);
                Message.error(`上传的图片必须是${width}*${height}!`);
                return Promise.reject();
              },
            );
          }
          if (!isJPG) Message.error(`上传图片只能是${format}格式!`);
          setTimeout(() => {
            // 防止两个同时弹出
            if (!isLt) Message.error(`上传图片大小不能超过${lt}K!`);
          }, 0);

          return isJPG && isLt && isSize;
        }
      },
      // 上传成功
      handleAvatarSuccess(res) {
        const { data, errorMsg } = res;
        try {
          this.$emit("input", data.url);
          this.$emit("on-success", data.url);
          // _.set(this.formData, this.prop, data.url);
        } catch (e) {
          this.$message.error(errorMsg);
        }
      },
      // 图片删除
      avatarRemove() {
        this.$emit("input", undefined);
        this.$emit("on-remove");
        // _.set(this.formData, this.prop, undefined);
      },
      // 图片预览
      avatarPreview() {
        this.dialogImageUrl = this.value;
        this.dialogImgVisible = true;
      },
    },
  };
</script>
