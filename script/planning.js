function downloadChecklist() {
    
    const content = `Emergency Kit Checklist
    
1. Water (1 gallon per person per day for at least 3 days)
2. Food (3-day supply of non-perishable food)
3. Battery-powered or hand crank radio
4. Flashlight and extra batteries
5. First aid kit
6. Whistle to signal for help
7. Dust masks, plastic sheeting, and duct tape
8. Moist towelettes, garbage bags
9. Wrench or pliers
10. Manual can opener
11. Cell phone with chargers and backup battery
12. Important documents in waterproof container
13. Cash and change
14. Emergency blankets
15. Change of clothes and sturdy shoes`;

    
    const blob = new Blob([content], { type: 'text/plain' });
    
   
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'emergency-kit-checklist.txt';
    
   
    document.body.appendChild(downloadLink);
    
   
    downloadLink.click();
    
    
    document.body.removeChild(downloadLink);
    
   
    showNotification('Downloading Emergency Kit Checklist...');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}