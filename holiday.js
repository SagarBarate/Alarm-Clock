// API endpoint for holidays
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const country = 'US'; // Replace with the desired country code

// Function to fetch holidays from the API
async function fetchHolidays() {
  try {
    const response = await fetch(`https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=2023`);
    const data = await response.json();
    return data.response.holidays;
  } catch (error) {
    console.error('Error fetching holidays:', error);
    return [];
  }
}

// Function to create list items for holidays
function createHolidayListItem(holiday) {
  const listItem = document.createElement('li');
  listItem.textContent = `${holiday.name} - ${holiday.date.iso}`;
  return listItem;
}

// Function to display holidays in a list
function displayHolidays(holidays) {
  const holidayList = document.getElementById('holidayList');

  // Clear any existing holiday list
  holidayList.innerHTML = '';

  // Create list items for each holiday and append them to the list
  holidays.forEach(holiday => {
    const listItem = createHolidayListItem(holiday);
    holidayList.appendChild(listItem);
  });
}

// Fetch holidays from the API and display them
fetchHolidays()
  .then(holidays => displayHolidays(holidays))
  .catch(error => console.error('Error:', error));
