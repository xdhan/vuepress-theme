<template>
  <component :is="layout" />
</template>

<script>
export default {
  components: {
    Home: () => import('./Home'),
    PostPage: () => import('./PostPage'),
  },
  computed: {
    layout() {
      if (this.$page.path === '/') {
        return 'Home'
      }
      return 'PostPage'
    },
  },
}
</script>
