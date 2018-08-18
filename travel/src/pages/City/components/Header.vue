<template>
    <div class="header">
        <router-link to="/">
            <span class="iconfont icon-jiantou3"></span>
        </router-link>
        城市选择</div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position relative
        overflow hidden
        height $headerheight
        line-height $headerheight
        text-align center
        color #ffffff
        background $bgcolor
        font-size .32rem
        .icon-jiantou3
            font-size .4rem
            color #ffffff
            position absolute
            top 0
            left 6px
</style>