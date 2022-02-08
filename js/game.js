$(document).ready(function() {
    $("div.rivalCard").click(function(){
        alert("Your oppenent choise");
    });
    $("div#rock").click(function(){
        $("div#paper").hide()
        $("div#scissors").hide()

        let n = Math.floor((Math.random() * 3) + 1);

        if (n === 1) {  // Draw
            $("div#rival img").attr("src","img/rock.png")
            alert("Draw :0");
        } else if (n === 3) {  // Lose
            $("div#rival img").attr("src","img/paper.png")
            alert("You lose :(");
        } else {  // Win
            $("div#rival img").attr("src","img/scissors.png")
            alert("You win!! Congratulations! :D");
        }
    });
    $("div#paper").click(function(){
        $("div#rock").hide()
        $("div#scissors").hide()

        let n = Math.floor((Math.random() * 3) + 1);

        if (n === 1) {  // Win
            $("div#rival img").attr("src","img/rock.png")
            alert("You win!! Congratulations! :D");
        } else if (n === 3) {  // Draw
            $("div#rival img").attr("src","img/paper.png")
            alert("Draw :0");
        } else {  // Lose
            $("div#rival img").attr("src","img/scissors.png")
            alert("You lose :(");
        }
    });
    $("div#scissors").click(function(){
        $("div#rock").hide()
        $("div#paper").hide()

        let n = Math.floor((Math.random() * 3) + 1);

        if (n === 1) {  // Lose
            $("div#rival img").attr("src","img/rock.png")
            alert("You lose :(");
        } else if (n === 3) {  // Win
            $("div#rival img").attr("src","img/paper.png")
            alert("You win!! Congratulations! :D");
        } else {  // Draw
            $("div#rival img").attr("src","img/scissors.png")
            alert("Draw :0");
        }
    })
});