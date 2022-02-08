$(document).ready(function() {
    $("div.rivalCard").click(function(){
        alert("Your oppenent choise");
    });
    $("div#rock").click(function(){
        $("div#paper").hide()
        $("div#scissors").hide()
        let n = Math.floor((Math.random() * 3) + 1);
        if (n === 1) {
            $("div#rival img").attr("src","img/rock.png")
        } else if (n === 3) {
            $("div#rival img").attr("src","img/paper.png")
        } else {
            $("div#rival img").attr("src","img/scissors.png")
        }
    });
    $("div#paper").click(function(){
        alert("Paper!!");
    });
    $("div#scissors").click(function(){
        alert("Scissors!!");
    })
});