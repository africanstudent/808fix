function showPrices(model) {
    const prices = {
        "iPhone 11": {
            "Battery Replacement": 100000,
            "Audio Issues": 30000,
            "Network Issues": 120000,
            "Charging Issues": 20000,
            "Screen Replacement": 150000
        }
    };
    
    const additionalCosts = {
        "Battery Replacement": 50000,
        "Audio Issues": 15000,
        "Network Issues": 5500,
        "Charging Issues": 4250,
        "Screen Replacement": 50000
    };

    const models = ["iPhone 11", "iPhone 11 Pro", "iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max", "iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone 14", "iPhone 14 Pro", "iPhone 14 Pro Max", "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"];
    const modelIndex = models.indexOf(model);
    
    const selectedPrices = {};
    for (const service in prices["iPhone 11"]) {
        selectedPrices[service] = prices["iPhone 11"][service] + modelIndex * additionalCosts[service];
    }

    const pricesDiv = document.getElementById('prices');
    pricesDiv.innerHTML = `<h3>${model} Repair Prices:</h3>`;
    for (const service in selectedPrices) {
        pricesDiv.innerHTML += `<p>${service}: Ugx. ${selectedPrices[service].toLocaleString()}</p>`;
    }
}
