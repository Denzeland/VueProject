<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.imgurl" alt="" class="swiperimg">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                // loop: true,
                pagination: '.swiper-pagination'
            },
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper-wrap >>> .swiper-pagination-bullet-active
        background #fff !important
    .swiper-wrap
        overflow hidden
        width: 100%
        height: 0
        padding-bottom 26.7%
        .swiperimg
            width 100%
</style>


