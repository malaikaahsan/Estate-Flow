import { useState } from "react";
import { UserCircle2 } from "lucide-react";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import AboutSection from "../../components/profile/AboutSection";
import SocialLinks from "../../components/profile/SocialLinks";
import ProfileStats from "../../components/profile/ProfileStats";
import EditProfileModal from "../../components/profile/EditProfileModal";

import useProfile from "../../hooks/useProfile";

const Profile = () => {
  const { profile, setProfile } = useProfile();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-6">

      {/* Page Header */}

      <div className="flex flex-col gap-4 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F6]">

            <UserCircle2
              size={28}
              className="text-[#10B981]"
            />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">
              My Profile
            </h1>

            <p className="mt-1 text-sm text-[#64748B] sm:text-base">
              View and manage your personal information and account details.
            </p>

          </div>

        </div>

      </div>

      {/* Profile Banner */}

      <ProfileHeader
        profile={profile}
        onEdit={() => setOpenModal(true)}
      />

      {/* Content */}

      <div className="grid gap-6 xl:grid-cols-3">

        {/* Left */}

        <div className="space-y-6 xl:col-span-2">

          <ProfileInfo profile={profile} />

          <AboutSection profile={profile} />

          <SocialLinks profile={profile} />

        </div>

        {/* Right */}

        <div className="xl:sticky xl:top-6 h-fit">

          <ProfileStats profile={profile} />

        </div>

      </div>

      {/* Edit Modal */}

      {openModal && (
        <EditProfileModal
          profile={profile}
          setProfile={setProfile}
          onClose={() => setOpenModal(false)}
        />
      )}

    </div>
  );
};

export default Profile;