<template>
    <div>
        <header>
            <nav class="nav-box">
                <ul class="header-nav-left">
                    <li>豆瓣</li>
                    <li>读书</li>
                    <li>电影</li>
                    <li>音乐</li>
                    <li>同城</li>
                    <li>小组</li>
                    <li>阅读</li>
                    <li>FM</li>
                    <li>时间</li>
                    <li>豆品</li>
                    <li>更多</li>
                </ul>
                <ul class="header-nav-right">
                    <li class="header-nav-right-lisOne">
                        <span class="header-down">下载豆瓣客户端</span>
                        <div class="header-down-menu-box">
                            <div>
                                <img src="https://img3.doubanio.com/dae/accounts/resources/2f48733/shire/assets/nav_doubanapp_6.png" alt="">
                                <div class="header-down-menu-log">豆瓣</div>
                            </div>
                            <div>
                                <img src="https://img3.doubanio.com/dae/accounts/resources/2f48733/shire/assets/nav_doubanapp_6_qrcode.png" alt="">
                                <div>iPhone · Android</div>
                            </div>
                        </div>
                    </li>
                    <li>登录/注册</li>
                </ul>
            </nav>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

.nav-box{
    display: flex;
    justify-content: space-between;
    height: 28px;
    width: 100%;
    background-color: #545652;
    color: #d5d5d5;
    font-size: 12px;
}
.header-nav-left,.header-nav-right{
    height: 100%;
    display: flex;
    
}
.header-nav-left>li,.header-nav-right>li{
    height: 100%;
    line-height: 28px;
    padding: 0 12px;
    
}
.header-nav-right{
    margin-right: 40px;
    position: relative;
}    
.header-nav-left>li:hover,.header-nav-right>li:hover{
    color: #fff;
}
.header-down{
    display: block;
    width: 100%;
    height: 100%;
}
.header-down-menu-box{
    width: 250px;
    padding-top:40px ;
    padding-bottom: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    position: absolute;
    text-align: center;
    right: 0;
    z-index: 100;
    color: #333;
    display: none;
}
.header-down-menu-log{
    font-size: 24px;
}
.header-down-menu-box>div:nth-of-type(1){
    margin-bottom: 30px;
}
.header-nav-right-lisOne:hover .header-down-menu-box{
    display: block;

}
</style>
