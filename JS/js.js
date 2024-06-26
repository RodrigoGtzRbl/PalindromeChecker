$(document).ready(function () {
    $('#btnValidate').click(function () {
        let input = $('#input').val()

        checkPalindrome(input);

    });

    function checkPalindrome(str) {

        str = str.replace(/ /g, '').toLowerCase();
        strReverse = str.split('').reverse().join('');

        if (str == '') {
            $('#resultContainer').html(`<h2 class="text-warning fs-4 fw-bold">Insert a valid string</h2>`);
        } else if (str == strReverse) {
            $('#resultContainer').html(`<h2 class="text-success fs-4 fw-bold">"${str}" It is a palindrome</h2>`);
        } else {
            $('#resultContainer').html(`<h2 class="text-danger fs-4 fw-bold">"${str}" It is not a palindrome</h2>`);
        }

    }
});