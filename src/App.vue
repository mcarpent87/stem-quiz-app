<template>
  <div>
    <Nav />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped></style>
