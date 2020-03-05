$(document).ready(function(){
    $('.invio').click(function(){
        invioMessaggio();

        setTimeout(messaggioRicevuto, 1000); 
    });

    function invioMessaggio () {
        var messageText = $('#testo-messaggio').val();
        $('#testo-messaggio').val('');
        var messaggioTipo = $('.template-messaggio .message').clone().addClass('sent');
        messaggioTipo.find('.true-message').text(messageText);
        messaggioTipo.find('.orario-messaggio').text(orarioAttuale);
        $('.container-messaggi').append(messaggioTipo);
    };

    function messaggioRicevuto () {
        var messageText = 'Vabbé'
        var messaggioTipo = $('.template-messaggio .message').clone().addClass('received');
        messaggioTipo.find('.true-message').text(messageText);
        messaggioTipo.find('.orario-messaggio').text(orarioAttuale);
        $('.container-messaggi').append(messaggioTipo);
    };

    function orarioAttuale () {
        var data = new Date();
        var oraNow = addZero(data.getHours());
        var minutiNow = addZero(data.getMinutes());
        var tempoNow = oraNow + '.' + minutiNow;
        return tempoNow;
    }

    function addZero(i) {
        if (i < 10) {
        i = "0" + i;
        }
        return i;
    }
});
