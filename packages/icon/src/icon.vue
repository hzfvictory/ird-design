<template>
  <i :class="'ird-icon-' + name"></i>
</template>

<script>
  export default {
    name: "IrdIcon",

    props: {
      name: String,
    },
  };
</script>
