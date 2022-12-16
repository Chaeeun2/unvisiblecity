function inputvalue() {
    let value = document.getElementById('input').value;
    if (value == '건공이') {
        document.getElementById('second').innerHTML = "건공이는 잘 살아있을까요 건공이에 대한 설명을 여기에 쓰려고요 1학년 때는 조형관에서 자주 보였는데 요새는 법학관으로 옮겼다는 이야기가 있어요 건공이에 관한 텍스트는 에타에서 모을 수도 있을 것 같아요 댓글들을 모아보는 것도 재미있을 것 같아요 건공아 건강해 졸업하기 전엔 얼굴 한번 봐야지 건공이는 잘 살아있을까요 건공이에 대한 설명을 여기에 쓰려고요 1학년 때는 조형관에서 자주 보였는데 요새는 법학관으로 옮겼다는 이야기가 있어요 건공이에 관한 텍스트는 에타에서 모을 수도 있을 것 같아요 댓글들을 모아보는 것도 재미있을 것 같아요 건공아 건강해 졸업하기 전엔 얼굴 한번 봐야지 건공이는 잘 살아있을까요 건공이에 대한 설명을 여기에 쓰려고요 1학년 때는 조형관에서 자주 보였는데 요새는 법학관으로 옮겼다는 이야기가 있어요 건공이에 관한 텍스트는 에타에서 모을 수도 있을 것 같아요 댓글들을 모아보는 것도 재미있을 것 같아요 건공아 건강해 졸업하기 전엔 얼굴 한번 봐야지"
    }
    if (value == '빨간벽돌갤러리') {
        document.getElementById('second').innerHTML = "빨간벽돌갤러리는 미대생의 산무덤이에요 그곳에 있으면 어쩐지 기가 좀 빨려요 이제 곧 과제전이네요 설치 날 그곳에서 기가 다 빨려 올 걸 생각하니까 벌써부터 정신이 아득해요 그치만 그 공간이 꽉 채워졌을 때 그 뿌듯함은 이루말할 수 없어요 언젠가는 그 넓은 공간을 혼자 써볼 수도 있을까요? 빨간벽돌갤러리는 미대생의 산무덤이에요 그곳에 있으면 어쩐지 기가 좀 빨려요 이제 곧 과제전이네요 설치 날 그곳에서 기가 다 빨려 올 걸 생각하니까 벌써부터 정신이 아득해요 그치만 그 공간이 꽉 채워졌을 때 그 뿌듯함은 이루말할 수 없어요 언젠가는 그 넓은 공간을 혼자 써볼 수도 있을까요? 빨간벽돌갤러리는 미대생의 산무덤이에요 그곳에 있으면 어쩐지 기가 좀 빨려요 이제 곧 과제전이네요 설치 날 그곳에서 기가 다 빨려 올 걸 생각하니까 벌써부터 정신이 아득해요 그치만 그 공간이 꽉 채워졌을 때 그 뿌듯함은 이루말할 수 없어요 언젠가는 그 넓은 공간을 혼자 써볼 수도 있을까요?"
    }
}

function blue1() {
    $('.blue3').css('background', 'rgba(128, 0, 255, 0)')
    $('.blue2').css('background', 'rgba(128, 0, 255, 0)')
    $('.blue1').css('background', 'rgba(128, 0, 255, 1)')
    $('.blue4').css('opacity', '1')
    $('.blue5').css('opacity', '0.3')
    $('.blue6').css('opacity', '0.3')
}

function blue2() {
    $('.blue1').css('background', 'rgba(128, 0, 255, 0)')
    $('.blue3').css('background', 'rgba(128, 0, 255, 0)')
    $('.blue2').css('background', 'rgba(128, 0, 255, 1)')
    $('.blue5').css('opacity', '1')
    $('.blue4').css('opacity', '0.3')
    $('.blue6').css('opacity', '0.3')
}

function blue3() {
    $('.blue2').css('background', 'rgba(128, 0, 255, 0)')
    $('.blue1').css('background', 'rgba(128, 0, 255, 0)')
    $('.blue3').css('background', 'rgba(128, 0, 255, 1)')
    $('.blue6').css('opacity', '1')
    $('.blue4').css('opacity', '0.3')
    $('.blue5').css('opacity', '0.3')
}

function words() {
    setTimeout(blue1, 1000);
    setTimeout(blue2, 2000);
    setTimeout(blue3, 3000);
}

words();
setInterval(words, 3000);

function scroll() {
    $("#first").animate({ bottom: "0px" }, 50000, 'linear');
}

setTimeout(scroll, 4000)

$('.n01').click(function click(event) {
    var n = $("#n01")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n02').click(function click(event) {
    var n = $("#n02")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n03').click(function click(event) {
    var n = $("#n03")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n04').click(function click(event) {
    var n = $("#n04")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n05').click(function click(event) {
    var n = $("#n05")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n06').click(function click(event) {
    var n = $("#n06")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n07').click(function click(event) {
    var n = $("#n07")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n08').click(function click(event) {
    var n = $("#n08")
    var x = event.clientX;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n09').click(function click(event) {
    var n = $("#n09")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n10').click(function click(event) {
    var n = $("#n10")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n11').click(function click(event) {
    var n = $("#n11")
    var x = event.clientX;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n12').click(function click(event) {
    var n = $("#n12")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n13').click(function click(event) {
    var n = $("#n13")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

$('.n14').click(function click(event) {
    var n = $("#n14")
    var x = event.clientX - 50;
    var y = event.clientY;
    n.css({ "top": y, "left": x, "display": "inline-block", "position": "fixed" }).show();
    if (x >= 200) {
        n.css("text-align", "right")
    }
})

function img01() {
    $(".secondimg").attr("src", "resource/01.jpg")
}

function img02() {
    $(".secondimg").attr("src", "resource/02.jpg")
}

function img03() {
    $(".secondimg").attr("src", "resource/08.jpg")
}

function img04() {
    $(".secondimg").attr("src", "resource/09.jpg")
}

function img05() {
    $(".secondimg").attr("src", "resource/12.jpg")
}

function img06() {
    $(".secondimg").attr("src", "resource/14.jpg")
}

function img01() {
    $(".thirdimg").attr("src", "resource/01-1.jpg")
}

function img02() {
    $(".thirdimg").attr("src", "resource/02-1.jpg")
}

function img03() {
    $(".thirdimg").attr("src", "resource/08-1.jpg")
}

function img04() {
    $(".thirdimg").attr("src", "resource/09-1.jpg")
}

function img05() {
    $(".thirdimg").attr("src", "resource/12-1.jpg")
}

function img06() {
    $(".thirdimg").attr("src", "resource/14-1.jpg")
}



function imgchange() {
    setTimeout(img02, 4000)
    setTimeout(img03, 8000)
    setTimeout(img04, 12000)
    setTimeout(img05, 16000)
    setTimeout(img06, 20000)
    setTimeout(img01, 24000)
}

imgchange();
setInterval(imgchange, 24000);