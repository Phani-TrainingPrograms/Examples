function generateOtp() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    /**
     * Math.random gives a random no from 0 to 1
     * Shall add 100000 to it to make it a whole no and Multiply it by 900000 to generate num a 6 digit decimal
     * Floor removes the decimals to the upper nearest integer. 
     */
    return otp;
}


generateOtp();