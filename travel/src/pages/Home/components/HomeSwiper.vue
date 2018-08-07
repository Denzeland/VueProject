<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img :src="item.imgurl" alt="" class="swiperimg">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                },
                swiperSlides: [1, 2, 3, 4, 5]
            },
            swiperList: [{
                id: 1001,
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
            },{
                id: 1002,
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
            },{
                id: 1003,
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1807/e7/d70d0830a9941b02.jpg_750x200_f8c7d2ad.jpg'
            },{
                id: 1004,
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
            },{
                id: 1005,
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1806/8f/d09fa241a01ac02.jpg_750x200_e0c86013.jpg'
            },{
                id: 1006,
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper-wrap
        overflow hidden
        width: 100%
        height: 0
        padding-bottom 26.7%
        .swiperimg
            width 100%
</style>


