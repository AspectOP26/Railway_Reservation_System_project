
var PhoneError = document.getElementById('Phone-error');
var AddressError = document.getElementById('Address-error');
var DOBError = document.getElementById('DOB-error');

function validatePhone() {
    var phone = document.getElementById('pm').ariaValueMax;

    if (phone.length == 0) {
        PhoneError.innerHTML = 'Phone No is required';
        return false;
    }
    if (phone.length !== 10) {
        PhoneError.innerHTML = 'Phone No should bt 10 digit';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        nameError.innerHTML = 'only digit';
        return false;
    }
    
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}