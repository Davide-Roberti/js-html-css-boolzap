$(document).ready(function(){
    $('.invio').click(function(){
        invioMessaggio();
        autoScrolla();
        setTimeout(function() {
            messaggioRicevuto();
            autoScrolla();
        }, 1000);
    });

    $('#testo-messaggio').keyup(function(event) {
        if(event.keyCode === 13) {
            invioMessaggio();
            autoScrolla();
            setTimeout(function() {
                messaggioRicevuto();
                autoScrolla();
            }, 1000);
        };
    });

    $('#strumento-ricerca').keyup(function(event) {
        var carattereDigitato = $(this).val().toLowerCase();
        console.log(carattereDigitato);
        $('.barra-contatti .contatto').each(function() {
            if ($(this).find('h5').text().toLowerCase().includes(carattereDigitato)) {
                $(this).show();
            } else {
                $(this).hide();
            };
        });
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

    function autoScrolla() {
      var fondoPagina = document.getElementById('scroll-down');
      fondoPagina.scrollTop = fondoPagina.scrollHeight;
    };
});
