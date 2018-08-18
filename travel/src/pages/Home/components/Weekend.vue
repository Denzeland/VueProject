<template>
    <div>
      <div class="title">周末去哪</div>  
      <ul class="recommend-wrap">
          <li class="item border-bottom" v-for="item of list" :key="item.id">
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
    props: {
        list: Array
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
        padding-bottom 37.09%
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
