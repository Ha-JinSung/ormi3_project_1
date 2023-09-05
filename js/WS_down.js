$DW_BTN.addEventListener('click', () => {
    WS_Down();
});

function WS_Down() {
    const WS_DownDate = JSON.stringify($saved_WS, null, 1).replace(/\\"/g, "");
    const blob = new Blob([WS_DownDate], { type: 'application/json' });
    const WS_DownLink = document.createElement('a');
    WS_DownLink.href = URL.createObjectURL(blob);
    WS_DownLink.download = '명언 리스트.txt';
    WS_DownLink.style.display = 'none';
    document.body.appendChild(WS_DownLink);
    WS_DownLink.click();
    document.body.removeChild(WS_DownLink);
}