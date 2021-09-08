<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <h4>{{ langConfig.links }}</h4>
        <a
          class="footer-main-link"
          href="https://github.com/hzfvictory/zy-ele-design"
          target="_blank"
        >
          {{ langConfig.repo }}
        </a>
        <a
          class="footer-main-link"
          href="https://github.com/hzfvictory/zy-ele-design/issues"
          target="_blank"
        >
          {{ langConfig.changelog }}
        </a>
        <a class="footer-main-link" target="_blank">{{ langConfig.faq }}</a>
        <a class="footer-main-link" target="_blank">{{ langConfig.starter }}</a>
      </div>
      <div class="footer-main">
        <h4>{{ langConfig.community }}</h4>
        <a class="footer-main-link" target="_blank">{{ langConfig.gitter }}</a>
        <a class="footer-main-link" target="_blank">
          {{ langConfig.feedback }}
        </a>
        <a class="footer-main-link" target="_blank">
          {{ langConfig.contribution }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script type="text/babel">
  import compoLang from "../i18n/component.json";

  const { version } = 1;

  export default {
    data() {
      return {
        version,
      };
    },

    computed: {
      lang() {
        return "zh-CN";
      },

      langConfig() {
        return compoLang.filter((config) => config.lang === this.lang)[0][
          "footer"
        ];
      },
    },
  };
</script>
