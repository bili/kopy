$(function() {
    $('.copy').on('click', function() {
        var txt = $('.text').val();
        Clipboard.copy(txt);
    });
});
