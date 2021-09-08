<template>
  <div
    v-show="titleKey.length"
    class="ird-anchor"
    :style="{ left: left || 'auto', right: right || 'auto', opacity: opacity }"
  >
    <div class="ird-anchor-ink">
      <span class="ird-anchor-ink-ball" ref="ball" style="top: 8px"></span>
    </div>

    <div
      v-for="(item, index) in titleKey"
      :key="item.id"
      :class="['ird-anchor-link', { 'ird-anchor-active-link': item.checked }]"
    >
      <a v-if="item.flag" @click="jumpHash(item, index)" :href="item.href">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        timer: null,
        scrollTop: 0,
        titleKey: [],
      };
    },
    props: {
      left: {
        type: String,
        default: "",
      },
      right: {
        type: String,
        default: "",
      },
      opacity: {
        type: Number,
        default: 1,
      },
    },
    watch: {
      "$route.path"() {
        this.collectTitleKey();
      },
    },
    created() {
      this.pass = true;
      this.collectTitleKey();
    },
    mounted() {
      this.fun = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let container = document.getElementsByClassName("page-container")[0];
          let scrollTop = container.scrollTop;
          let clientHeight =
            document.documentElement.clientHeight || document.body.clientHeight;
          let scrollHeight = container.scrollHeight;
          this.scrollTop = scrollTop;

          // 网页被卷去的高+网页可见的高===网页全文高，就是滚动到最底部了，默认选中最后一项
          if (scrollTop + clientHeight === scrollHeight + 60) {
            this.titleKey.forEach((item) => {
              item.checked = false;
            });
            this.titleKey[this.titleKey.length - 1].checked = true;
            this.$refs.ball.style.top =
              30 * (this.titleKey.length - 1) + 8 + "px";
            return;
          }

          // getBoundingClientRect().top 元素的上边 距离 可视窗口顶部的距离
          this.titleKey.some((ele, index) => {
            if (
              document.getElementById(ele.id).getBoundingClientRect().top > 0
            ) {
              this.titleKey.forEach((item) => {
                item.checked = false;
              });
              this.titleKey[index].checked = true;
              this.$refs.ball.style.top = 30 * index + 8 + "px";
            }
            return (
              document.getElementById(ele.id).getBoundingClientRect().top > 0
            );
          });
        }, 150);
      };

      // 组件销毁前清除定时器
      this.$once("hook:beforeDestroy", () => {
        window.removeEventListener("scroll", this.fun, true);
      });
      this.$nextTick(() => {
        window.addEventListener("scroll", this.fun, true);
      });
    },
    methods: {
      collectTitleKey() {
        setTimeout(() => {
          if (!this.pass) return; // 阻止第一次watch执行
          this.titleKey = []; // 跳转前要清空
          this.$refs.ball.style.top = 8 + "px";

          let docs = this.$router.options.queryAllIds();
          let newVal = decodeURI(this.$route.hash); // url 解码
          let hash = newVal.substring(1);
          let titleKey = [];

          docs.map((item) => {
            if (item.getElementsByTagName("a")[0]) {
              titleKey.push({
                id: item.id,
                name: item.id,
                checked: false,
                flag: true,
                href: item.getElementsByTagName("a")[0].getAttribute("href"),
              });
            }
          });

          // 有h的跳转标签的
          if (titleKey.length) {
            this.titleKey = titleKey;
            this.titleKey[0].checked = true;
            this.titleKey.forEach((item, index) => {
              if (item.id === hash) {
                item.checked = true;
                this.$refs.ball.style.top = 30 * index + 8 + "px";
              } else {
                item.checked = false;
              }
            });
          }
        }, 100);
      },
      jumpHash({ id }, index) {
        this.titleKey.forEach((item) => {
          item.checked = false;
        });
        this.titleKey[index].checked = true;

        this.$refs.ball.style.top = 30 * index + 8 + "px";
      },
    },
  };
</script>

<style lang="scss" scoped>
  .ird-anchor {
    position: fixed;
    width: 127px;
    font-size: 14px;
    color: #333;
    top: 80px;
    z-index: 999;

    .ird-anchor-ink {
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;

      &:before {
        width: 1px;
        content: " ";
        position: relative;
        height: 100%;
        display: block;
        background-color: #e8eaec;
        margin: 0 auto;
      }
    }

    .ird-anchor-ink-ball {
      display: inline-block;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 2px solid #2d8cf0;
      background-color: #fff;
      left: 50%;
      transition: top 0.2s ease-in-out;
      transform: translate(-50%, 2px);
      top: 0;
    }

    .ird-anchor-link {
      padding: 8px 0 8px 16px;
      line-height: 1;
      white-space: nowrap;

      a {
        color: #515a6e;
        font-size: 12px !important;
        transition: color 500ms linear;
      }

      &:hover {
        a {
          color: #2d8cf0;
        }
      }
    }

    .ird-anchor-active-link {
      a {
        color: #2d8cf0;
      }
    }
  }
</style>
