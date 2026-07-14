import { useState } from "react";
import {
  Bell,
  BellRing,
  CheckCircle2,
  CheckCheck,
  Trash2,
} from "lucide-react";

import NotificationItem from "../../components/notifications/NotificationItem";
import { useNotifications } from "../../context/NotificationContext";

const Notifications = () => {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllRead,
    clearAll,
  } = useNotifications();

  const [filter, setFilter] = useState("all");

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "unread") return !notification.read;
    if (filter === "read") return notification.read;
    return true;
  });

  const readCount = notifications.length - unreadCount;

  const stats = [
    {
      key: "all",
      title: "All Notifications",
      value: notifications.length,
      icon: Bell,
      bg: "bg-[#EEF9F6]",
      color: "text-[#10B981]",
    },
    {
      key: "unread",
      title: "Unread",
      value: unreadCount,
      icon: BellRing,
      bg: "bg-[#EAF7FD]",
      color: "text-[#38BDF8]",
    },
    {
      key: "read",
      title: "Read",
      value: readCount,
      icon: CheckCircle2,
      bg: "bg-[#F1F5F9]",
      color: "text-[#1E293B]",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-[#0F172A]">
          Notifications
        </h1>

        <p className="mt-2 text-[#64748B]">
          Stay updated with all activities across your platform.
        </p>

      </div>

      {/* Stats */}

 {/* Stats */}

<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
  {stats.map((item) => {
    const Icon = item.icon;

    return (
      <button
        key={item.key}
        onClick={() => setFilter(item.key)}
        className={`rounded-2xl border p-4 text-left transition-all duration-300 hover:shadow-md ${
          filter === item.key
            ? "border-[#10B981] bg-[#EEF9F6]"
            : "border-[#E2E8F0] bg-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm text-[#64748B]">
              {item.title}
            </p>

            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0F172A]">
              {item.value}
            </h2>
          </div>

          <div
            className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${item.bg}`}
          >
            <Icon
              size={22}
              className={item.color}
            />
          </div>
        </div>
      </button>
    );
  })}
</div>

      {/* Toolbar */}

{/* Toolbar */}

<div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">

  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    {/* Filters */}

    <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
      {["all", "unread", "read"].map((item) => (
        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
            filter === item
              ? "bg-[#10B981] text-white"
              : "border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC]"
          }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>

    {/* Actions */}

    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
      <button
        onClick={markAllRead}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#10B981] px-3 py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#059669]"
      >
        <CheckCheck size={16} />
        <span className=" sm:inline">
          Mark All Read
        </span>
      </button>

      <button
        onClick={() => {
          const confirmed = window.confirm(
            "Are you sure you want to clear all notifications?"
          );

          if (confirmed) clearAll();
        }}
        className="flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-[#64748B] transition-all duration-300 hover:bg-[#F8FAFC]"
      >
        <Trash2 size={16} />
        <span className=" sm:inline">
          Clear All
        </span>
      </button>
    </div>

  </div>

</div>

      {/* Notifications */}

      <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm">

        {filteredNotifications.length === 0 ? (

          <div className="flex flex-col items-center py-16">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF9F6]">

              <Bell
                size={36}
                className="text-[#10B981]"
              />

            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#0F172A]">
              No Notifications
            </h2>

            <p className="mt-2 text-center text-[#64748B]">
              You're all caught up. New notifications will appear here.
            </p>

          </div>

        ) : (

          <div className="space-y-4">

            {filteredNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onClick={() => markAsRead(notification.id)}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Notifications;
