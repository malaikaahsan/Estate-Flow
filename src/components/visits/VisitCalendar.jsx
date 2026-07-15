import { useState } from "react";
import Calendar from "react-calendar";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import "react-calendar/dist/Calendar.css";

const VisitCalendar = ({ visits }) => {
  const [date, setDate] = useState(new Date());

  return (
    <section className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
            <CalendarDays size={20} className="text-[#10B981]" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0F172A]">Visit Calendar</h2>

            <p className="text-sm text-[#64748B]">
              View scheduled property visits
            </p>
          </div>
        </div>

        <div className="hidden rounded-xl bg-[#EEF9F6] px-3 py-2 sm:block">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#10B981]">
            {visits.length} Visits
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Calendar
          value={date}
          onChange={setDate}
          tileClassName={({ date }) => {
            const hasVisit = visits.some(
              (visit) =>
                new Date(visit.date).toDateString() === date.toDateString(),
            );

            return hasVisit ? "!bg-[#10B981] !text-white rounded-full" : null;
          }}
        />
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-[#E2E8F0] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
            Selected Date
          </p>

          <p className="mt-1 font-semibold text-[#0F172A]">
            {date.toDateString()}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-[#EEF9F6] px-3 py-2">
          <CheckCircle2 size={18} className="text-[#10B981]" />

          <span className="text-sm font-medium text-[#0F172A]">
            Scheduled Visit
          </span>
        </div>
      </div>
    </section>
  );
};

export default VisitCalendar;
