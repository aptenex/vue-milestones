<template>
  <milestone-timeline id="app">
  </milestone-timeline>
</template>

<script>
    import MilestoneTimeline from '@/MilestoneTimeline.vue';

    export default {
        name: 'app',
        components: {
            MilestoneTimeline,
        },
    };
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding-left: 200px;
    padding-right: 200px;
  }
</style>
