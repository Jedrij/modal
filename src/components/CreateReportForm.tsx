import { ReactElement, useState } from "react";
import "./CreateReportForm.css";

export type CreateReportFormProps = {
  days: string[];
  formId: string;
  action: string;
};

export function CreateReportForm({
  days,
  formId,
  action,
}: CreateReportFormProps): ReactElement {
  const [scheduleChoice, setScheduleChoice] = useState<string>();
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleChoice(event.target.value);
  };
  return (
    <form
      className="create-report-form"
      action={action}
      id={formId}
      method="post"
    >
      <label htmlFor="reportName">Report name</label>
      <input
        name="reportName"
        type="text"
        id="reportName"
        placeholder="Shareablee Report"
        required
      />
      <label>Format</label>
      <div className="create-report-form__radio">
        <div className="create-report-form__radio-wrap">
          <input
            className="create-report-form__radio-input"
            name="format"
            type="radio"
            id="formatExcel"
            value="excel"
            defaultChecked
          />
          <label htmlFor="formatExcel">Excel</label>
        </div>
        <div className="create-report-form__radio-wrap">
          <input
            className="create-report-form__radio-input"
            name="format"
            type="radio"
            id="formatCsv"
            value="csv"
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
        required
      />
      <label>Schedule</label>
      <div className="create-report-form__radio">
        <div className="create-report-form__radio-wrap">
          <input
            className="create-report-form__radio-input"
            name="schedule"
            type="radio"
            id="noRepeat"
            onChange={radioHandler}
            value="noRepeat"
            defaultChecked
          />
          <label htmlFor="noRepeat">No Repeat</label>
        </div>
        <div className="create-report-form__radio-wrap">
          <input
            className="create-report-form__radio-input"
            name="schedule"
            type="radio"
            id="specificDate"
            value="Specific Date"
            onChange={radioHandler}
          />
          <label htmlFor="specificDate">Specific Date</label>
        </div>
        <div className="create-report-form__radio-wrap">
          <input
            className="create-report-form__radio-input"
            name="schedule"
            type="radio"
            id="daily"
            value="Daily"
            onChange={radioHandler}
          />
          <label htmlFor="daily">Daily</label>
        </div>
        <div className="create-report-form__radio-wrap">
          <input
            className="create-report-form__radio-input"
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
          <div className="create-report-form__date-input-wrap">
            <input name="specificDate" type="date" id="specificDay" required />
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
          <div className="create-report-form__date-input-wrap">
            <input
              name="specificDate"
              type="time"
              id="daily"
              step="60"
              required
            />
          </div>
        </>
      ) : scheduleChoice === "Weekly" ? (
        <>
          <label htmlFor="weekly">{scheduleChoice}</label>
          <div className="create-report-form__date-input-wrap">
            <select name="weekly" id="weeklyDay">
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <p>at</p>
            <input
              name="weekly"
              type="time"
              id="weeklyHour"
              step="60"
              required
            />
          </div>
        </>
      ) : (
        ""
      )}
    </form>
  );
}
