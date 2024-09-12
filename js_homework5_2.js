let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === "string") {
                total += parseInt(this[key]);
            }
        }
        return "Загальна вартість: " + total + " грн";
    },
    minPrice() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === "string") {
                let amount = parseInt(this[key]);
                if (amount < min) {
                    min = amount;
                }
            }
        }
        return "Мінімальна ціна: " + min + " грн";
    },
    maxPrice() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] === "string") {
                let amount = parseInt(this[key]);
                if (amount > max) {
                    max = amount;
                }
            }
        }
        return "Максимальна ціна: " + max + " грн";
    }
};

services['Розбити скло'] = "200 грн";

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());