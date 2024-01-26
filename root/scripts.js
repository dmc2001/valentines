$(document).ready(function(){
    $(document).click(function(event) {
        var text = $(event.target).text();
        console.log(event.target)
        console.log(text)
    });

    $('.card-front').click(function(event){
        event.stopPropagation();
        if($("#opened").is(':checked')){
            $('#opened').prop('checked', false);
        }
        else{
            $('#opened').prop('checked', true);
        }
      });

      $('.note').click(function(event){
        event.stopPropagation();
        if($("#opened").is(':checked')){
            $('#opened').prop('checked', false);
        }
        else{
            $('#opened').prop('checked', true);
        }
      });
    
    $('.title').click(function(event){
      $('.valentines-day-card').css('display', "none");
      $('.heartContainer').css('display', "block");
      $('.heartContainer').addClass('open');
      $('.ico').css('position', 'relative')
      $('.ico').css('top', '+=1500')
      $('.ico').css('left', '+=100')
      event.stopPropagation();
    });
    
    
    $('.close').click(function(){
      $('.valentines-day-card').css('display', "block");
      $('.heartContainer').css('display', "none");
      $('.heartContainer').removeClass('open');
      $('.ico').css('top', '-=1500')
      $('.ico').css('left', '-=100')
      $('#noButton').css("transform", "translate(0px, 0px)")
      $('.pyro').css('display', "none")
      $('#celebrationMessage').css('display', "none")
    });

    $('#yesButton').click(function(){
        $('.pyro').css('display', "block")
        $('#noButton').css("transform", "translate(0px, 0px)")
        $('#celebrationMessage').css('display', "block")
    })

    $('#noButton').click(function(){
        // if(window.innerWidth < 950){
            
        // }
        if($('.pyro').css('display') == "block"){
            alert('Lol sorry no take backs...')
        }
        else{
            alert('Wrong choice there buddy, pick again...')
        }
    })

    $('#noButton').mouseover(function(){
        console.log(window.screen.width)
        if(window.screen.width < 1200 || window.innerWidth < 1200){
            return
        }
        let matrix = $('#noButton').css("transform").toString().slice(7, -1).split(", ")
        console.log(matrix)
        if(matrix[4] == 0){
            $('#noButton').css("transform", "translate(400px,0px)")
        }
        else if(matrix[4] == -550 && matrix[5] == -430){
            $('#noButton').css("transform", "translate(-550px,0px)")
        }
        else if(matrix[4] == 400 && matrix[5] == -430){
            $('#noButton').css("transform", "translate(-550px, -430px)")
        }
        else if(matrix[4] == 400){
            $('#noButton').css("transform", "translate(400px, -430px)")
        }
        else if(matrix[4] == -550){
            $('#noButton').css("transform", "translate(400px,0px)")
        }
    })


  });