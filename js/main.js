$(document).ready(function(){
    $('.invio').click(function(){
        var messageText = $('#testo-messaggio').val();
        $('#testo-messaggio').val('');
        var messaggioTipo = $('.template-messaggio .message').clone().addClass('sent');
        messaggioTipo.find('.true-message').text(messageText);
        messaggioTipo.find('.orario-messaggio').text(orarioAttuale);
        $('.container-messaggi').append(messaggioTipo);
    });

    function orarioAttuale () {
        var data = new Date();
        var oraNow = data.getHours();
        var minutiNow = data.getMinutes();
        var tempoNow = oraNow + '.' + minutiNow;
        return tempoNow;
    }
});
