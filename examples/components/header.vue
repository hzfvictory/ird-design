<template>
  <div class="wrapper-header">
    <div class="ird-head">
      <img
        @click="$router.history.push('/')"
        src="../assets/svg/logo.svg"
        alt="logo"
      />
      <div class="search-box">
        <input type="text" placeholder="搜索组件..." class="search" />
      </div>

      <div class="irdd-version">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ version }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(val, ver) of versions" :command="ver">
              {{ val }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  import { Message } from "element-ui";
  import versions from "../versions.json";

  export default {
    data() {
      return {
        versions,
        version: "",
      };
    },
    created() {
      let version = window.location.pathname.split("/")[1];
      let versionAll = Object.keys(versions);
      this.version =
        version || versionAll[versionAll.length - 2] || versionAll[0];
    },
    methods: {
      handleCommand(command) {
        const url = "http://irdd.mistra.site:9999/" + command + location.hash;
        if (parseInt(command) >= 2) {
          Message.warning("该版本只能内网下使用");
          setTimeout(() => {
            window.location.replace(url);
          }, 2000);
        } else {
          window.location.replace(url);
        }

        // let url = location.origin+ '/' + command + location.hash;
      },
    },
  };
</script>

<style lang="scss">
  .ird-head {
    display: flex;
    align-items: center;

    img {
      height: 60px;
      display: inline-block;
      margin-left: 20px;
      cursor: pointer;
    }

    .search {
      height: 22px;
      font-size: 14px;
      margin-left: 40px;
      color: #666;
      border: none;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAZlBMVEUAAACampqampqampqZmZmampqampqhoaGioqKZmZmcnJyampqampqZmZmZmZmampqampqampqbm5u2traZmZmZmZmZmZmampqZmZmbm5ucnJybm5ucnJyampqfn5+bm5uZmZmZmZkUDGK4AAAAIXRSTlMAevqQgPS/DwnQFvDl48zGrqh0A+tpuZlkXk0+Oy0gHFA2J2v0AAAAsklEQVQY052OWRKDIBBEYdgUBBX3aBbuf8kUiCLmL/0xM/Wqq3tQ0AvXFVTcSnRRQUC1eKANY7Q7qTTMFuESFLg4vEY/T8vWj9FPWKBRK+C9DSy6iqgQg1WRYQmzX3WLcvHGzwrfMCn9hOGGqQ5u+uOOUUmpzDKR0bdbwkMsT5n6Yq+A7UIfLr7Q8X5NlJXHKUYgcs+dnHH44B1WwAkltdMfhBNHYm5KbdrFt0We6x9efgE+gwdPh3lNeAAAAABJRU5ErkJggg==)
        no-repeat 0;
      padding-left: 45px;
      outline: none;
    }

    .irdd-version {
      margin-left: auto;
      margin-right: 20px;

      user-select: none;

      .el-dropdown {
        color: #888;
      }
    }
  }
</style>
