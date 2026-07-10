import { useMemo, useState, useEffect } from "react";
import { properties as propertyData } from "../data/properties";
import sortProperties from "../utils/sortProperties";
import { agents } from "../data/agents";

const useProperties = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const propertiesPerPage = 9;
    const [search, setSearch] = useState("");

    const [sort, setSort] = useState("newest");

    const [filters, setFilters] = useState({
        city: "",
        type: "",
        bedrooms: "",
        bathrooms: "",
        status: "",
        maxPrice: "",
    });



    const filteredProperties = useMemo(() => {
        let data = [...propertyData];

        if (search) {
            const query = search.toLowerCase();

            data = data.filter((property) => {
                const agent = agents.find(
                    (item) => item.id === property.agentId
                );

                return (
                    property.title.toLowerCase().includes(query) ||
                    property.city.toLowerCase().includes(query) ||
                    property.address.toLowerCase().includes(query) ||
                    agent?.name.toLowerCase().includes(query)
                );
            });
        }

        if (filters.city) {
            data = data.filter(
                (property) => property.city === filters.city
            );
        }

        if (filters.type) {
            data = data.filter(
                (property) => property.type === filters.type
            );
        }

        if (filters.status) {
            data = data.filter(
                (property) => property.status === filters.status
            );
        }

        if (filters.bedrooms) {
            data = data.filter(
                (property) =>
                    property.bedrooms >= Number(filters.bedrooms)
            );
        }

        if (filters.bathrooms) {
            data = data.filter(
                (property) =>
                    property.bathrooms >= Number(filters.bathrooms)
            );
        }

        if (filters.maxPrice) {
            data = data.filter(
                (property) =>
                    property.price <= Number(filters.maxPrice)
            );
        }

        return sortProperties(data, sort);
    }, [search, filters, sort]);

    const totalPages = Math.ceil(
        filteredProperties.length / propertiesPerPage
    );

    const startIndex = (currentPage - 1) * propertiesPerPage;

    const paginatedProperties = filteredProperties.slice(
        startIndex,
        startIndex + propertiesPerPage
    );
    useEffect(() => {
         
        const loadData = async () => {
            try {
                setLoading(true);

                // Simulate API loading
                await new Promise((resolve) =>
                    setTimeout(resolve, 800)
                );

                setError(null);
            } catch (err) {
                setError("Unable to load properties.");
            } finally {
                setLoading(false);
            }
        };

        loadData();

        setCurrentPage(1);
       
   
}, [search, filters, sort]);

return {
    properties: paginatedProperties,

    loading,
    error,

    search,
    setSearch,

    filters,
    setFilters,

    sort,
    setSort,

    currentPage,
    setCurrentPage,

    totalPages,
    totalProperties: filteredProperties.length,

    propertiesPerPage,
};

};

export default useProperties;