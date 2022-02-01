import React, { ReactElement, useState } from "react";
import "./Modal.css";

const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export type ModalProps = {
  action: () => void;
};

export function Modal({ action }: ModalProps): ReactElement {
  const [scheduleChoice, setScheduleChoice] = useState<String>();
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleChoice(event.target.value);
  };
  return (
    <div className="Modal-wrap">
      <div className="Modal-container" role="dialog">
        <h1 className="Modal-heading">Export Report</h1>
        <form action="https://postman-echo.com/post">
          <div className="Modal-form-wrap">
            <label htmlFor="reportName">Report name</label>
            <input
              name="reportName"
              type="text"
              id="reportName"
              placeholder="Shareablee Report"
            />
            <label>Format</label>
            <div className="Modal-radio">
              <div className="Modal-radio-wrap">
                <input
                  className="Modal-radio-input"
                  name="format"
                  type="radio"
                  id="formatExcel"
                  defaultChecked
                />
                <label htmlFor="formatExcel">Excel</label>
              </div>
              <div className="Modal-radio-wrap">
                <input
                  className="Modal-radio-input"
                  name="format"
                  type="radio"
                  id="formatCsv"
                />
                <label htmlFor="formatCsv">CSV</label>
              </div>
            </div>
            <label htmlFor="emailTo">E-mail to</label>
            <input
              name="emailTo"
              type="text"
              id="emailTo"
              placeholder="client@company.com"
            />
            <label>Schedule</label>
            <div className="Modal-radio">
              <div className="Modal-radio-wrap">
                <input
                  className="Modal-radio-input"
                  name="schedule"
                  type="radio"
                  id="noRepeat"
                  onChange={radioHandler}
                  value="noRepeat"
                  defaultChecked
                />
                <label htmlFor="noRepeat">No Repeat</label>
              </div>
              <div className="Modal-radio-wrap">
                <input
                  className="Modal-radio-input"
                  name="schedule"
                  type="radio"
                  id="specificDate"
                  value="Specific Date"
                  onChange={radioHandler}
                />
                <label htmlFor="specificDate">Specific Date</label>
              </div>
              <div className="Modal-radio-wrap">
                <input
                  className="Modal-radio-input"
                  name="schedule"
                  type="radio"
                  id="daily"
                  value="Daily"
                  onChange={radioHandler}
                />
                <label htmlFor="daily">Daily</label>
              </div>
              <div className="Modal-radio-wrap">
                <input
                  className="Modal-radio-input"
                  name="schedule"
                  type="radio"
                  id="weekly"
                  value="Weekly"
                  onChange={radioHandler}
                />
                <label htmlFor="weekly">Weekly</label>
              </div>
            </div>
            {scheduleChoice === "Specific Date" ? (
              <>
                <label htmlFor="specificDate">{scheduleChoice}</label>
                <div className="Modal-date-input-wrap">
                  <input name="specificDate" type="date" id="specificDay" />
                  <p>at</p>
                  <input
                    name="specificDate"
                    type="time"
                    id="specificHour"
                    step="60"
                  />
                </div>
              </>
            ) : scheduleChoice === "Daily" ? (
              <>
                <label htmlFor="daily">{scheduleChoice}</label>
                <div className="Modal-date-input-wrap">
                  <input name="specificDate" type="time" id="daily" step="60" />
                </div>
              </>
            ) : scheduleChoice === "Weekly" ? (
              <>
                <label htmlFor="weekly">{scheduleChoice}</label>
                <div className="Modal-date-input-wrap">
                  <select name="weekly" id="weeklyDay">
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <p>at</p>
                  <input name="weekly" type="time" id="weeklyHour" step="60" />
                </div>
              </>
            ) : (
              <div className="Modal-spacing" />
            )}
          </div>
          <div className="Modal-buttons-wrap">
            <button onClick={action}>Cancel</button>
            <button type="submit" formMethod="post">
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
