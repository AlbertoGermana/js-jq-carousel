/* ricreo lo slider come fatto questa mattina (o da zero, o partendo dall’html [ref sempre mio repo su github]);
faccio funzionare il tracciamento dei pallini anche in prev (stamattina lo abbiam fatto solo in next);
creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane rosso);
cerco di fare un refactoring del mio codice per renderlo il più chiaro, lineare, mantenibile e secco possibile (dobbiamo iniziare a farlo, e quindi prima del bonus) */ 

/* attendo il caricamento della pagina */
$(document).ready(function(){
    // al click della freccia sinistra
      $('.slider_left_arrow a').click(prevImg);
    
    // al click della freccia destra
      $('.slider_right_arrow').click(nextImg);
    
    // al click di un pallino
    $('.slider_circles i').click(dotFunction);

      // funzione next
    function nextImg() { 
        // salvo ref a img attiva al momento del click
        var imgActive = $('.slider_viewer img.active');        
        // salvo il pallino attivo
        var ballActive = $('.slider_circles i.active');
        
        // tolgo la classe active all'img selezionata
        imgActive.removeClass('active');
    
        // tolgo la classe active al pallino selezionato
        ballActive.removeClass('active');
    
        // verifico se questa img era l'ultima
        if(imgActive.hasClass('last')){
          $('.slider_viewer img.first').addClass('active');
          $('.slider_circles i.first').addClass('active');
        } else {
          // applica classe active alla prox img
          imgActive.next().addClass('active');
          ballActive.next().addClass('active');
          // console.log(imgActive.next());
      }
    }
    
    // funzione prevImg
     function prevImg() {
       // salvo ref a img attiva al momento del click
       var imgActive = $('.slider_viewer img.active');
       // salvo il pallino attivo
       var ballActive = $('.slider_circles i.active');
       // tolgo la classe active all'img selezionata
       imgActive.removeClass('active');
        // tolgo la classe active al pallino selezionato
       ballActive.removeClass('active');
       
       // verifico se questa img era la prima
       if(imgActive.hasClass('first')){
         $('.slider_viewer img.last').addClass('active');
         $('.slider_circles i.last').addClass('active');
       } else {
         // applica classe active alla prox img
         imgActive.prev().addClass('active');
         ballActive.prev().addClass('active')
         // console.log(imgActive.next());
       }
     }

     function dotFunction(){
         // salvo ref a img attiva al momento del click
        var imgActive = $('.slider_viewer img.active');
         // salvo il pallino attivo
        var ballActive = $('.slider_circles i.active');
        //elimino la classe active alle immagini
        imgActive.removeClass('active'); 
        //elimino la classe active ai pallini
        ballActive.removeClass('active');
        // memorizzo posizione del pallino che ho cliccato
        var clickedDot = $(this).index() + 1; 
        //aggiungo classe active all'immagine relativa al pallino cliccato
        $('.slider_viewer img:nth-child('+ clickedDot +')').addClass('active');
        //aggiungo classe active al pallino cliccato
        $('.slider_circles i:nth-child('+ clickedDot +')').addClass('active');
     }

     



    });


    /*   domanda 1
    nel caso dei pallini. anziche mettere tutti <i> come fratelli, metto tutte <a> sorelle al cui interno hanno <i>, come faccio a fare la successione cliccando sulla freccia? */