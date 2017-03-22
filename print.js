//Print Error Messages
function printError(error){
  console.error(error.message);
}

// Function to print message to console
function printMessage(username, badgeCount, points){
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
}

module.exports.get = printError, printMessage;
