const sortProperties = (properties, sort) => {
  const sorted = [...properties];

  switch (sort) {
    case "newest":
      return sorted.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

    case "oldest":
      return sorted.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );

    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);

    case "area":
      return sorted.sort((a, b) => b.area - a.area);

    case "alphabetical":
      return sorted.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

    default:
      return sorted;
  }
};

export default sortProperties;