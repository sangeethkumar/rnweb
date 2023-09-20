import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    distance: false,
    cuisine: false,
    rating: false,
    sortAZ: false,
    sortZA: false,
  });

  const toggleFilter = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const filterOptions = [
    { label: "Distance", filter: "distance" },
    { label: "Cuisine", filter: "cuisine" },
    { label: "Rating", filter: "rating" },
    { label: "A-Z", filter: "sortAZ" },
    { label: "Z-A", filter: "sortZA" },
    // Add more filter options here
  ];

  const renderFilterOptions = () => {
    return filterOptions.map((option) => (
      <TouchableOpacity
        key={option.filter}
        style={[
          styles.filterOption,
          filters[option.filter] && styles.selectedStyle,
        ]}
        onPress={() => toggleFilter(option.filter)}
      >
        <Text
          style={[
            styles.filterText,
            filters[option.filter] && styles.selectedText,
          ]}
        >
          {option.label}
        </Text>
      </TouchableOpacity>
    ));
  };

  const handleFilter = () => {
    // Implement your filtering logic here
    // You can use the state variable "filters" to determine the selected options
  };

  return (
    <View style={styles.filterBar}>
      <ScrollView>
        <Text style={styles.filterHeading}>Filters</Text>
        {renderFilterOptions()}
        <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
          <Text style={styles.buttonText}>Apply Filters</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterBar: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: "white",
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0, 0.2)",
  },
  filterHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 5,
  },
  filterText: {
    fontSize: 16,
  },
  selectedStyle: {
    borderColor: "#57B864", // Border color for selected items
    backgroundColor: "#E0E0E0", // Background color for selected items
  },
  selectedText: {
    color: "#57B864", // Text color for selected items
  },
  filterButton: {
    backgroundColor: "#57B864",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FilterBar;
