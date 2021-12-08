<template>
  <div class="homepage">
    <div class="home_content">
      <div
        v-for="i in 2"
        :key="i"
        class="content_one"
        @mousemove="mouseDiv(i)"
        @mouseout="mouseOver(i)"
        @click="Tosee(i)"
      >
        <div class="one_head">
          <span>文字</span>
        </div>
        <div class="one_bottom">
          <img
            style="width: 100%; height: 100%"
            src="../../static/bac2.jpg"
            alt=""
          />
        </div>
        <div class="one_see show_none">
          <span>文档说明</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "homepage",
  data() {
    return {};
  },
  created() {},
  methods: {
    mouseDiv(i) {
      let div = $(".home_content .one_bottom");
      let div1 = $(".home_content .one_see");
      $($(div)[i - 1]).addClass("show_none");
      $($(div1)[i - 1]).removeClass("show_none");
    },
    mouseOver(i) {
      let div = $(".home_content .one_bottom");
      let div1 = $(".home_content .one_see");
      $($(div)[i - 1]).removeClass("show_none");
      $($(div1)[i - 1]).addClass("show_none");
    },
    // 跳转
    Tosee(i){
        this.$router.push({
            path:'/data',
            query:{
                id:10,
                span:(Math.floor(Math.random()*10)),
                name:(escape('当然这个是没有啥用处的'))
            }
        })
    },
  },
};
</script>

<style>
.homepage {
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
  display: inline-block;
}
/* 整体存储盒子 */
.home_content {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* min-width: 1600px; */
  overflow: auto;
}
/* 单个 */
.content_one {
  width: 300px;
  height: 250px;
  background-color: #fff;
  margin: 50px;
  border-radius: 10px;
}
.content_one:hover {
  cursor: pointer;
}
/* 头部文字 */
.one_head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-family: "楷体";
  font-size: 25px;
  line-height: 50px;
  border-bottom: 1px solid #dfdfdf;
  text-align: center;
}
/* 下部图片显示 */
.one_bottom {
  width: 100%;
  height: 80%;
  margin: 0 auto;
}
.one_bottom img {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.show_none {
  display: none;
}
</style>