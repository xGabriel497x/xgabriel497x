function showMessage() {
    let messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';
    messageBox.style.zIndex = '1000';
}
function closeMessage() {
    document.getElementById('messageBox').style.display = 'none';
}
function dedicateSong() {
    window.open('https://www.youtube.com/watch?v=Scq65uGROKk', '_blank');
}
function showHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💕';
        document.body.appendChild(heart);
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}