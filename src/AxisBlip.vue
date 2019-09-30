<template lang="html">

    <div :class="classes + ' axis-blip'" :style="pos">
        <div  class="blip" ></div>
        <span  class="date" style="white-space: nowrap">{{ date }}</span>
    </div>

</template>

<script lang="js">
    import moment from 'moment';
    import Util from "@/utils/Util";
    export default  {
        name: 'axis-blip',
        props: ['date'],
        mounted() {
        },
        inject: ['bar'],
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {
            classes : function(){
                let left = Util.positionRatio(this.barStart, this.barEnd, this.blipDate);
                if(left >= 100){
                    return 'right-aligned';
                } else if(left < 1) {
                    return 'left-aligned';
                } else {
                    return 'center-aligned';
                }
            },
            barStart : function(){
                return new moment(this.bar.startDate);
            },
            barEnd : function(){
                return new moment(this.bar.endDate);
            },
            blipDate: function(){
                return  new moment(this.date);
            },
            pos : function () {
                // I'm not sure if I should do this. My thinking is, the axis blip can ONLY exist within a TimelineAxis
                // So it's a dependant on that element, so why bother passing props?
                let left = Util.positionRatio(this.barStart, this.barEnd, this.blipDate);
                if(left >= 100){
                    return { right: 0 + '%' }
                } else {
                    return {
                        left: left + '%'
                    }
                }


            }
        }
    }
</script>

<style scoped lang="less">
    @primary : #01c88b;
    @blipBorder : darken( @primary, 0%);
    @blipBackground: #fff;
    .left-aligned {
        .date {
            text-align: left;
        }
    }
    .right-aligned {
        .date {
            right: 0px;
            text-align: right;
        }
    }
    .center-aligned {
        .date {
            text-align: center;
            position: absolute;
            left:-40px;
        }
    }
    .date {
        color:#AAA;
        width: 100px;
        text-align: center;
        font-size:0.9em;
        position: absolute;
        bottom: 0px;

    }
    .axis-blip  {
        position: absolute;
        height: 30px;
        box-shadow: 0px -10px 8px 10px white;
        &:hover .blip {
            border-color: lighten(@blipBorder, 5%);
            background: darken(@blipBackground, 5%);
            border: 2px solid @blipBorder;
            transform: scale(1.5);
        }
        .blip {
            border-radius: 10px;
            border: 3px solid @blipBorder;
            background: @blipBackground;
            height: 12px;
            width: 12px;
            transition: all;
            transition-duration: 0.4s;
            margin-top:-8px;

        }
    }
</style>
