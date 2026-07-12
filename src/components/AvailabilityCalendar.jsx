import { availability } from "../data/availability";

const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Returns a "YYYY-MM-DD" string for the given Date, matching the format used
// in availability.js so the two can be compared directly.
function formatDateAsId(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function AvailabilityCalendar({ apartmentId }) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Fall back to an empty array so the calendar renders even if the apartment
  // has no entry in availability.js yet.
  const bookedDates = availability[apartmentId] || [];

  const monthName = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Day 0 of the next month is the last day of this month.
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // getDay() is 0-based starting on Sunday; our grid starts on Monday,
  // so we shift by 1 and treat Sunday (0) as 6 leading blank cells.
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const leadingBlankDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const calendarCells = [];
  for (let i = 0; i < leadingBlankDays; i += 1) {
    calendarCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    calendarCells.push(new Date(year, month, day));
  }

  return (
    <div className="availability-calendar">
      <h3 className="availability-month-heading">{monthName}</h3>

      <div className="availability-grid availability-weekdays">
        {WEEKDAY_LABELS.map((label) => (
          <span className="availability-weekday" key={label}>
            {label}
          </span>
        ))}
      </div>

      {/* Null cells are blank spacers that keep day 1 aligned under the
          correct weekday column. The index key is safe here since blank
          cells never change position. */}
      <div className="availability-grid">
        {calendarCells.map((date, index) => {
          if (!date) {
            return (
              <span
                className="availability-day availability-day-empty"
                key={`blank-${index}`}
              />
            );
          }

          const dateId = formatDateAsId(date);
          const isBooked = bookedDates.includes(dateId);

          return (
            <span
              className={
                isBooked
                  ? "availability-day availability-day-booked"
                  : "availability-day availability-day-available"
              }
              key={dateId}
            >
              {date.getDate()}
            </span>
          );
        })}
      </div>

      <div className="availability-legend">
        <span className="availability-legend-item">
          <span className="availability-legend-dot availability-legend-dot-available" />
          Available
        </span>
        <span className="availability-legend-item">
          <span className="availability-legend-dot availability-legend-dot-booked" />
          Booked
        </span>
      </div>
    </div>
  );
}

export default AvailabilityCalendar;

// Booked dates currently come from the simple availability.js data file.
// Swap that data for an API only when a real booking system is available.
