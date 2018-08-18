<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"  v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgurl"  class="icon-img-content" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                autoplay: false
            }
        }
    },
    computed: {
        pages () {
            const pages = Array.of()
            this.list.forEach((item, index) =>{
                const page = Math.floor(index / 8)
                if(!pages[page]) {
                    pages[page] = Array.of()
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons >>> .swiper-container
        padding-bottom 50%
        height 0
    .icons
        margin-top .2rem
        .icon
            float left
            position relative
            width 25%
            height 0
            padding-bottom 25%
            overflow hidden
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    height 100%
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom -5px
                height .44rem
                line-height .44rem
                color $darkcolor
                text-align center
                ellipsis()

</style>