<template>
  <div class="homepage">
    <div class="homepage__content d-flex flex-column pb-4 pt-16">
      <CardsRoomSearch />
    </div>
  </div>
</template>

<style lang="scss">
@import "~assets/globalVars.scss";

.homepage {
  height: 100%;
  min-height: 830px;
  &__content {
    height: 100%;
    margin: auto;
    max-width: var(--content-width);
    > p {
      color: $dark75;
      text-align: right;
    }
  }
}
</style>
