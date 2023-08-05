player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	player1Score = 0;
	player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("player_question").innerHTML = "Turno de Pergunta: " + player1Name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta: " + player2Name ;
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1)* parseInt(number2);
}
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
check_button = "<br> <br><button class='btn btn info' onclick='check()'>Checar</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1Score +1;
            document.getElementById("player1Score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2Score +1;
            document.getElementById("player2Score").innerHTML = update_player2_score;
        }
        }

if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player2Name ;
}
else

    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1Name ;
    }
    
if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player2Name ;
}
else

    {
        question_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player1Name ;
    }
document.getElementById("output").innerHTML = "";
}