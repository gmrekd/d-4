$(function(){

    //메뉴
    $(".main > li").hover(function(){

        $(".sub").stop().show()
        
    }, function(){
        
        $(".sub").stop().hide()

    })//(".main > li").hover

    //이미지 슬라이드
    $(".move li:gt(0)").hide()

    var n = 0 // 0 1 2
    setInterval(function(){

        $(".move li").eq(n).fadeOut()
        if(n == 2){
            n=0
        }else{
            n++
        }//if
        console.log("n: " , n)

        $(".move li").eq(n).fadeIn()

    }, 3000)//setInterval
    
    //팝업
    $(".p_click").click(function(){

        $(".popup").show()

    })//(".p_click").click

    $(".close").click(function(){

        $(".popup").hide()

    })//(".close").click

})//jq