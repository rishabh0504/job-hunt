const validation = {
    firstName: '^[a-zA-Z]+$',
    lastName: '^[a-zA-Z]+$',
    contactNumber: '^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$',
    emailId: '^\S+@\S+$',
    dateOfBirth: '.*',
    countryOfResidence: '^[a-zA-Z]+$',
    nationality: '^[a-zA-Z]+$',
    gender: '^[a-zA-Z]+$'
};

const UserErrors = {
    firstName: false,
    lastName: false,
    contactNumber: false,
    emailId: false,
    dateOfBirth: false,
    nationality: false,
    countryOfResidence: false,
    gender: false
}

export {
    validation,
    UserErrors
}