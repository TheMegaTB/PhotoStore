/**
 *
 * @param selectType - 0: not selected; 1: digital only; 2: print only; 3 digital + print
 * @returns {number}
 */
export function calculatePrice(selectType) {
    if      (selectType == 0) return 0;
    else if (selectType == 1) return 1;
    else if (selectType == 2) return 2;
    else                      return 1.5;
}

/**
 * Checks if the given email is a valid one
 * @param email - the email
 * @returns {boolean}
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}