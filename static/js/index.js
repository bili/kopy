$(function() {
    $('.copy').on('click', function() {
        var txt = $('.text').val();
        Kopy.copy(txt);
    });
});
