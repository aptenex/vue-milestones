<template lang="html">

  <div class="milestone-event"  :style="pos" :class="{ active: hover }" @mouseenter="hover = true"  @mouseleave="hover = false">
    <div class="milestone-card" >
      {{milestone.title}}
    </div>

  </div>

</template>

<script lang="js">
  import moment from "moment";
  import Util from "@/utils/Util";

  export default  {
    name: 'milestone-event',
    props: ['milestone'],
    mounted() {

    },
    data() {
      return {
        hover: false
      }
    },
    methods: {

    },
    inject : [ 'viewport'],
    computed: {
      pos : function(){
        // I'm not sure if I should do this. My thinking is, the axis blip can ONLY exist within a TimelineAxis
        // So it's a dependant on that element, so why bother passing props?
        console.log(this.viewport);
        let left = Util.positionRatio(this.viewport.startDate, this.viewport.endDate, this.eventDate);
        if(left >= 100){
          return { right: 0 + '%' }
        } else {
          return {
            left: left + '%'
          }
        }
      },

      eventDate: function(){
        return  new moment(this.milestone.date);
      },
      root : function(){
        return this.$root.$el;
      }
    }
}
</script>

<style scoped lang="less">
  .milestone-event {

    height: 140px;
    align-items: flex-start;
    display: flex;
    position: absolute;
    // border-left: 1px solid red;
    z-index: 1;
    border-radius: 3px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
    background-position-y: 10px;
    width: 1px;

    .milestone-card {
      box-shadow: -5px 0px 3px -1px rgba(0, 0, 0, 0.1);
      padding: 10px;
      background: #CCC;
      border-radius: 3px;
      vertical-align: middle;
      display: flex;
      top: 0px;
      position: absolute;
      white-space: nowrap;

    }
    &.active .milestone-card{
      z-index: 10;
      box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.1);
    }
  }
</style>
