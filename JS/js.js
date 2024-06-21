$(document).ready(function () {
    $('#btnValidate').click(function () {
        let input = $('#input').val()

        checkPalindrome(input);

    });

    function checkPalindrome(str) {

        str = str.replace(/ /g, '').toLowerCase();
        strReverse = str.split('').reverse().join('');

        if (str == '' || str != strReverse) {
            $('#resultContainer').html(`<h2 class="text-danger fs-4 fw-bold">"${str}" It is not a palindrome</h2>`);
        } else if (str == strReverse) {
            $('#resultContainer').html(`<h2 class="text-success fs-4 fw-bold">"${str}" It is a palindrome</h2>`);
        }

    }
});