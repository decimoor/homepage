

$(window).scroll(() => { 
    const k = 0.1
    $("#tmp2").css("filter", `blur(${$(window).scrollTop()*k}px)`)

    let navBar = $("#tmp");
    // console.log(navBar.position().top - $(this).scrollTop())
    if($("#tmp2").offset().top - $(this).scrollTop() + Number($("#tmp2").css("height").replace(/px$/, '')) < 0){
        navBar.css("position", "fixed");
        navBar.css("top", "0px")
        navBar.css("z-index", "100")

    }
    else if ($(this).scrollTop() + Number($("#tmp2").css("height").replace(/px$/, '')) > 0){
        navBar.css("position", "relative")
        navBar.css("z-index", "100")  
    }

    if(navBar.css("position") == "fixed")
    {
        $(".content").css("margin-top", `${navBar.css("height")}`)
        console.log("fixed")
    }
    else{
        $(".content").css("margin-top", "0px")
        console.log("not fixed")
    }

    
    // console.log(Number($("#tmp2").css("height").replace(/px$/, '')))
    
});