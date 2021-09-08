## IrdImgUpload 上传图片

### 基础用法

目前只能上传一个图片，后期将会支持多个上传，拖拽排序

::: template

```html
<template>
  <ird-img-upload
    :action="action"
    :token="token"
    v-model="formData.imgUrl"
    prop="imgUrl"
    :rule="{
        format: 'image/jpeg,image/jpg,image/png,image/gif',
        lt: 300, 
         size: {width: 100, height: 100}
       }"
  />
</template>

<script>
  export default {
    data() {
      return {
        action: "http://sspapiad.ms.zhangyue.net:8070/ssp/common/image",
        token:
          "765dac684a5c614382b2782223f3f4d49dbf7d5d04dd168b6e606e72e6ddd27dff6030c8e5f9a2c4d33b12c4410d20f02bdb32f08ca45f98d5040e0b348e150f9e38240d865d41c5edf33b8997e8aa3dbb4f39f0ac7ecbecc963b34c7175901ce27b294bcce5ec5910df3b6fec777875e890d7d4cdd538d8ed4179c724e415aa02eac5bae8b44147",
        formData: {
          imgUrl: "",
        },
      };
    },
    methods: {},
  };
</script>
```

:::

### IrdImgUpload Attributes

| Name          | Type   | Default    | Description              |
| :------------ | :----- | :--------- | :----------------------- |
| action        | String | ''         | 请求接口 **必填**        |
| token         | String | ''         | 响应头的 Authentication  |
| value/v-model | String | -          | 当前字段                 |
| rule          | Object | 详细看下表 | 图片大小、格式、尺寸校验 |

### Rule Attributes

| 参数名 | 说明             | 可选值 | 默认值                                   |
| :----- | :--------------- | :----- | :--------------------------------------- |
| lt     | 图片的大小（kb） | -      | -                                        |
| format | 图片的格式       | -      | image/jpeg,image/jpg,image/png,image/gif |
| size   | 图片的尺寸       | -      | -                                        |
