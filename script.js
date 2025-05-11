document.addEventListener('DOMContentLoaded', () => {
    const sectionButtons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('section');
  
    sectionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
      });
    });
  
    document.getElementById('revealButton').addEventListener('click', () => {
      document.getElementById('cardMessage').style.display = 'block';
    });
  
    const quotes = [
        "A mother is like a ray of sunshine on a cloudy day.",
        "Nature paints the flowers, mothers paint our hearts.",
        "The Earth blooms, just like a mother’s endless love.",
        "You're the wildflower in our garden of life.",
        "A mother's love is the seed from which all kindness grows.",
        "Like the moon to the tide, your love pulls us gently forward.",
        "Through every season, a mother’s love remains evergreen.",
        "Mothers are the gentle breeze in the chaos of life.",
        "Your care roots us deeply and helps us reach high.",
        "A hug from Mom is like wrapping up in springtime warmth.",
        "Even in the darkest forest, a mother’s love is a guiding light.",
        "You are the garden where our dreams bloom.",
        "Love grows best in hearts tended by mothers.",
        "A mother’s wisdom is the soil in which we thrive.",
        "Like petals on a flower, your love surrounds and protects us."
      ];
      
  
    document.getElementById('quoteButton').addEventListener('click', () => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quoteBox').textContent = random;
    });
  
    document.querySelectorAll('.flower').forEach(flower => {
      flower.addEventListener('click', () => {
        const message = flower.getAttribute('data-message');
        document.getElementById('flowerMessage').textContent = message;
      });
    });
  });
  