import { drawArt1 } from './art1.js';
import { circles } from './circles.js';


document.addEventListener('DOMContentLoaded', () => {
    // Initialize p5.js sketches for each art tile
    initializeArt('art1-canvas', drawArt1);
    initializeArt('circles', circles);

    // Add mousemove and mouseleave event listeners for 3D tilt effect
    document.querySelectorAll('.art-tile').forEach(tile => {
        tile.addEventListener('mousemove', (e) => {
            const rect = tile.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            const rotateX = deltaY * -10; // Inverted tilt
            const rotateY = deltaX * 10; // Inverted tilt

            tile.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        tile.addEventListener('mouseleave', () => {
            tile.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });
});

function initializeArt(canvasId, drawFunction) {
    let sketch = function(p) {
        p.setup = function() {
            let canvas = p.createCanvas(375, 667);
            canvas.parent(canvasId);
            p.noLoop();
            drawFunction(p);
        };
        p.draw = drawFunction
    };
    new p5(sketch);
    console.log("initialized sketch");
}