const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;
  
  // Show the install button
  butInstall.style.display = 'block';
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    
    // Hide the install button
    butInstall.style.display = 'none';
    
    // Log the user's choice
    console.log(`User choice: ${choiceResult.outcome}`);
  }
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // PWA installation successful
  console.log('App installed successfully!');
});
