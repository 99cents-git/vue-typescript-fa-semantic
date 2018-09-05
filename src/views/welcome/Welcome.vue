<template>
  <div class="step step1">
    <button role="button" class="ui icon left labeled button">
      <i class="pause icon"></i>Pause
    </button>
    <button role="button" class="ui icon right labeled button">
      <i class="right arrow icon"></i>Next
    </button>
  </div>
</template>
<script lang="ts">
  import WelcomeController from './WelcomeController';

  export default WelcomeController;
</script>
<style scoped src="./Welcome.less"></style>
