

$(window).scroll(() => { 
    const k = 0.1
    $("#tmp2").css("filter", `blur(${$(window).scrollTop()*k}px)`)

    let navBar = $("#tmp");
    // console.log(navBar.position().top - $(this).scrollTop())
    if($("#tmp2").offset().top - $(this).scrollTop() + Number($("#tmp2").css("height").replace(/px$/, '')) < 0){
        navBar.css("position", "fixed");
        navBar.css("top", "0px")
    }
    else if ($(this).scrollTop() + Number($("#tmp2").css("height").replace(/px$/, '')) > 0){
        navBar.css("position", "relative")  
    }

    console.log($("#tmp2").offset().top - $(this).scrollTop() + Number($("#tmp2").css("height").replace(/px$/, '')));
    // console.log(Number($("#tmp2").css("height").replace(/px$/, '')))
    
});


