$(document).ready(function() {
    
    //Input Field Masks (tel/cep/cpf)
    inputMask();
    //Customized Validation
    formValidator();
});

function inputMask() {
    $('#telInput').mask('(00) 00000-00000', {
        placeholder: '(__) _____-____',
    });
    $('#postalInput').mask('00000-000', {
        placeholder: '_____-___',
    })
    $('#cpfInput').mask('000.000.000-00', {
        placeholder: '___.___.___.-__',
        reverse: true,
    })
};

//criar validação customizada

function formValidator() {
    //console.log('test25');
    $('form').validate({
        submitHandler: function() {
                $('input').val('');
        },
        invalidHandler: function(e, validator) {
            let incorrectInput = validator.numberOfInvalids();
            console.log(incorrectInput);

            if (incorrectInput) {
                alert(`Há ${incorrectInput} campos incorretos.`)
            }
        },
        rules: {
            nameInput: {
                required: true,
            },
            emailInput: {
                required: true,
                email: true
            },
            telInput: {
                required: true
            },
            adressInput: {
                required: false
            },
            postalInput: {
                required: true
            },
            cpfInput: {
                required: true
            }
        }
    });
};
