<template>
  <v-app-bar app clipped-left color="red" dense>
    <v-app-bar-nav-icon @click.stop="mDrawer = !mDrawer" />
    <v-icon class="mx-4" large>
      mdi-youtube
    </v-icon>
    <v-toolbar-title class="mr-12 align-center">
      <span class="title">标题</span>
    </v-toolbar-title>
    <v-spacer />
    <v-row align="center" style="max-width: 650px;">
      <v-text-field
        :append-icon-cb="() => {}"
        placeholder="Search..."
        single-line
        append-icon="mdi-magnify"
        color="white"
        hide-details
      />
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    mDrawer: {
      get() {
        return this.drawer
      },
      set(val) {
        this.$emit('update:drawer', val)
      },
    },
  },
}
</script>
