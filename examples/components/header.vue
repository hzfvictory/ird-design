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
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
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
  }
</style>
