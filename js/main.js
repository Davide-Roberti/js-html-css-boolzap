$(document).ready(function(){
    var source = $('#messaggio-template').html();
    var template = Handlebars.compile(source);

    function messaggioCreate(testoMessaggio, classeMessaggio, selettoreConversazione) {
        var composizioneMessaggio = {
            messageText: testoMessaggio,
            messageKind: classeMessaggio
        };
        var templateMessaggio = template(composizioneMessaggio);
         $(selettoreConversazione).append(templateMessaggio);
    }

    var messaggiArchiviati = {
        c0: [
            {
                messageText: 'hey Gino, come va?',
                messageKind: 'sent'
            },
            {
                messageText: 'non male zio',
                messageKind: 'received'
            }
        ],
        c1: [
            {
                messageText: 'hey Piero, come va?',
                messageKind: 'sent'
            },
            {
                messageText: 'non male zio',
                messageKind: 'received'
            }
        ],
        c2: [
            {
                messageText: 'hey Ugo, come va?',
                messageKind: 'sent'
            },
            {
                messageText: 'non male zio',
                messageKind: 'received'
            }
        ],
        c3: [
            {
                messageText: 'hey Jessica, come va?',
                messageKind: 'sent'
            },
            {
                messageText: 'non male zio',
                messageKind: 'received'
            }
        ],
        c4: [
            {
                messageText: 'hey Lina, come va?',
                messageKind: 'sent'
            },
            {
                messageText: 'non male zio',
                messageKind: 'received'
            }
        ],
        c5: [
            {
                messageText: 'hey Pina, come va?',
                messageKind: 'sent'
            },
            {
                messageText: 'non male zio',
                messageKind: 'received'
            }
        ],
        c6: [
            {
                messageText: 'hey Esmeralda, come va?',
                messageKind: 'sent'
            },
            {
                messageText: 'non male zio',
                messageKind: 'received'
            }
        ],
        c7: [
            {
                messageText: 'hey Harry, come va?',
                messageKind: 'sent'
            },
            {
                messageText: 'mi fa male la cicatrice',
                messageKind: 'received'
            }
        ],
    };

    for (var convKey in messaggiArchiviati) {
        var indiceConversazione = convKey[1];
        console.log(indiceConversazione);
        for (var i = 0; i < convKey.length; i++) {
            var oggettoMessaggio = messaggiArchiviati[convKey][i];
            var messageText = oggettoMessaggio.messageText;
            var messageKind = oggettoMessaggio.messageKind;

            var selettoreConversazione = $('.container-messaggi[data-codice-utente="' + indiceConversazione + '"]');
                messaggioCreate(messageText, messageKind, selettoreConversazione);
        }
    }




    $('.barra-contatti div.contatto').click(function() {
        $('div.contatto').removeClass('contatto-selezionato');
        $(this).addClass('contatto-selezionato');
        var identificativoContatto = $(this).data('codiceUtente');
        var nomeUtente = $(this).find('h5').text();
        var immagineProfilo = $(this).children('img').attr('src');
        $('div.contatto-attuale').children('img').attr('src', immagineProfilo);
        $('div.contatto-attuale').find('h5').text(nomeUtente);
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

    $(document).on('click', '.insieme-messaggio .apri-menu', function(){
        $('.menu-finestrella').removeClass('menu-attivo');
        $(this).children('.menu-finestrella').addClass('menu-attivo');
    });

    $(document).on('click', '.erase', function(){
        $(this).parentsUntil('.message').addClass('cancellato');
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

    // function messaggioCreate (testoMessaggio, classeMessaggio) {
    //     var messageText = 'Vabbé'
    //     var messaggioTipo = $('.template-messaggio .message').clone().addClass(classeMessaggio);
    //     messaggioTipo.find('.true-message').text(testoMessaggio);
    //     messaggioTipo.find('.orario-messaggio').text(orarioAttuale);
    //     $('.container-messaggi.active').append(messaggioTipo);
    // }

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
