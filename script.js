// Dynamic Star Background Generation
document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.getElementById("stars-container");
    const starCount = 60; // Adjust star frequency

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        
        // Random placement
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (tiny and elegant like the logo stars)
        const size = Math.random() * 2 + 1;
        
        // Random animation delay so they pulse asynchronously
        const delay = Math.random() * 5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        // Colors slightly blending white/gold
        const colors = ["#ffffff", "#ffd700", "#a5b4fc"];
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        starsContainer.appendChild(star);
    }
});

// Interactive Tilt/Glow Effect on Mouse Hover (Energetic Detail)
const cards = document.querySelectorAll('.member-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Dynamic angle calculation based on cursor position
        const xPercent = (x / rect.width - 0.5) * 10; // limit tilt range
        const yPercent = (y / rect.height - 0.5) * 10;
        
        card.style.transform = `translateY(-10px) rotateX(${-yPercent}deg) rotateY(${xPercent}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});