## IrdUpload 上传文件

目前只能上传单个文件，后期将会支持多个上传，拖拽排序

### 上传图片

::: template

```html
<template>
  <ird-upload
    :action="action"
    :token="token"
    v-model="formData.imgUrl"
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
        action: "http://gdapiad.ms.zhangyue.net:8064/dsp/brand/upload/video",
        token:
          "1f429c65169fefc181899718e8183726938a8f3b6e4c3a8e86b49a9fec73e9604f9a909dc284c3ae97f0f7982e9bfdc61ed7730a1b644cee8d6ce10e434992614f9388adfce07284fb3113db202d75851a0a2cf8fe34718713e257a90015f66e6aecce8c5ab72737d0599dfa5f8d35687bdbf3db2383d34200f5b0c86fe7e39d30ccb742037a576c",
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

### 上传视频

::: template

```html
<template>
  <ird-upload
    :action="action"
    :token="token"
    v-model="formData.videUrl"
    :rule="{
      format: 'video/mp4',
      lt: 5120,
      duration:[0,7],
      thre:2
     }"
  />
</template>

<script>
  export default {
    data() {
      return {
        action: "http://gdapiad.ms.zhangyue.net:8064/dsp/brand/upload/video",
        token:
          "1f429c65169fefc181899718e8183726938a8f3b6e4c3a8e86b49a9fec73e9604f9a909dc284c3ae97f0f7982e9bfdc61ed7730a1b644cee8d6ce10e434992614f9388adfce07284fb3113db202d75851a0a2cf8fe34718713e257a90015f66e6aecce8c5ab72737d0599dfa5f8d35687bdbf3db2383d34200f5b0c86fe7e39d30ccb742037a576c",
        formData: {
          videUrl: "",
        },
      };
    },
    methods: {},
  };
</script>
```

:::

### IrdUpload Attributes

| 参数名        | 说明                     | 类型   | 默认值     |
| :------------ | :----------------------- | :----- | :--------- |
| action        | 请求接口 **必填**        | String | ''         |
| token         | 响应头的 Authentication  | String | ''         |
| value/v-model | 当前字段                 | String | -          |
| rule          | 图片大小、格式、尺寸校验 | Object | 详细看下表 |

### Rule Attributes

| 参数名   | 说明                                     | 类型                         | 默认值                                   |
| :------- | :--------------------------------------- | :--------------------------- | :--------------------------------------- |
| lt       | 文件的大小 「kb」                        | Number                       | -                                        |
| format   | 文件的格式                               | String                       | image/jpeg,image/jpg,image/png,image/gif |
| size     | 文件的尺寸                               | Number                       | -                                        |
| duration | 视频的时长区间「秒」                     | Array `[min-time, max-time]` | [0]                                      |
| thre     | 仅视频尺寸的阈值「可允许一定的范围误差」 | Number                       | 0                                        |
