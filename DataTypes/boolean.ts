var isLoggedIn: boolean = true;
var hasAccess: boolean = false;
var age: number = 25;
var isAdult: boolean = age >= 18;

console.log(typeof isLoggedIn);
console.log("User logged in:", isLoggedIn);
console.log("User has access:", hasAccess);
console.log("Is the user an adult?", isAdult);

var canViewDashboard: boolean = isLoggedIn && isAdult;
console.log("Can view dashboard?", canViewDashboard);

var canEditProfile: boolean = hasAccess || isLoggedIn;
console.log("Can edit profile?", canEditProfile);

var isAdmin: boolean = false;
var canDeletePost: boolean = hasAccess && !isAdmin;
console.log("Can delete post?", canDeletePost);
