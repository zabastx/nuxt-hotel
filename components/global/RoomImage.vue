<template>
  <img :src="imgSrc()" :alt="alt" class="img" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/img/rooms/${this.src}`);
      } catch (error) {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  display: block;
}
</style>
