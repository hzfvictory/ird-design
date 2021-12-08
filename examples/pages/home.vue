<template>
  <div class="ird-index">
    <div class="index-container">
      <p class="title">irdd</p>
      <p>一款轻量级、模块化的前端UI组件库</p>
      <router-link :to="{ path: '/guide' }">开始使用</router-link>
      <a
        target="_blank"
        class="btn-github"
        href="https://github.com/hzfvictory/ird-design"
      >
        GitHub
        <i />
      </a>
    </div>
  </div>
</template>

<script>
  import IrdHeader from "doc/components/header";

  export default {
    data() {
      return {};
    },
    components: {
      IrdHeader,
    },
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
  .ird-index {
    height: 100vh;

    &::before {
      content: "";
      background-image: url("https://cdn.jsdelivr.net/gh/hzfvictory/cdn@master/newBlog/img/banner/4.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 10%;
      opacity: 0.9;
      z-index: -1;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .index-container {
      text-align: left;
      transform: skewY(0deg);
      padding: calc(100vh - 270px - 190px) 0 0 8.8vh;
      z-index: 999;
      position: relative;

      p {
        color: #cfcfcf;
      }

      .title {
        font-size: 42px;
      }

      p:nth-child(2) {
        padding: 30px 0 100px 0;
        font-size: 24px;
      }

      a {
        color: #fff;
        background-image: linear-gradient(90deg, transparent 0%, #696970 100%);
        display: inline-block;
        width: 132px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border-radius: 28px;
        transition: all 0.3s;
        cursor: pointer;
        text-align: center;
      }

      .btn-github {
        color: #fff;
        border: 1px solid #7f7772;
        background: transparent;
        box-shadow: none;
        margin-left: 20px;

        i {
          background-image: url("../assets/svg/github.svg");
          background-repeat: no-repeat;
          background-size: cover;
          width: 28px;
          height: 28px;
          vertical-align: middle;
          display: inline-block;
        }
      }
    }
  }

  .wrapper-header {
    background-color: transparent;
  }
</style>
