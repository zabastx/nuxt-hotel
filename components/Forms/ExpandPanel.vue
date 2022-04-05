<template>
  <v-expansion-panels flat>
    <v-expansion-panel>
      <v-expansion-panel-header class="pa-0">
        <h3>{{ label }}</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="panel-content">
        <slot></slot>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.panel-content::v-deep > * {
  padding: 0;
}
</style>
