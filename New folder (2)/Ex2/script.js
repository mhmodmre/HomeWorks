let usersId = [1, 2, 3, 4, 5, 6];
function callGoogleUsers(idInfo, kishkush, balabush) {
  if (usersId.includes(idInfo)) {
    kishkush(idInfo);
  } else {
    balabush();
  }
}
function success(idInfo) {
  console.log(
    "The information regarding user " + idInfo + " has been retreived."
  );
}
function failure() {
  console.log("There is no such user in the database.");
}

callGoogleUsers(4, success, failure);
