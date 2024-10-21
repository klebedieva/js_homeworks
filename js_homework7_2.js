const words = "Wonderful Joyful Happiness Time Task Apple";
const pattern = /(^|\s)[^Aa\s]{6,}/g;
console.log(words.match(pattern));