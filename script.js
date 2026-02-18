const belly = document.getElementById('belly');
const message = document.getElementById('message');
const counter = document.getElementById('counter');
const foodItems = document.getElementById('foodItems');
const filledImage = document.getElementById('filledImage');

let pressCount = 0;
const fillThreshold = 10;
let isFilled = false;

belly.addEventListener('click', function() {
    // Disable clicking after belly is filled
    if (isFilled) return;
    
    pressCount++;
    counter.textContent = `Presses: ${pressCount}`;
    
    if (pressCount < fillThreshold) {
        // Before reaching threshold - show progressive messages
        belly.classList.remove('pressed');
        void belly.offsetWidth; // Trigger reflow to restart animation
        belly.classList.add('pressed');
        
        const progressMessages = [
            'الكرش بدأ يمتلئ!',
            'استمر... الكرش يكبر!',
            'ممتاز! الكرش ينتفخ!',
            'واو! الكرش يتمدد!',
            'يلا كمل! قرب يمتلئ!',
            'الكرش بقى أكبر!',
            'كمان شوية والكرش هيمتلئ!',
            'تقريباً وصلنا!',
            'ضغطة واحدة كمان!'
        ];
        
        message.textContent = progressMessages[pressCount - 1];
    } else if (pressCount === fillThreshold) {
        // Reached threshold - belly is filled
        message.textContent = 'تم تعبئة الكرش بنجاح';
        message.classList.add('filled');
        belly.classList.add('filled');
        isFilled = true;
        
        // Hide SVG belly and show the user's image
        setTimeout(() => {
            belly.style.display = 'none';
            filledImage.style.display = 'block';
            filledImage.classList.add('show');
        }, 600);
    }
});

// Remove animation class after animation completes
belly.addEventListener('animationend', function() {
    belly.classList.remove('pressed', 'filled');
});
