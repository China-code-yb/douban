<template>
  <div class="side-box">
    <div class="side-answer">
      <a href="javascript:;">豆瓣电影评分八问</a>
    </div>
    <div class="side-advertising-one">
      <img
        src="https://oimageb8.ydstatic.com/image?id=-1246798759735516209&product=adpublish&w=300&h=250&sc=0&rm=0"
        alt
      />
      <div class="side-advertising-youdao">由有道提供的广告</div>
    </div>
    <div class="side-active-box">
      <div class="side-movie-active-title">电影活动 · · · · · ·</div>
      <div class="side-movie-active">
        <a href="javascript:;">夏末大促！ 豆瓣影人PRO大师课限时特价</a>
      </div>
    </div>
    <div class="side-billboard-box">
      <ul class="side-billboard-list">
        <li class="side-week-box">
          <span class="side-week-list">一周口碑榜</span>&emsp;
          <span class="side-more-list">更多榜单»</span>
        </li>
        <li v-for="(item, itemIndex) in items" :key="itemIndex">
          <span class="side-list-num">{{itemIndex+1}}</span>&nbsp;
          <a class="side-list-name" href="javascript:;">{{item}}</a>
        </li>
      </ul>
    </div>

    <div class="side-advertising-one side-advertising-two">
      <img
        src="https://oimagea2.ydstatic.com/image?id=1602572140042014083&product=adpublish&w=300&h=250&sc=0&rm=0"
        alt
      />
      <div class="side-advertising-youdao">由有道提供的广告</div>
    </div>
    <div class="side-doulist-box">
      <ul class="side-doulist">
        <li class="side-doulist-title">热门豆利</li>
        <li class="side-doulist-lis">
          <div>
            <a href="javascript:;">得此两百部，足以度余生</a>
          </div>
          <div class="side-doulist-lis-right">286推荐</div>
        </li>
        <li class="side-doulist-lis">
          <div>
            <a href="javascript:;">【历届奥斯卡最佳电影配乐】</a>
          </div>
          <div class="side-doulist-lis-right">75推荐</div>
        </li>
      </ul>
    </div>
    <div class="side-cooperation-contact">
      <p class="side-cooperation-contact-title">合作联系</p>
      <ul class="side-cooperation-contact-list">
        <li>电影合作邮箱：movie@douban.com</li>
        <li>
          电视剧合作邮箱：tv@douban.com
          <img
            src="https://img3.doubanio.com/f/shire/486503da8c82ffdbecec41c065927f96cbf02e4f/pics/icon/ic_new.png"
            alt
          />
        </li>
        <li>豆瓣影人PRO合作邮箱：pro@douban.com</li>
      </ul>
    </div>
    <div class="side-cooperation-contact">
      <p class="side-cooperation-contact-title">关注我们</p>
      <ul class="side-contact-list">
        <li v-for="(item, contactIndex) in contact" :key="contactIndex">
          <img :src="item.image" alt />
          <a class="side-contact-title" href="javascript:;">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div class="side-advertising-three">
        <img src="https://img1.doubanio.com/view/dale-online/dale_ad/public/1dd7427b1c1cf79.jpg" alt="">
        <div class="side-advertising-three-text">
            <p>豆瓣咖啡新口味，限时折扣</p>
            <p>豆瓣豆品</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        "寄生虫",
        "哪吒之魔童降世",
        "昆虫总动员2-来自远方的后援军",
        "沦落人",
        "送我上青云",
        "他们（国际版）",
        "我和吸铁石和一个死去的朋友",
        "金银岛",
        "单身汉",
        "煤工歌手冈德曼"
      ],
      contact: [
        {
          image:
            "https://img3.doubanio.com/f/movie/8f5f3bdbdc71bfd34eef8e3f16d13c857e59301b/pics/movie/home_weibo.png",
          title: "微博"
        },
        {
          image:
            "https://img3.doubanio.com/f/movie/5d377d72b39a5cd2532813d1e42da3f34438a465/pics/movie/home_weixin.png",
          title: "微信"
        },
        {
          image:
            "https://img3.doubanio.com/f/movie/8cf33706051d29ae3cf98091070f0ec2481959ed/pics/movie/bite_me@2x.jpg",
          title: "瓣嘴"
        },
        {
          image:
            "https://img3.doubanio.com/f/movie/58304d3dae0aa268f2ba8e6ba4cd3a57a999d6fb/pics/movie/home_film_pro@2x.jpg",
          title: "豆瓣影人PRO"
        },
        {
          image:
            "https://img3.doubanio.com/f/movie/cab17c6de1bfdaf598c9ae235738e20022f49e23/pics/movie/home_club@2x.jpg",
          title: "影club"
        }
      ]
    };
  }
};
</script>
<style>
.side-box {
  width: 300px;
  height: 1000px;
  /* border: 1px solid red; */
}
.side-answer {
  background-color: #f2f7f6;
  padding: 12px 0 12px 18px;
  font-size: 13px;
  color: #3377aa;
  border-radius: 2px;
}
.side-answer>a:hover {
  background-color: #3377aa;
  color: #fff;
}
.side-advertising-one {
  margin-top: 20px;
  position: relative;
}
.side-advertising-one img {
  width: 100%;
}
.side-advertising-youdao {
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  width: 104px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  right: 0;
  bottom: 4px;
}
.side-active-box {
  margin-top: 20px;
  background-color: #f2f7f6;
  font-size: 13px;
  padding: 16px 0 16px 18px;
  border-radius: 2px;
}
.side-movie-active-title {
  color: #072;
  font-size: 16px;
  padding: 2px 0;
}
.side-movie-active {
  color: #3377aa;
  margin-top: 8px;
  /* padding: 5px 0; */
}
.side-billboard-box {
  margin-top: 20px;
}
.side-billboard-list > li {
  padding: 9px 0;
  border-bottom: 1px solid #eaeaea;
  font-size: 13px;
  color: #3377aa;
}
.side-billboard-list > .side-week-box {
  padding-bottom: 12px;
}
.side-week-list {
  color: #111111;
  font-size: 16px;
}
.side-more-list {
  color: #3377aa;
  font-size: 13px;
  cursor: pointer;
}
.side-more-list:hover {
  color: #fff;
  background-color: #3377aa;
}
.side-list-num {
  display: inline-block;
  width: 20px;
  text-align: right;
  color: #111111;
}
.side-list-name:hover {
  color: #fff;
  background-color: #3377aa;
}
.side-advertising-two {
  margin-top: 40px;
}
.side-doulist-box {
  margin-top: 20px;
}
.side-doulist > li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;
  color: #3377aa;
  font-size: 13px;
}
.side-doulist .side-doulist-title {
  font-size: 16px;
  color: #111111;
  padding-bottom: 20px;
}
.side-doulist-lis-right {
  color: #111111;
}
.side-doulist-lis > div > a:hover {
  color: #fff;
  background-color: #3377aa;
}
.side-cooperation-contact {
  margin-top: 20px;
}
.side-cooperation-contact-title {
  font-size: 16px;
  color: #111111;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 18px;
}
.side-cooperation-contact-list {
  font-size: 13px;
  color: #111111;
}
.side-contact-list{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #3377aa;

}
.side-contact-list>li{
    width: 60px;
    text-align: center;
    cursor: pointer;
}
.side-contact-list>li>img{
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
}
.side-contact-title{
    display:inline-block;
}
.side-contact-title:hover{
    background-color: #3377aa;
    color: #fff;
}
.side-advertising-three{
    width: 100%;
    height: 100px;
    padding: 10px;
    background-color: #f9f9f9;
    margin-top: 20px;
    font-size: 12px;
    display: flex;
}
.side-advertising-three img{
    width: 96px;
    height: 80px;
}
.side-advertising-three-text{
    margin-left: 10px;
}
.side-advertising-three-text>p:nth-of-type(1){
    padding: 10px 0;
    color: #3377aa;

}
.side-advertising-three-text>p:nth-of-type(2){
    color: #999999;

}
.side-doulist-lis-right{
  color: #999999;
}
</style>