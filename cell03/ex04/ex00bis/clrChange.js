// hex clr format
$(document).ready(function() {
    function createRandomClr() {
        const s = "0123456789ABCDEF";
        let clr = "#";
        for (let i = 0; i < 6; i++) {
            clr += s[Math.floor(Math.random() * 16)];
        }
        return clr;
    }

    $('#colorButton').on('click', function() {
        $('body').css('background-color', createRandomClr());
    });

});
