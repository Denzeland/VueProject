<template>
    <ul class="list">
        <li class="item" v-for="item of letters" 
        :key="item" @click="togglecatagory"
        :ref="item"
        @touchstart="handletouchstart"
        @touchmove="handletouchmove"
        @touchend="handletouchend">{{item}}</li>
    </ul>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data() {
        return {
            touchstatus: false,
            startY: 0,
            timer: null
        }
    },
    updated() {
        this.startY = this.$refs['A'][0].offsetTop;
    },
    computed: {
        letters() {
            const letters = Object.keys(this.cities);
            return letters;
        }
    },
    methods: {
        togglecatagory(e) {
            this.$emit('changelist', e.target.innerText);
        },
        handletouchstart() {
            this.touchstatus = true;
        },
        handletouchmove(e) {
            if(this.touchstatus) {
                if(this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79;
                    const index = Math.floor((touchY - this.startY) / 20);
                    if(index >= 0 && index < this.letters.length) {
                        this.$emit('changelist', this.letters[index]);
                    }
                }, 16);
                
            }
        },
        handletouchend() {
            this.touchstatus = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgcolor
</style>