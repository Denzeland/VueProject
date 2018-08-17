<template>
    <div class="icons">
        <swiper>
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
    data () {
        return {
            iconList: [{
                id: '0001',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            },{
                id: '0002',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: '北京必游'
            },{
                id: '0003',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                desc: '夏日玩水'
            },{
                id: '0004',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                desc: '文化古迹'
            },{
                id: '0005',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                desc: '动植物园'
            },{
                id: '0006',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                desc: '故宫'
            },{
                id: '0007',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: '一日游'
            },{
                id: '0008',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
                desc: '汽车票'
            },{
                id: '0009',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            },{
                id: '0010',
                imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            },]
        }
    },
    computed: {
        pages () {
            const pages = Array.of()
            this.iconList.forEach((item, index) =>{
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