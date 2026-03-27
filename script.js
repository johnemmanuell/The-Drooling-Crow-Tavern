let carriage = [];

function addToCarriage(itemName, price) {
    
    carriage.push({ name: itemName, cost: price });
    updateCarriageDisplay();
}


function updateCarriageDisplay() {
    let display = document.getElementById("carriageItems");

    if (carriage.length === 0) {
        display.innerHTML = "No items yet.";
    } else {
        
        let itemsList = carriage.map(item => item.name).join(", ");
        let total = carriage.reduce((sum, item) => sum + item.cost, 0);

        display.innerHTML = `<strong>In your carriage:</strong><br>${itemsList}<br><br><strong>Total: ${total} Gold</strong>`;
    }
}


function checkoutCarriage() {
    if (carriage.length === 0) {
        alert("Thy carriage is empty, traveler!");
    } else {
        let total = carriage.reduce((sum, item) => sum + item.cost, 0);
        alert(`Your order rides forth! That will be ${total} Gold.`);
        carriage = [];
        updateCarriageDisplay();
    }
}


let form = document.getElementById("signupForm");

if (form) {
	
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
		let age = parseInt(document.getElementById("age").value);
		
		if (age <= 17) {
            alert("Good sir, thou art too young of age. Only those who have seen eighteen years may enter this tavern.");
            return; 
        }

       
        document.getElementById("welcomeMsg").textContent =
            "Welcome, " + name + "! Enter the tavern and place your order.";

       
        document.getElementById("orderSection").style.display = "block";
    });
}