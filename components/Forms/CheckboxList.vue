<template>
  <div class="checkbox-list">
    <h3 class="mb-4">{{ label }}</h3>
    <template v-if="expanded">
      <v-checkbox
        v-model="model"
        v-for="(item, idx) in list"
        :key="idx"
        :value="item.value"
        color="accent"
        hide-details
      >
        <template v-slot:label>
          <div class="d-flex flex-column label">
            <p class="dark75">{{ item.value }}</p>
            <p class="dark50">{{ item.details }}</p>
          </div>
        </template>
      </v-checkbox>
    </template>
    <template v-else>
      <v-checkbox
        v-model="model"
        v-for="(val, idx) in list"
        :key="idx"
        :label="val"
        :value="val"
        color="accent"
        hide-details
      ></v-checkbox>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Boolean, Array],
      required: true,
    },
    list: Array,
    label: String,
    expanded: { type: Boolean, default: false },
  },
  computed: {
    model: {
      set(val) {
        this.$emit("input", val);
      },
      get() {
        return this.value;
      },
    },
  },
};
</script>

.
<style lang="scss" scoped>
.label {
  :first-child {
    font-weight: 700;
  }
  :last-child {
    font-size: 12px;
  }
}
</style>
