$(document).ready(function(){
    $('div.contatto').click(function() {
        var identificativoContatto = $(this).data('codiceUtente');
        $('div.container-messaggi').each(function() {
            if(identificativoContatto == $(this).data('codiceUtente')) {
            $('div.container-messaggi').removeClass('active');
            $(this).addClass('active');
            }
        });
    });

    $('.invio').click(function(){
        generaMessaggi();
    });

    $('#testo-messaggio').keyup(function(event) {
        if(event.keyCode === 13) {
            generaMessaggi();
        }
    });

    $('#strumento-ricerca').keyup(function(event) {
        var carattereDigitato = $(this).val().toLowerCase();
        console.log(carattereDigitato);
        $('.barra-contatti .contatto').each(function() {
            if ($(this).find('h5').text().toLowerCase().includes(carattereDigitato)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('#testo-messaggio').focus(function() {
        $('#icona-invio').toggleClass('fa fa-microphone fas fa-paper-plane');
    }).blur(function () {
        $('#icona-invio').toggleClass('fa fa-microphone fas fa-paper-plane');
    });

    function generaMessaggi () {
            var messageText = $('#testo-messaggio').val();
            $('#testo-messaggio').val('')
            if (messageText.trim().length > 0) {
                messaggioCreate(messageText, 'sent');
                autoScrolla();
                setTimeout(function() {
                    messaggioCreate('vabbé', 'received');
                    autoScrolla();
                }, 1000);
            }
    }

    function messaggioCreate (testoMessaggio, classeMessaggio) {
        var messageText = 'Vabbé'
        var messaggioTipo = $('.template-messaggio .message').clone().addClass(classeMessaggio);
        messaggioTipo.find('.true-message').text(testoMessaggio);
        messaggioTipo.find('.orario-messaggio').text(orarioAttuale);
        $('.container-messaggi.active').append(messaggioTipo);
    }

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
    }
});
