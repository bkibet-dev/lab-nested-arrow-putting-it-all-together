const createLoginTracker = (userInfo) => {

  let attemptCount = 0;

  return (passwordAttempt) => {

    if (attemptCount >= 3) { //An if statement that checks if the attemptCount is greater than or equal to 3. If it is, it returns a message indicating that the account is locked due to too many failed login attempts.
      return "Account locked due to too many failed login attempts.";
    }

    attemptCount++;
    console.log(`[DEBUG] Attempt #${attemptCount} | Input password: "${passwordAttempt}" `); // A console log statement that outputs the current attempt number and the password that was attempted. 

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {

      if (attemptCount === 3) {
        return "Login failed. Account locked due to too many failed login attempts";
      }
      return `Login attempt ${attemptCount}: Login failed`;
    }
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};