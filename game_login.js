function adduser(){
    var player1_input= document.getElementById("player1-name-input").value;
    var player2_input= document.getElementById("player2-name-input").value;
    localStorage.setItem("player1",player1_input);
    localStorage.setItem("player2",player2_input);
    window.location= "game_page.html";
}