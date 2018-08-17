<template>
    <div>
      <div class="title">周末去哪</div>  
      <ul class="recommend-wrap">
          <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrap">
                <img :src="item.imgurl" alt="" class="item-img">
            </div>
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
              </div>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data() {
        return {
            recommendList: [{
                id: '0001',
                imgurl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
                title: '大连海洋世界',
                desc: '华侨城水上乐园，旅游的好去处，浪漫胜地'
            },{
                id: '0002',
                imgurl: 'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
                title: '大连海洋世界',
                desc: '华侨城水上乐园，旅游的好去处，浪漫胜地'
            },{
                id: '0003',
                imgurl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
                title: '大连海洋世界',
                desc: '华侨城水上乐园，旅游的好去处，浪漫胜地'
            },{
                id: '0004',
                imgurl: 'http://img1.qunarzz.com/sight/source/1505/69/e899202f7abddf.jpg_r_640x214_81b6b528.jpg',
                title: '大连海洋世界',
                desc: '华侨城水上乐园，旅游的好去处，浪漫胜地'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background-color #eeeeee
        text-indent .2rem
    .item-img-wrap
        height 0
        padding-bottom 33.9%
        overflow hidden
        .item-img
            width 100%
    .item-info
        flex 1
        min-width 0
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #eeeeee
            ellipsis()
</style>
