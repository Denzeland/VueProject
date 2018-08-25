<template>
    <div>
        <div class="banner" @click="showGallary">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201408/14/dba7220ac844600c07a1af703f640935.jpg_600x330_ccb5f3fc.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">杭州乐园(AAAA景区)</div>
                <div class="banner-number"><span class="iconfont banner-icon icon-tupian1"></span>39</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="gallaryShow" @close="handleGallaryClick"></common-gallary>
    </div>
</template>

<script> 
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    components: {
        CommonGallary
    },
    data() {
        return {
            gallaryShow: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/201305/30/282cc837321963d8c8d65eac.jpg_r_800x800_4e4a9e2d.jpg', 'http://img1.qunarzz.com/sight/p0/1505/95/95704f602b554f01.water.jpg_r_800x800_5deb40b0.jpg', 'http://img1.qunarzz.com/sight/p0/1408/28/1d03d9025c32567988c8fc8e39a9f579.jpg_r_800x800_1fbe4bc5.jpg']
        }
    },
    methods: {
        showGallary() {
            this.gallaryShow = true
        },
        handleGallaryClick() {
            this.gallaryShow = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display: flex
            position absolute
            left: 0
            right 0
            bottom: 0
            line-height .6rem
            color #ffffff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                padding 0 .4rem
                height .32rem
                line-height .32rem
                margin-top .14rem
                border-radius .2rem
                background rgba(0, 0, 0, .8)
                font-size .24rem
                .banner-icon
                    font-size .24rem
            
</style>
