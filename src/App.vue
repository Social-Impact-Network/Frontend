<template>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    initializeLayout() {
      if (!this.$rtl.isRTL) {
        this.$rtl.disableRTL();
      }
    }
  },
  mounted() {
    this.initializeLayout();
  },
   async beforeCreate() {
    this.$store.dispatch('registerWeb3')
    
  },
};
</script>
