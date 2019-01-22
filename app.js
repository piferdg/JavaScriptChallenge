
function holidayList() {
  const holidays = [
    {id: 0,name: 'Christmas'},
    {id: 1,name: 'Halloween'},
    {id: 2,name: 'Independence Day'},
    {id: 3,name: 'New Years'},
    {id: 4,name: 'Thanksgiving'},
    {id: 5,name: 'Birthday'}
  ]

  let dropdown = document.getElementById('holidays')
  
  for (let i = 0; i < holidays.length; i++) {
    let holiday = document.createElement('option')
    holiday.textContent = holidays[i].name
    dropdown.appendChild(holiday)
    
  }
}
holidayList()

