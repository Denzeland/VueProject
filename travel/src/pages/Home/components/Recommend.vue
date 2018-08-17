<template>
    <div>
      <div class="title">热销推荐</div>  
      <ul class="recommend-wrap">
          <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img :src="item.imgurl" alt="" class="item-img">
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-button">查看详情</button>
              </div>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data() {
        return {
            recommendList: [{
                id: '0001',
                imgurl: 'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg',
                title: '大连海洋世界',
                desc: '华侨城水上乐园，旅游的好去处，浪漫胜地'
            },{
                id: '0002',
                imgurl: 'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg',
                title: '大连海洋世界',
                desc: '华侨城水上乐园，旅游的好去处，浪漫胜地'
            },{
                id: '0003',
                imgurl: 'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg',
                title: '大连海洋世界',
                desc: '华侨城水上乐园，旅游的好去处，浪漫胜地'
            },{
                id: '0004',
                imgurl: 'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg',
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
    .item
        display flex
        list-style none
        overflow hidden
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            min-width 0
            min-width 
            padding .1rem
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #eeeeee
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .24rem
                background #ff9300
                padding 0 .2rem
                border none
                border-radius .06rem
                color #fff

</style>
