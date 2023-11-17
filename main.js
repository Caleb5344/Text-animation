const dynamicText = document.querySelector("h1 span");
const words = ["Love", "Sweet", "The Future", "Our Joy", "Everything", "Fun", "Like Art"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stopblinking");

    if (!isDeleting && charIndex <currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    }else{
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stopblinking");
        wordIndex = !isDeleting ? (wordIndex + 1)%
        words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();