// Codeing Right Click Disable Start

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Codeing Right Click Disable End


// Website Responsive Check Disable [Shift + Ctrl + I Disable] Start

window.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.ctrlKey && e.key === 'I') {
        e.preventDefault();
    }
});

// Website Responsive Check Disable [Shift + Ctrl + I Disable] End


// Website Responsive Check Disable [F12 Disable] Start

document.onkeydown = function (event) {
    if (event.keyCode == 123) {
        return false;
    }
}

// Website Responsive Check Disable [F12 Disable] End


// Codeing Hide [Ctrl + U Disable] Start

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
    }
});

// Codeing Hide [Ctrl + U Disable] End


// Codeing Save Disable [Ctrl + S Disable] Start

document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
    }
});

// Codeing Save [Ctrl + S Disable] Disable End


// Codeing Print Disable [Ctrl + P Disable] Start

window.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.keyCode === 80) {
        event.preventDefault();
    }
});

// Codeing Print Disable [Ctrl + P Disable] End


// File Open Disable [Ctrl + O Disable] Start

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'o' || event.keyCode === 79)) {
        event.preventDefault();
    }
});

// File Open Disable [Ctrl + O Disable] End


// Codeing Refresh And Leave Disable Start

// window.addEventListener('beforeunload', function (event) {
//     event.preventDefault();
//     event.returnValue = '';
//     return 'You Want Leave This Site?';
// });

// Codeing Refresh And Leave Disable End