document.addEventListener('DOMContentLoaded', function() {
    const speed = 4.5;
    const r = gsap.timeline({ repeat: -1 });
    const o = gsap.timeline({ repeat: -1 });
    const h = gsap.timeline({ repeat: -1 });

    // Rotation animation
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

    // Opacity animation
    o.to("#app", {
        "--o": 1,
        duration: speed / 2,
        ease: "power1.in"
    });
    o.to("#app", {
        "--o": 0,
        duration: speed / 2,
        ease: "power1.out"
    });

    // Holographic effect position animation
    h.to("#app", {
        "--h": "100%",
        duration: speed / 2,
        ease: "sine.in"
    });
    h.to("#app", {
        "--h": "50%",
        duration: speed / 2,
        ease: "sine.out"
    });
    h.to("#app", {
        "--h": "0%",
        duration: speed / 2,
        ease: "sine.in"
    });
    h.to("#app", {
        "--h": "50%",
        duration: speed / 2,
        ease: "sine.out"
    });

    // Pause and resume rotation on hover
    const app = document.getElementById('app');
    app.addEventListener('mouseenter', function() {
        r.pause();
        gsap.to("#app", {
            "--r": "0deg",
            duration: 1,
            ease: "power1.out"
        });
    });
    app.addEventListener('mouseleave', function() {
        const currentRotation = gsap.getProperty("#app", "--r");
        r.resume();
        const progress = parseFloat(currentRotation) / 360;
        r.progress(progress);
    });

    // Copy to clipboard function
    window.copyTextAndShowMessage = function(text) {
        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        const messageElement = document.getElementById("alertMessage");
        messageElement.textContent = 'Copied to clipboard: ' + text;
        messageElement.style.display = 'block';

        setTimeout(function() {
            messageElement.style.display = 'none';
        }, 3000);
    };

    // Video background control
    const ticketElement = document.querySelector('.ticket');
    const videoElement = document.querySelector('.background-clip');

    ticketElement.addEventListener('mouseenter', function() {
        videoElement.play();
        videoElement.style.opacity = '1';
    });
    ticketElement.addEventListener('mouseleave', function() {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.style.opacity = '0';
    });
});
