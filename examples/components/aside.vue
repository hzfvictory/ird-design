<template>
  <div class="ird-doc-nav">
    <div v-for="(list, key) of navConf">
      <div class="ird-doc-nav__group">
        <div class="ird-doc-nav__title">
          {{ key }}
        </div>
        <div v-for="item of navConf[key]" class="ird-doc-nav__item">
          <router-link :to="item.path" v-if="!item.hidden">
            {{ item.desc.split(" ")[0] }}
            <span>{{ item.desc.split(" ")[1] }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navConf from "doc/nav.config.json";

  export default {
    name: "",
    data() {
      return {
        navConf,
      };
    },
    created() {},
  };
</script>
