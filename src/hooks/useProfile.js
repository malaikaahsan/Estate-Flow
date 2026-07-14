import { useEffect, useState } from "react";

const defaultProfile = {
  image: "https://i.pravatar.cc/300?img=12",

  name: "John Smith",

  role: "Senior Property Consultant",

  agency: "EstateFlow",

  email: "john@estateflow.com",

  phone: "+92 300 1234567",

  experience: "8 Years",

  location: "Lahore, Pakistan",

  department: "Residential Sales",

  about:
    "Senior Property Consultant with over 8 years of experience in residential and commercial real estate.",

  social: {
    linkedin: "https://linkedin.com",

    facebook: "https://facebook.com",

    instagram: "https://instagram.com",

    twitter: "https://twitter.com",

    website: "https://estateflow.com",
  },

  stats: {
    managed: 86,

    sold: 143,

    clients: 214,

    revenue: "$3.4M",

    rating: 4.9,

    years: 8,
  },
};

const useProfile = () => {
 const [profile, setProfile] = useState(() => {
  const saved = localStorage.getItem("profile");

  if (!saved) return defaultProfile;

  return {
    ...defaultProfile,
    ...JSON.parse(saved),
  };
});

  useEffect(() => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );
  }, [profile]);

  return {
    profile,
    setProfile,
  };
};

export default useProfile;