// 轮播
$(function(){
    var i=0;
    setInterval(function(){
        i+=1;
       if(i<7){
        $("#header .l_i img").attr("src","image/"+i+".jpg");
       }else{
           i=0;
       }
    },2000);
    $("li").mouse
})
//轮播
// window.onload=function () {
//     var lis=document.getElementById("uu").getElementsByTagName("li");
//     var imgs=document.getElementById("l_i").getElementsByTagName("img");
//     loop=0;
//     setInterval(function(){
//         loop+=1;
//         loop%6;
//         for(var i=0;i<lis.length;i++){
//             var li=lis[i].getElementById("current");
//             li.style.display="none";
//             lis[i].getElementById("dv").style.display="block";
            
            
//             console.log(loop);
//         }
//     },2000);
//   }

        let index=0;
        // =============================z右边 下一张====================================
        $("#next").click(function () {
            index++;
            //达到最后一张图片（临界值），下标重置。从头开始
            if(index>4){
                index=0;
            }
            console.log(index)
            // 让对应下标值的图片显示，兄弟元素隐藏
            $(".swiper_content img").eq(index).show().siblings().hide();
            // 让对应下标值的焦点添加class，兄弟元素移除一个class
            $("#btns span").eq(index).addClass("current").siblings().removeClass("current");
        })
        // ===================================================================

        // =============================左边 上一张=====================================
        $("#prev").click(function () {
            index--;
            //达到第一张图片（临界值），下标重置。从最后开始
            if(index<0){
                index=4;
            }
            console.log(index)
            $(".swiper_content img").eq(index).show().siblings().hide();

            $("#btns span").eq(index).addClass("current").siblings().removeClass("current");
        })
        //=========================================================================

        // ========================点击对应焦点，相应图片切换，重置外面下标值=========================================
        $("#btns span").click(function () {
            // 内外的index共享
            index=$(this).index();
           console.log(index)
           $(".swiper_content img").eq(index).show().siblings().hide();
           $("#btns span").eq(index).addClass("current").siblings().removeClass("current");
       })