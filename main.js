$(document).ready(function (){


    $('form').on('submit', function (e){
        e.preventDefault() 
        const inputNovo = $('#input-novo').val();
        const novoIntem = $(`<li> ${inputNovo} </li>`)
        novoIntem.appendTo(`ul`)
        $('#input-novo').val('') 
      
    })

    $('li').click(function(){
        $(this).addClass('class-com-risco')
    })


    $('#btn').click(function(){
        $('form').slideUp()
    })


        
    })

    
    

   
    

    
       












    
    
