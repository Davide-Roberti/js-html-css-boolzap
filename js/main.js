$(document).ready(function(){
    $('.invio').click(function(){
        var messageText = $('#testo-messaggio').val();
        $('#testo-messaggio').val('');
        var messaggioTipo = $('.template-messaggio .message').clone().addClass('sent');
        messaggioTipo.find('.true-message').text(messageText);
        messaggioTipo.find('.orario-messaggio').text('11.32');
        $('.container-messaggi').append(messaggioTipo);
    });

    
});
