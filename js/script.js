$(document).ready(function () {

    function validateName() {
        if ($('.name.error').length != 0) {
            $('.name.error').remove();
        }
        if ($('#name').val() == "") {
            $('#name').addClass('invalid');
            $('#name').removeClass('valid');
            $('#name-label').after('<div class = "error name">Please enter your name:</div>');
            return false;
        } else {
            $('#name').addClass('valid');
            $('#name').removeClass('invalid');
            return true;
        }
    }

    function validateEmail() {
        if ($('.email.error').length != 0) {
            $('.email.error').remove();
        }
        if ($('#mail').val() == "") {
            $('#mail').addClass('invalid');
            $('#mail').removeClass('valid');
            $('#mail-label').after('<div class = "error email">Please enter your email:</div>');
            return false;
        }
        else if (!($('#mail').val().indexOf('@') > -1 && $('#mail').val().indexOf('.') > -1)) {
            $('#mail').addClass('invalid');
            $('#mail').removeClass('valid');
            $('#mail-label').after('<div class = "error email">Please enter a valid email:</div>');
            return false;
        } else {
            $('#mail').addClass('valid');
            $('#mail').removeClass('invalid');
            return true;
        }
    }

    function validateEvents() {
        var counter = 0;
        $('.activities input').each(function () {
            if ($(this).prop("checked")) {
                counter += 1;
            }

        })
        if (counter != 0) {
            if ($('.error').length != 0) {
                $('.error').remove();
            }
            return true;
        } else {
            if ($('.error').length != 0) {
                $('.error').remove();
            }
            $('#register-label').after('<div class = "error">Please select an event to register for:</div>');
            return false;
        }
    }

    function validateCardNum() {
        if ($('.num .error').length != 0) {
            $('.num .error').remove();
        }
        if ($('#cc-num').val() == "") {
            $('#cc-num').addClass('invalid');
            $('#cc-num').removeClass('valid');
            $('#cc-label').after('<div class="error">Please enter a valid credit card number:');
            return false;
        } else if (/[a-z]/i.test($('#cc-num').val())) {
            $('#cc-label').after('<div class="error">Please enter a valid credit card number:');
            return false;
        } else if ($('#cc-num').val().length > 16 || $('#cc-num').val().length < 13) {
            $('#cc-label').after('<div class="error">Please enter a valid Credit Card number that is between 13 and 16 numbers:');
            $('#cc-num').addClass('invalid');
            $('#cc-num').removeClass('valid');
            return false;
        } else {
            $('#cc-num').addClass('valid');
            $('#cc-num').removeClass('invalid');
            return true;
        }
    }

    function validateZip() {
        if ($('.zip .error').length != 0) {
            $('.zip .error').remove();
        }
        if ($('#zip').val() == "") {
            $('#zip').addClass('invalid');
            $('#zip').removeClass('valid');
            $('#zip-label').after('<div class="error">Please enter a Zip Code:');
            return false;
        } else if (/[a-z]/i.test($('#zip').val())) {
            $('#zip-label').after('<div class="error">Please enter a valid Zip Code:');
            $('#zip').addClass('invalid');
            $('#zip').removeClass('valid');
            return false
        } else if ($('#zip').val().length != 5) {
            $('#zip-label').after('<div class="error">Please enter a valid 5-digit Zip Code:');
            $('#zip').addClass('invalid');
            $('#zip').removeClass('valid');
            return false;
        } else {
            $('#zip').addClass('valid');
            $('#zip').removeClass('invalid');
            return true;
        }
    }

    function validateCVV() {
        if ($('.cvv .error').length != 0) {
            $('.cvv .error').remove();
        }
        if ($('#cvv').val() == "") {
            $('#cvv').addClass('invalid');
            $('#cvv').removeClass('valid');
            $('#cvv-label').after('<div class="error">Please enter a CVV:');
            return false;
        } else if (/[a-z]/i.test($('#cvv').val())) {
            $('#cvv-label').after('<div class="error">Please enter a valid CVV:');
            $('#cvv').addClass('invalid');
            $('#cvv').removeClass('valid');
        } else if ($('#cvv').val().length != 3) {
            $('#cvv-label').after('<div class="error">Please enter a valid 3-digit CVV:');
            $('#cvv').addClass('invalid');
            $('#cvv').removeClass('valid');
        } else {
            $('#cvv').addClass('valid');
            $('#cvv').removeClass('invalid');
            return true;
        }
    }

    function validateCard() {
        if ($('#payment').val() == "credit card") {
            return validateCardNum() && validateZip() && validateCVV();
        } else {
            return true;
        }
    }

    function validateForm() {
        validateName();
        validateCard();
        validateEmail();
        validateEvents();
        return (validateName() && validateCard() && validateEmail() && validateEvents());
    }
    
    $('#name').focus();
    $('#other-title').hide();
    $('#other-label').hide();
    $('#paypal').hide();
    $('#bitcoin').hide();
    $('option[value = "select_method"]').hide();
    $('#colors-js-puns').hide();


    $('#title').change(function () {
        if ($(this).val() == "other") {
            $('#other-title').show();
            $('#other-label').show();
        } else {
            $('#other-title').hide();
            $('#other-label').hide();
        }
    })

    
    
    $('#design').change(function () {
        $('#color option').each(function () {
            $(this).removeAttr("selected")
        });
        if ($(this).val() == "js puns") {
            $('.js').hide();
            $('.puns').show();
            $('.puns').first().attr('selected', 'selected');
            $('#colors-js-puns').show();
        } else if ($(this).val() == "heart js") {
            $('.puns').hide();
            $('.js').show();
            $('.js').first().attr('selected', 'selected');
            $('#colors-js-puns').show();
        } else {
            $('.puns').show();
            $('.js').show();
            $('#color option').first().attr('selected', 'selected');
            $('#colors-js-puns').hide();
        }
    })

    var main = 200;
    var frameworks = 100;
    var libraries = 100;
    var express = 100;
    var node = 100;
    var build = 100;
    var npm = 100;
    var sum = 0;
    $('.activities input').change(function () {
        if ($(this).prop("checked")) {
            if ($(this).attr('name') == "all") {
                sum += main;
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "js-frameworks") {
                sum += frameworks;
                $('input[name = "express"]').attr("disabled", "disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "js-libs") {
                sum += libraries;
                $('input[name = "node"]').attr("disabled", "disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "express") {
                sum += express;
                $('input[name = "js-frameworks"]').attr("disabled", "disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "node") {
                sum += node;
                $('input[name = "js-libs"]').attr("disabled", "disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "build-tools") {
                sum += build;
                $('input[name = "npm"]').attr("disabled", "disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "npm") {
                sum += npm;
                $('input[name = "build-tools"]').attr("disabled", "disabled");
                $('#cost').html("$" + sum);
            }
        } else {
            if ($(this).attr('name') == "all") {
                sum -= main;
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "js-frameworks") {
                sum -= frameworks;
                $('input[name = "express"]').removeAttr("disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "js-libs") {
                sum -= libraries;
                $('input[name = "node"]').removeAttr("disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "express") {
                sum -= express;
                $('input[name = "js-frameworks"]').removeAttr("disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "node") {
                sum -= node;
                $('input[name = "js-libs"]').removeAttr("disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "build-tools") {
                sum -= build;
                $('input[name = "npm"]').removeAttr("disabled");
                $('#cost').html("$" + sum);
            } else if ($(this).attr('name') == "npm") {
                sum -= npm;
                $('input[name = "build-tools"]').removeAttr("disabled");
                $('#cost').html("$" + sum);
            }
        }
    });

    $('#payment').change(function () {
        if ($('#payment').val() == "credit card") {
            $('#credit-card').show();
            $('#paypal').hide();
            $('#bitcoin').hide();
        } else if ($('#payment').val() == "paypal") {
            $('#credit-card').hide();
            $('#paypal').show();
            $('#bitcoin').hide();
        } else if ($('#payment').val() == "bitcoin") {
            $('#credit-card').hide();
            $('#paypal').hide();
            $('#bitcoin').show();
        }
    });

    $('#name').blur(validateName);
    $('#mail').keyup(validateEmail);
    $('#cc-num').keyup(validateCardNum);
    $('#zip').keyup(validateZip);
    $('#cvv').blur(validateCVV);
    $('.activities input').change(validateEvents)
    

    $('#form').submit(function (e) {
        if(!validateForm()) {
           e.preventDefault();
        }
    })
});
