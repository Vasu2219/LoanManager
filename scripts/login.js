// login.js

// Function to handle Google Sign-In success
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Store user information in localStorage
    localStorage.setItem('userProfile', JSON.stringify({
        id: profile.getId(),
        name: profile.getName(),
        imageUrl: profile.getImageUrl(),
        email: profile.getEmail()
    }));

    // Redirect to the main page
    window.location.href = 'index.html';
}

// Load the Google API client and initialize the sign-in button
function initGoogleSignIn() {
    gapi.signin2.render('googleSignInBtn', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSignIn
    });
}

window.onload = function() {
    initGoogleSignIn();
};
