export function circles(p) {
    p.background(0);
    for (let i = 0; i < 100; i++) {
        let x = p.random(p.width);
        let y = p.random(p.height);
        let size = p.random(10, 50);
        p.fill(p.random(255), p.random(255), p.random(255));
        p.ellipse(x, y, size, size);
    }
}