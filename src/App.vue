<template>
  <div id="app">
    <div id="pages">
      <transition name="fade" class="animated" :enter-active-class="inClass" :leave-active-class="outClass">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<style src="./AppStyles.less"></style>
<script lang="ts">
  import AppController from './AppController';
  export default AppController;
</script>
