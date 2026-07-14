import { Share2 } from "lucide-react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";

const SocialLinks = ({ profile }) => {
  const links = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: profile.social.linkedin,
      color: "text-[#0077B5]",
      bg: "bg-[#EAF4FF]",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: profile.social.facebook,
      color: "text-[#1877F2]",
      bg: "bg-[#EDF5FF]",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: profile.social.instagram,
      color: "text-[#E1306C]",
      bg: "bg-[#FFF0F6]",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: profile.social.twitter,
      color: "text-[#1DA1F2]",
      bg: "bg-[#EFF8FF]",
    },
    {
      name: "Website",
      icon: FaGlobe,
      url: profile.social.website,
      color: "text-[#10B981]",
      bg: "bg-[#EEF9F6]",
    },
  ];

  return (
    <div className="rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-6">

      {/* Header */}

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6]">

          <Share2
            size={24}
            className="text-[#10B981]"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-[#0F172A]">
            Social Links
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Connect through social platforms and professional profiles.
          </p>

        </div>

      </div>

      {/* Links */}

      <div className="grid gap-5 sm:grid-cols-2">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href={link.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981] hover:bg-white hover:shadow-lg ${
                !link.url ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${link.bg} transition-all duration-300 group-hover:scale-110`}
              >
                <Icon
                  size={24}
                  className={link.color}
                />
              </div>

              <div className="min-w-0 flex-1">

                <h3 className="font-semibold text-[#0F172A]">
                  {link.name}
                </h3>

                <p className="mt-1 truncate text-sm text-[#64748B]">
                  {link.url ? "Visit Profile" : "Not Connected"}
                </p>

              </div>

            </a>
          );
        })}

      </div>

    </div>
  );
};

export default SocialLinks;