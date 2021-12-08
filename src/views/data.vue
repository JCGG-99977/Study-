<template>
  <div class="data">
      <div class="data_content">
          <div class="data_content_left">
              <ul v-for="i in 2" :key="i">
                  <li>这是什么</li>
              </ul>
          </div>
          <div class="data_content_right">
              <div class="center">

              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'datacount',
data(){
    return{

    }
},
created(){
    console.log(this.$route.query)
}
}
</script>

<style>
.data{
    width: 100%;
    height: 100%;
    background-color: #f0f0f5;
}
.data_content{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    /* background-color: springgreen; */
    display: flex;
    flex-direction: row;
}
.data_content_left{
    flex: 1;
    /* background-color: steelblue; */
    overflow: auto;
}
.data_content_left ul{
    width: 100%;
    line-height: 50px;
    text-align: center;
    
}
.data_content_left ul li{
    width: 100%;
    height: 50px;
    background-color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
}
.data_content_left ul li:hover{
    cursor: pointer;
}
.data_content_right{
    flex: 5;
    overflow: auto;
}
.center{
    margin-left: 20px;
    margin-top: 20px;
    background-color: tomato;
}
</style>