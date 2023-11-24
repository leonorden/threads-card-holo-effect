const speed = 4.5;
const r = gsap.timeline({ repeat: -1 });
const o = gsap.timeline({ repeat: -1 });
const h = gsap.timeline({ repeat: -1 });

r.to("#app", {
    "--r": "180deg",
    "--p": "0%",
    duration: speed,
    ease: "sine.in"
});
r.to("#app", {
    "--r": "360deg",
    "--p": "100%",
    duration: speed,
    ease: "sine.out"
});
o.to("#app", {
    "--o": 1,
    duration: speed/2,
    ease: "power1.in"
});
o.to("#app", {
    "--o": 0,
    duration: speed/2,
    ease: "power1.out"
});

h.to("#app", {
    "--h": "100%",
    duration: speed/2,
    ease: "sine.in"
});
h.to("#app", {
    "--h": "50%",
    duration: speed/2,
    ease: "sine.out"
});
h.to("#app", {
    "--h": "0%",
    duration: speed/2,
    ease: "sine.in"
});
h.to("#app", {
    "--h": "50%",
    duration: speed/2,
    ease: "sine.out"
});

// Smooth transition to default position on hover
document.getElementById('app').addEventListener('mouseenter', () => {
    r.pause();
    gsap.to("#app", {
        "--r": "0deg",
        duration: 1, // Adjust this duration for a smoother or quicker transition
        ease: "power1.out"
    });
});

// Resume rotation from current position on mouse leave
document.getElementById('app').addEventListener('mouseleave', () => {
    // Get the current rotation value
    const currentRotation = gsap.getProperty("#app", "--r");

    // Resume the timeline
    r.resume();

    // Set the timeline's progress based on current rotation
    const progress = parseFloat(currentRotation) / 360;
    r.progress(progress);
});




