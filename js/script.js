// blue fish
$("#fish2Id").hover(function () {
    $(this).stop(true);
    moveRandom($(this));
    moveFish("#fish2Id", 7000);
});

function moveRandom(refer) {
    var posY = getRandom(0, $(document).height() - 100);
    var posX = getRandom(0, $(document).width() - 100);
    $(refer).animate({
        left: posX,
        top: posY
    }, 1000);
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// orange fish
$(document).click(function (event) {
    $("#fish1Id").stop(true);
    $("#fish1Id").animate({
        left: event.pageX - 100,
        top: event.pageY - 100
    }, 700);
    moveFish("#fish1Id", 6100);
});
$("#fish1Id").dblclick(function () {
    $(this).stop(true).animate({
        height: 400,
        width: 400
    });
    setTimeout(function () {
        $("#fish1Id").animate({
            width: 250,
            height: 250
        }, 500);
    }, 3000); // smaller after 3 seconds
    setTimeout(function () {
        moveFish("#fish1Id", 6100);
    }, 4000); // starts to move after 4 seconds
});


// fishs movements
function moveFish(refer, speed) {

    var posY = 0;
    posY = getRandom(0, $(document).height() - 200);
    var posX = 0;
    posX = getRandom(0, $(document).width() - 200);

    $(refer).animate({
        top: posY,
        left: posX
    }, speed, function () {
        moveFish(refer, speed)
    });
};
$(document).ready(function () {
    moveFish("#fish1Id", 4500)
});
$(document).ready(function () {
    moveFish("#fish2Id", 5000)
});

// bubbles movements
function move_boubble(refer, speed) {
    var posX = 0;
    posX = getRandom(0, $(document).width() - 100);
    var posY = 0;
    posY = $(document).height() + 100;
    $(refer).offset({
        top: posY,
        left: posX
    });
    $(refer).animate({
        left: posX,
        top: -100 // over  top 
    }, speed, function () {
        move_boubble(refer, speed)
    });
}
$(document).ready(function () {
    move_boubble("#bubble1Id", getRandom(8000, 9000))
    //speed for bubble 1
});
$(document).ready(function () {
    move_boubble("#bubble2Id", getRandom(6000, 7000))
}); //speed for bubble 2
$(document).ready(function () {
    move_boubble("#bubble3Id", getRandom(5000, 6000))
}); //speed for bubble 3

function bubbles_fadeOut(refer, speed) {
    $(refer).stop(true);
    $(refer).fadeOut;
    move_boubble(refer, speed);
}
$('#bubble1Id, #bubble2Id, #bubble3Id').click(function () {
    bubbles_fadeOut($(this), 8000)
});
