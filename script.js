$(document).ready(function() {
    $('.produto button').hover(function() {
        $(this).css('background-color', '#0056b3');
    }, function() {
        $(this).css('background-color', '#007bff');
    });

    $('.produto button').on('click', function() {
        $(this).text('Adicionado!').css('background-color', '#28a745');
        setTimeout(() => {
            $(this).text('Adicionar ao carrinho').css('background-color', '#007bff');
        }, 2000);
    });
});