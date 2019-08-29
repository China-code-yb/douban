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
                    <li>下载豆瓣客户端</li>
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
}    
.header-nav-left>li:hover,.header-nav-right>li:hover{
    color: #fff;
}
</style>
