<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Appointment App</title>
</head>
<body>

  <h1>Booking Appointment App</h1>

  <form id="appointmentForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="date">Date:</label>
    <input type="date" id="date" name="date" required>
    <br>
    <label for="time">Time:</label>
    <input type="time" id="time" name="time" required>
    <br>
    <button type="button" onclick="bookAppointment()">Book Appointment</button>
  </form>

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
    function bookAppointment() {
      const name = document.getElementById('name').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      const appointment = {
        name,
        date,
        time
      };

      axios.post('https://crudcrud.com/api/096f076ba8384b1190a0c4e80906ce07/appointments', appointment)
        .then(response => {
          console.log('Appointment booked successfully:', response.data);
        })
        .catch(error => {
          console.error('Error booking appointment:', error);
        });
    }
  </script>

</body>
</html>
