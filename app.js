function getCustomerAppointmetns(e){
    
    const userId = 50;
    const url = `https://localhost:44320/api/Appointments/GetCustomerAppointments/${userId}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then(data => {
        const appointmentsArr = JSON.parse(data);
        const container = document.querySelector('#pTextPlace');
        
        appointmentsArr.forEach(element => {
            const printAppointment = document.createElement('div');
            printAppointment.textContent = `${element.Date}`;

            container.appendChild(printAppointment);

        });
        while(printAppointment.firstChild){
            div.removeChild(div.firstChild);
        }
    }) 
}
 document.querySelector('#getCustomerAppoitments').addEventListener('click', getCustomerAppointmetns);


 function clear (e) {
    


   }

 function getAvliableSlots(e){
    

    var userInput= document.getElementById('txtForDate').value
    
    const url = `https://localhost:44320/api/Appointments/GetAvailableSlots/${userInput}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then(data => {
        const arr = JSON.parse(data);
        const container = document.querySelector('#pTextPlace');
        
        arr.forEach(element => {
            const availableSlotsArr = document.createElement('div');
            availableSlotsArr.textContent = `${element.Date}`;

            container.appendChild(availableSlotsArr);
        });
    }) 

}
 document.querySelector('#getAvliableSlots').addEventListener('click', getAvliableSlots);



 function bookTimeSlot(e){
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                        alert(xhr.responseText);
                        const printAppointment = document.createElement('p');
                        printAppointment.textContent = xhr.responseText;   
                }
            }
            var userInput= document.getElementById('txtBoxForDateAndHour').value
           
        xhr.open("POST", `https://localhost:44320/api/Appointments/Create/`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            "Date": userInput, "CustomerId":50 

        }));

    }

 document.querySelector('#bookTimeSlot').addEventListener('click', bookTimeSlot);



