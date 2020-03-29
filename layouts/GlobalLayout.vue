<template>
  <v-app id="inspire">
    <NavigationDrawer :drawer.sync="drawer" />
    <Appbar :drawer.sync="drawer" />
    <component :is="layout" />
  </v-app>
</template>

<script>
import NavigationDrawer from '@theme/components/NavigationDrawer'
import Appbar from '@theme/components/Appbar'
export default {
  data() {
    return {
      drawer: null,
    }
  },
  components: {
    NavigationDrawer,
    Appbar,
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
  },
}
</script>
