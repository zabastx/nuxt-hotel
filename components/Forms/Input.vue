<template>
  <label class="input" :style="{ width }">
    <h3>{{ label }}</h3>
    <input :type="type" :placeholder="placeholder" :required="required" v-model="input" />
    <v-btn v-if="type === 'email'" icon class="input__btn" color="accent" light>
      <v-icon light>mdi-arrow-right</v-icon>
    </v-btn>
  </label>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    width: String,
    label: String,
    placeholder: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    value: "",
  }),
  computed: {
    input: {
      set(val) {
        this.value = val;
        this.$emit("input", this.value);
      },
      get() {
        return this.value;
      },
    },
  },
  methods: {
    onInput() {
      this.$emit("input", this.input);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/globalVars.scss";
.input {
  position: relative;
  display: block;
  &__btn {
    position: absolute;
    bottom: 4px;
    right: 0;
    z-index: 100;
  }
  input {
    border-radius: 4px;
    width: 100%;
    border: 1px solid $dark25;
    color: $dark75;
    background: #fff;
    height: 44px;
    padding: 13px 15px;
    padding-right: 36px;
    &::placeholder {
      color: $dark25;
    }
    &:hover,
    &:focus {
      border-color: $dark50;
      outline: none;
    }
  }
}
</style>
