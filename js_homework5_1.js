const car = {
    name: "Toyota",
    model: "Camry",
    year: 2020,
    hasAutomaticTransmission: true,
    getinfo() {
        let info = '';
        for (let key in this) {
            if (this.hasOwnProperty(key) && key !== 'getinfo') { 
                info += `${key}: ${this[key]}, `;
            }
        }
        return info; 
    },
};
console.log(car.getinfo());
car.color = 'White';
console.log(car.getinfo());