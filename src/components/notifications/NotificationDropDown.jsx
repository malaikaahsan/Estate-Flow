import { Link } from "react-router-dom";
import { Bell, CheckCheck, Trash2, ArrowRight } from "lucide-react";

import NotificationItem from "./NotificationItem";
import { useNotifications } from "../../context/NotificationContext";

const NotificationDropdown = ({
  notifications,
  onMarkAllRead,
  onClearAll,
  onClose,
}) => {
  const { markAsRead } = useNotifications();

  return (
    <div
     className="
fixed
top-20
left-4
right-4

sm:absolute
sm:top-14
sm:left-auto
sm:right-0

sm:w-[420px]

max-h-[60vh]
flex flex-col
overflow-hidden

rounded-3xl
border border-[#E2E8F0]
bg-white
shadow-2xl
z-50
"
    >
      {/* Header */}

      <div className="shrink-0 border-b border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF9F6]">
              <Bell size={20} className="text-[#10B981]" />
            </div>

            <div>
              <h2 className="font-bold text-[#0F172A]">Notifications</h2>

              <p className="text-xs text-[#64748B]">Recent Activity</p>
            </div>
          </div>

          <span className="rounded-full bg-[#10B981] px-3 py-1 text-xs font-semibold text-white">
            {notifications.length}
          </span>
        </div>
      </div>

      {/* Scroll */}

      <div className="flex-1 overflow-y-auto p-4">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF9F6]">
              <Bell size={30} className="text-[#10B981]" />
            </div>

            <h3 className="mt-5 text-lg font-bold">No Notifications</h3>

            <p className="mt-2 text-center text-sm text-[#64748B]">
              You're all caught up.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onClick={() => {
                  markAsRead(notification.id);
                  onClose();
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}

      {notifications.length > 0 && (
        <div className="shrink-0 border-t border-[#E2E8F0] bg-[#F8FAFC] p-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onMarkAllRead}
              className="rounded-xl bg-[#10B981] py-2.5 text-sm font-semibold text-white transition hover:bg-[#059669]"
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCheck size={17} />
                Mark Read
              </div>
            </button>

            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to clear all notifications?",
                  )
                ) {
                  onClearAll();
                }
              }}
              className="rounded-xl border border-[#E2E8F0] bg-white py-2.5 text-sm font-semibold text-[#64748B] transition hover:bg-[#F8FAFC]"
            >
              <div className="flex items-center justify-center gap-2">
                <Trash2 size={17} />
                Clear
              </div>
            </button>
          </div>

          <Link
            to="/notifications"
            onClick={onClose}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-semibold text-[#10B981] transition hover:bg-[#EEF9F6]"
          >
            View All Notifications
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
