import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";

const FavoriteButton = ({ property }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = favorites.includes(property.id);

  return (
    <button
      onClick={() => dispatch(toggleFavorite(property.id))}
      className={`group flex h-11 w-11 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${
        isFavorite
          ? "border-[#EF4444] bg-[#EF4444] text-white shadow-red-200"
          : "border-white/70 bg-white/90 text-[#64748B] hover:border-[#EF4444] hover:bg-white hover:text-[#EF4444]"
      }`}
    >
      <Heart
        size={19}
        strokeWidth={2.2}
        fill={isFavorite ? "currentColor" : "none"}
        className={`transition-all duration-300 ${
          isFavorite ? "scale-110" : "group-hover:scale-110"
        }`}
      />
    </button>
  );
};

export default FavoriteButton;
