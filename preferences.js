const Store = require('electron-store');
const store = new Store();

document.getElementById('webviewOAIEnabled').checked = store.get('webviewOAIEnabled', true);
document.getElementById('webviewBARDEnabled').checked = store.get('webviewBARDEnabled', true);
document.getElementById('webviewCLAUDEEnabled').checked = store.get('webviewCLAUDEEnabled', true);
document.getElementById('isWindowPinned').checked = store.get('isWindowPinned', true);

document.getElementById('webviewOAIEnabled').addEventListener('change', (event) => {
    store.set('webviewOAIEnabled', event.target.checked);
});

document.getElementById('webviewBARDEnabled').addEventListener('change', (event) => {
    store.set('webviewBARDEnabled', event.target.checked);
});

document.getElementById('webviewCLAUDEEnabled').addEventListener('change', (event) => {
    store.set('webviewCLAUDEEnabled', event.target.checked);
});

document.getElementById('isWindowPinned').addEventListener('change', (event) => {
    store.set('isWindowPinned', event.target.checked);
});

document.getElementById('save').addEventListener('click', () => {

    console.log('save clicked');

    // Save the user's preferences
    const webviewOAIEnabled = document.getElementById('webviewOAIEnabled').checked;
    const webviewBARDEnabled = document.getElementById('webviewBARDEnabled').checked;
    const webviewCLAUDEEnabled = document.getElementById('webviewCLAUDEEnabled').checked;
    const isWindowPinned = document.getElementById('isWindowPinned').checked;
    store.set('webviewOAIEnabled', webviewOAIEnabled);
    store.set('webviewBARDEnabled', webviewBARDEnabled);
    store.set('webviewCLAUDEEnabled', webviewCLAUDEEnabled);
    store.set('isWindowPinned', isWindowPinned);

    // Close the preferences window
    window.close();
});
