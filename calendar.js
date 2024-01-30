// fetch(
//   "http://www.vrbo.com/icalendar/5f16d3c477a541caa5e99492f69b336e.ics?nonTentative"
// )
//   .then((response) => response.text())
//   .then((data) => {
//     console.log(data);
//     const jcalData = ICAL.parse(data);
//     const comp = new ICAL.Component(jcalData);
//     const events = comp.getAllSubcomponents("vevent").map((vevent) => {
//       const event = new ICAL.Event(vevent);
//       return {
//         title: event.summary,
//         start: event.startDate.toString(),
//         end: event.endDate.toString(),
//       };
//     });

//     var calendarEl = document.getElementById("calendar");
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       plugins: ["interaction", "dayGrid"],
//       events: events,
//     });
//     calendar.render();
//   });
