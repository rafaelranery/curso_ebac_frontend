$(document).ready(function() {
    
    
    // btn adicionar atividade
    $('button').click(function(e) {
        e.preventDefault();
        
        let activityInput = $('#activity-input').val();

        let newActivity = `<li>${activityInput}</li>`;
        let activityList = $('ul');

        $(newActivity).appendTo(activityList);

        $('#activity-input').val('');
    });

    // Atividade feita estilização
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('done')
        // $(this) => seleciona o li em que disparou 
    })

})
