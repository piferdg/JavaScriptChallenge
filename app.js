let dropdown = document.getElementById('holidays')
let christmas = document.createElement('option')
let halloween = document.createElement('option')
let independenceDay = document.createElement('option')
let newYears = document.createElement('option')
let thanksgiving = document.createElement('option')

function holidayList() {
  const holidays = [
    {id: 0,name: 'Christmas'},
    {id: 1,name: 'Halloween'},
    {id: 2,name: 'Independence Day'},
    {id: 3,name: 'New Years'},
    {id: 4,name: 'Thanksgiving'}
  ]
  for (let i = 0; i < holidays.length; i++) {
    
    christmas.textContent = holidays[0].name
    dropdown.appendChild(christmas)

    halloween.textContent = holidays[1].name
    dropdown.appendChild(halloween  )

    independenceDay.textContent = holidays[2].name
    dropdown.appendChild(independenceDay)

    newYears.textContent = holidays[3].name
    dropdown.appendChild(newYears)

    thanksgiving.textContent = holidays[4].name
    dropdown.appendChild(thanksgiving)
  }
}
holidayList()

