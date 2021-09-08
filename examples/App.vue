<template>
  <div id="app">
    <ird-header v-if="hasShow" />
    <div :class="className">
      <div :class="[{ 'page-scroll': hasShow }]">
        <router-view />
        <template v-if="hasShow">
          <ird-aside />
          <ird-anchor right="100px" />
          <ird-footer />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import IrdHeader from "doc/components/header.vue";
  import IrdAside from "doc/components/aside.vue";
  import IrdFooter from "doc/components/footer.vue";
  import IrdAnchor from "doc/components/Anchor";

  export default {
    name: "App",
    components: {
      IrdHeader,
      IrdAside,
      IrdFooter,
      IrdAnchor,
    },
    data() {
      return {};
    },
    computed: {
      hasShow() {
        return !["/", "/run"].includes(this.$route.path);
      },
      className() {
        return ["/", "/run"].includes(this.$route.path)
          ? `page-container`
          : `page-component page-container`;
      },
    },
    mounted() {},
  };
</script>
<style lang="scss">
  @import "./assets/styles";
</style>
