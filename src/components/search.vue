<template>
    <div>
        <div class="nav">
            <div class="nav-wrap">
                <div class="nav-primary">
                    <div class="nav-logo">
                        <a href="https://movie.douban.com" class="nav-logo-a">
                        <img :src="icon2" alt="" class="nav-logo-a-img">
                        </a>
                    </div>
                    <div class="nav-search">
                        <form action="https://movie.douban.com/subject_search">
                            <div class="inp">
                                <input type="text" size="22" maxlength="60" placeholder="搜索电影、电视剧、综艺、影人" class="search_text">
                            </div>
                            <div class="inp-btn">
                                <input type="submit" value="搜索"  class="el-icon-search inp-input">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="nav-secondary">
                <div class="nav-item">
                    <ul class="search-ul">
                        <li class="search-li">
                            <a href="" class="li-a">影视&购票</a>
                        </li>
                        <li class="search-li">
                            <a href="" class="li-a">选电影</a>
                        </li>
                        <li class="search-li">
                            <a href="" class="li-a">电视剧</a>
                        </li>
                        <li class="search-li">
                            <a href="" class="li-a">排行版</a>
                        </li>
                        <li class="search-li">
                            <a href="" class="li-a">分类</a>
                        </li>
                        <li class="search-li">
                            <a href="" class="li-a">影评</a>
                        </li>
                        <li class="search-li">
                            <a href="" class="li-a">2018年度榜单</a>
                        </li>
                        <li class="search-li">
                            <a href="" class="li-a">2018书影音报告</a>
                        </li>
                    </ul>
                </div>
                <a href="" class="movieannual2018">
                    <img :src="icon3" class="icon3">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                icon2:require('../assets/logo2.png'),
                icon3:require('../assets/logo3.png'),
            }
        },
    };
</script>
<style>

.nav {
  position: relative;
  background-color: #f0f3f5;
  width: 100%;
  height: 115px;
}
.nav-wrap {
    border-color: #e3ebec;
    width: 100%;
    height: 75px;
}
.nav-primary{
    width: 1040px;
    height: 74px;
    margin: 0 auto;
    overflow: visible !important;
    position: relative;
    padding: 10px 0 5px;
    zoom: 1;
    display: flex;
}
.nav-logo{
    width: 145px;
    height: 56px;
}
.nav-search{
    width: 895px;
    height: 59px;
    /* margin-left: 145px; */
    overflow: visible !important;
    position: relative;
    zoom: 1;
    padding: 10px 0 15px 0;
    /* border: 1px solid red; */
}
.nav-logo-a{
    color: #27a;
    text-decoration: none;
    display: block;
    width: 145px;
    height: 56px;
    overflow: hidden;
    /* line-height: 100em; */
    /* border: 1px solid blue; */
}
.nav-logo-a-img{
    width: 130px;
    height: 30px;
    margin-top: 10px;
}
form{
    margin: 0;
    padding: 0;
    border: 0px;
    width: 895px;
    height: 34px;
    /* border: 1px solid blue; */
    display: flex;
}
.inp{
    width: 470px;
    height: 34px;
}
.search_text{
    width: 461.19px;
    height: 30px;
}
.inp-btn{
    width: 37px;
    height: 30px;
}
.inp-input{
    width: 37px;
    height: 30px;
    /* width: 100%;
    height: 100%; */
    padding: 0px 0 0 0;
    overflow: hidden;
    color: transparent;
    cursor: pointer;
    margin: 0 3px 0 -9px ;
    box-sizing: border-box;
}
.nav-secondary{
    width: 1040px;
    height: 40px;
    margin: 0 auto;
    padding-bottom: 0;
    overflow: hidden;
    zoom: 1;
}
.nav-items{
    float: none;
    zoom: 1;
    font-size: 14px;
}

.search-ul{
    margin: 9px 0;
    display: flex;  
}
.search-li{
    display: inline;
    margin-right: 25px;
}
.li-a{
    height: 16px;
    color: #27a;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
}
.movieannual2018{
    background-color: transparent;
    position: absolute;
    width: 186px;
    height: 96px;
    top: 10px;
    left: 50%;
    margin-left: 200px;
    /* border: 1px solid red; */
}

.icon3{
    width: 186px;
    height: 96px;
}
</style>
