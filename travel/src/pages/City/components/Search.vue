<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="this.keyword">
            <ul>
                <li v-for="item of list" :key="item.id" class="search-item border-bottom" @click="handlecityclick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="showNoData">没有匹配城市</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        showNoData() {
            return !this.list.length;
        }
    },
    methods: {
        handlecityclick(city) {
            this.$store.dispatch('changeCity', city);
            this.$router.push('/');
        }   
    },
    watch: {
        keyword() {
            if(this.timer) {
                clearTimeout(this.timer);
            }
            if(!this.keyword) {
                this.list = [];
                return;
            }
            this.timer = setTimeout(() => {
                const result = Array.of();
                for (let i in this.cities) {
                    this.cities[i].forEach((element) => {
                        if(element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1) {
                            result.push(element);
                        }
                    });
                }
                this.list = result;
            }, 100)
        }
    },
    mounted () {
        this.bscroll = new Bscroll(this.$refs.search);
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height .72rem
        background $bgcolor
        padding 0 .1rem
        .search-input
            box-sizing border-box
            padding 0 .1rem
            border none
            outline none
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #666
    .search-content
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        overflow hidden
        z-index 1
        background #eeeeee
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #ffffff
</style>