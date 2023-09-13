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
    // Add more filter options as needed
  });

  // Function to handle filtering based on selected options
  const handleFilter = () => {
    // Implement your filtering logic here
    // You can use the state variable "filters" to determine the selected options
  };

  return (
    <View style={styles.filterBar}>
      <ScrollView>
        <Text style={styles.filterHeading}>Filters</Text>
        <TouchableOpacity
          style={styles.filterOption}
          onPress={() =>
            setFilters({ ...filters, distance: !filters.distance })
          }
        >
          <Text>Distance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterOption}
          onPress={() => setFilters({ ...filters, cuisine: !filters.cuisine })}
        >
          <Text>Cuisine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterOption}
          onPress={() => setFilters({ ...filters, rating: !filters.rating })}
        >
          <Text>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterOption}
          onPress={() => setFilters({ ...filters, sortAZ: !filters.sortAZ })}
        >
          <Text>A-Z</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterOption}
          onPress={() => setFilters({ ...filters, sortZA: !filters.sortZA })}
        >
          <Text>Z-A</Text>
        </TouchableOpacity>
        {/* Add more filter options here */}
        {/* Example:
        <TouchableOpacity style={styles.filterOption} onPress={() => setFilters({ ...filters, anotherOption: !filters.anotherOption })}>
          <CheckBox value={filters.anotherOption} />
          <Text>Another Option</Text>
        </TouchableOpacity>
        */}
        <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
          <Text>Apply Filters</Text>
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
    borderRightWidth: 1, // Add a 1-pixel border to the right
    borderRightColor: "rgba(0, 0, 0, 0.2)", //
  },
  filterHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
