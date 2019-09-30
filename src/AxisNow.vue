<template lang="html">

    <div class="axis-now">
        <div class="bar" :style="styles"></div>
        <div class="arrow" :style="arrowStyles"></div>
    </div>

</template>

<script lang="js">
    import AxisBlip from "./AxisBlip";
    import Util from "@/utils/Util";

    export default  {
        name: 'axis-now',
        extends: AxisBlip,
        props: ['date'],
        mounted : function() {
        },
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {
            arrowStyles : function(){
                return `border-bottom-color: ${this.$root.$data.styles}`;
            },
            styles: function(){
                let width = Util.positionRatio(this.barStart, this.barEnd, this.blipDate);
                return `width: ${width}%;min-height: 6px;`;
            }
        }
    }
</script>

<style scoped lang="less">
    @primary : #01c88b;
    @nowBgStart : darken(@primary, 5%);
    @nowBgEnd : @primary;

    @keyframes gradientBG {
        0% {
            background-position: 0% 10%;
        }
        50% {
            background-position: 10% 0%;
        }
    }


    .axis-now {
        position: relative;
        .arrow {
            display: inline-block;
            border-top: 8px solid transparent;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 10px solid green;
            position: absolute;
            margin-left:-8px;
            margin-top:0;
            &:after {
                content : 'now';
                position: absolute;
                top:10px;
                left: -10px;
                color: #AAA;
                font-size: 0.9em;
            }
        }
        .bar {
            float: left;
            &:hover {animation: gradientBG 5s ease infinite;}
            background-image: linear-gradient(90deg, @nowBgStart, @nowBgEnd 60%, transparent 60%, transparent 100%);
            background-size: 20px 1px;
            border: none;
        }
    }
</style>
