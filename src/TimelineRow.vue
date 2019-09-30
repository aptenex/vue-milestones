<template lang="html">

  <div class="timeline-row" @mouseover="isHover = true"  @mouseleave="isHover = false">
    <div class="title" v-if="false">
      {{ row.title }} {{ _.filter(events).length }}
    </div>
    <div class="timeline-container">
      <milestone-event :milestone="milestone" v-bind:key="milestone.id" v-for="milestone in events"></milestone-event>
    </div>
  </div>

</template>

<script lang="js">
  import { store } from "@/Store";
  import MilestoneEvent from "@/MilestoneEvent";
  import _ from "lodash";
  export default  {
    name: 'timeline-row',
    props: ['row', 'events' , 'startDate', 'endDate' ],
    mounted() {

    },
 
    data() {

      return {
        isHover : false
      }
    },
    components : {
      MilestoneEvent
    },
    methods: {

    },
    computed: {
      _(){
        return _;
      }
    }
}
</script>

<style scoped lang="less">
  .title {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    min-width: 150px;
    background: white;
  }
  .timeline-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
    position: relative;
    display: block;
    width: 100%;
  }
  .milestone-event {
    display: inline-block;
    display: flex;
    align-items: center;
  }
  .timeline-row {
      min-height: 50px;
      display: flex;
      position: relative;
      &:nth-child(odd) {
          background: white;
      }
      &:nth-child(even) {
          background: rgba(35, 113, 129, 0.05);
      }
  }
</style>
