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

    var sourceContatti = $('#contatto-template').html();
    var templateContatto = Handlebars.compile(sourceContatti);


    var listaContatti = [
        {
            numeroConversazione: 0,
            linkImmagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F512x512%2F2016%2F08%2F18%2F810272_user_512x512.png&f=1&nofb=1',
            nomeContatto: 'Gino'
        },
        {
            numeroConversazione: 1,
            linkImmagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822747_user_512x512.png&f=1&nofb=1',
            nomeContatto: 'Piero'
        },
        {
            numeroConversazione: 2,
            linkImmagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fptetutorials.com%2Fimages%2Fuser-profile.png&f=1&nofb=1',
            nomeContatto: 'Ugo'
        },
        {
            numeroConversazione: 3,
            linkImmagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822727_user_512x512.png&f=1&nofb=1',
            nomeContatto: 'Jessica'
        },
        {
            numeroConversazione: 4,
            linkImmagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Favatars-1-5%2F136%2F87-512.png&f=1&nofb=1',
            nomeContatto: 'Lina'
        },
        {
            numeroConversazione: 5,
            linkImmagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F146%2F146025.png&f=1&nofb=1',
            nomeContatto: 'Pina'
        },
        {
            numeroConversazione: 6,
            linkImmagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1&nofb=1',
            nomeContatto: 'Esmeralda'
        },
        {
            numeroConversazione: 7,
            linkImmagine: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Nuy39yqcMREaqhbbevS-YgHaHa%26pid%3DApi&f=1',
            nomeContatto: 'Harry'
        }
    ];

    // console.log(listaContatti.length);
    for (var i = 0; i < listaContatti.length; i++) {
        var contattoTipo = templateContatto(listaContatti[i]);
        // console.log(contattoTipo);
        $('.barra-contatti').append(contattoTipo);
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
