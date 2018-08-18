<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperlist"></home-swiper>
        <home-icons :list="iconlist"></home-icons>
        <home-recommend :list="recommendlist"></home-recommend>
        <home-weekend :list="weeklist"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'Home',
    data() {
        return {
            city: '',
            swiperlist: [],
            iconlist: [],
            recommendlist: [],
            weeklist: []
        }
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    mounted() {
        this.getHomeData();
    },
    methods: {
        getHomeData () { 
            axios.get('/api/index.json').then(this.getHomeDataSucc)
        },
        getHomeDataSucc (res) {
            res = res.data;
            if(res.ret && res.data) {
                const data = res.data;
                this.city = data.city;
                this.swiperlist = data.swiperList;
                this.iconlist = data.iconList;
                this.recommendlist = data.recommendList;
                this.weeklist = data.weekendList;
            }
        }
    }
}
</script>

<style>

</style>
