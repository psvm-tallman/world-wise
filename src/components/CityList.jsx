import Spinner from "./Spinner";
import PropTypes from "prop-types";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";


function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city} city={city} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.bool.isRequired,
};

export default CityList;
