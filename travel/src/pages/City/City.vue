<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotcities="hotcities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @changelist="handlelistchange"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            cities: {},
            hotcities: [],
            letter: ''
        }
    },
    methods: {
        getCityInfo() {
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res) {
            console.log(res);
            res = res.data;
            if(res.ret && res.data) {
                const data = res.data;
                this.cities = data.cities;
                this.hotcities = data.hotCities;
            }
        },
        handlelistchange(data) {
            this.letter = data;
        }
    },
    mounted() {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>

