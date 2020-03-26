<template>
  <div>
    <NavLink class="action-button" :item="actionLink" />
    <Content class="theme-default-content" />
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
export default {
  components: { NavLink },
  computed: {
    data() {
      return this.$page.frontmatter
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      }
    },
  },
}
</script>
