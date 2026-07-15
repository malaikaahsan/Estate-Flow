import {
  Home,
  DollarSign,
  CalendarDays,
  UserPlus,
  Handshake,
} from "lucide-react";

import formatTimeAgo from "../../utils/formatTimeAgo";

const getIcon = (type) => {
  switch (type) {
    case "Property Sold":
      return {
        icon: Home,
        bg: "bg-[#EEF9F6]",
        color: "text-[#10B981]",
      };

    case "Price Updated":
      return {
        icon: DollarSign,
        bg: "bg-[#FEF3C7]",
        color: "text-[#F59E0B]",
      };

    case "Appointment Reminder":
      return {
        icon: CalendarDays,
        bg: "bg-[#EAF7FD]",
        color: "text-[#38BDF8]",
      };

    case "New Client":
      return {
        icon: UserPlus,
        bg: "bg-[#EEF2FF]",
        color: "text-[#6366F1]",
      };

    case "Offer Accepted":
      return {
        icon: Handshake,
        bg: "bg-[#FCE7F3]",
        color: "text-[#EC4899]",
      };

    default:
      return {
        icon: Home,
        bg: "bg-[#F1F5F9]",
        color: "text-[#64748B]",
      };
  }
};

const NotificationItem = ({ notification, onClick }) => {
  const { icon: Icon, bg, color } = getIcon(notification.type);

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/30 hover:shadow-lg
      ${
        !notification.read
          ? "border-[#38BDF8]/30 bg-[#F8FCFF]"
          : "border-[#E2E8F0] bg-white"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${bg}`}
        >
          <Icon size={22} className={color} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-[#0F172A] transition-colors group-hover:text-[#10B981]">
                {notification.title}
              </h3>

              <p className="mt-1 text-sm text-[#64748B]">
                {notification.description}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-[#94A3B8] whitespace-nowrap">
                {formatTimeAgo(notification.createdAt)}
              </p>

              {!notification.read && (
                <span className="mt-3 inline-flex rounded-full bg-[#10B981] px-3 py-1 text-[11px] font-semibold text-white">
                  New
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
