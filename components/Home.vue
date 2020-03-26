<template>
  <div>
    <Content class="theme-default-content" />
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter
    },
  },
}
</script>
