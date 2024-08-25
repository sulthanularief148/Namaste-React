import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState("");
  const [address, setAddress] = useState(null);
  // 2fa91646f599415eb20917091fe6dc3a - Open  Cage Api Key
  // results[0].components.state_district
  // results[0].components.town
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const handleSuccess = async (position) => {
      const { latitude, longitude } = position.coords; // Logs coordinates correctly
      setCurrentLocation({ latitude, longitude });

      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=2fa91646f599415eb20917091fe6dc3a`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          setAddress(
            data?.results[0].components.state_district +
              ",  " +
              data?.results[0]?.components?.town +
              " - " +
              data?.results[0].components.postcode
          );
        } else {
          setError("No address found for the current location");
        }
      } catch (error) {
        setError("Failed to fetch address");
      }
    };

    const handleError = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { currentLocation, error, address };
};

export default useCurrentLocation;

//import { useEffect, useState } from "react";

// const useCurrentLocation = () => {
//     const [currentLocation, setCurrentLocation] = useState(null);
//     const [address, setAddress] = useState("");
//     const [error, setError] = useState("");

//     useEffect(() => {
//       if (!navigator.geolocation) {
//         setError("Geolocation is not supported by your browser");
//         return;
//       }

//       const handleSuccess = async (position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ latitude, longitude });

//         try {
//           const response = await fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
//           );
//           const data = await response.json();
//           if (data.results.length > 0) {
//             setAddress(data.results[0].formatted_address);
//           } else {
//             setError("No address found for the current location");
//           }
//         } catch (err) {
//           setError("Failed to fetch address");
//         }
//       };

//       const handleError = (error) => {
//         setError(error.message);
//       };

//       navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
//     }, []);

//     return { currentLocation, address, error };
//   };

//   export default useCurrentLocation;
