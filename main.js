function StartGame() {
    document.track = 'X';
    for (var i = 1; i < 9; i++) {
        Clear(numbers);
    }
}

function Msg(str) {
    var message = document.getElementsByClassName('message')[0];
    message.innerHTML = str;
}

function NextMove(square) {
    if (square.innerHTML == '') {
        SwitchTurn(square);
    }
}

function SwitchTurn(square) {
    square.innerHTML = document.track;
    if (CheckForWinner(document.track)) {
        Msg(document.track + ', is winner !!!');
        document.getElementsByClassName('message')[0].style.color = "green";

    } else if (document.track == 'X') {
        document.track = 'O';
        Msg('Next Turn is ' + document.track);
    } else {
        document.track = 'X';
        Msg('Next Turn is ' + document.track);
    }
}

function CheckForWinner(move) {
    var result = false;
    if (CheckRow(1, 2, 3, move) ||
        CheckRow(4, 4, 6, move) ||
        CheckRow(7, 8, 9, move) ||
        CheckRow(1, 4, 7, move) ||
        CheckRow(2, 5, 8, move) ||
        CheckRow(3, 6, 9, move) ||
        CheckRow(1, 5, 9, move) ||
        CheckRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function CheckRow(a, b, c, move) {
    var result = false;
    if (GetBox(a) == move && GetBox(b) == move && GetBox(c) == move) {
        result = true;
    }
    return result;
}

function GetBox(number) {
    return document.getElementById('s' + number).innerHTML;
}

function Clear(numbers) {
         document.getElementById('s' + numbers).innerHTML = '';
}