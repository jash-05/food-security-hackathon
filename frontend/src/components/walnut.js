import React, { useState, useCallback } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	InfoWindow,
	Marker,
} from "@react-google-maps/api";
import Button from 'react-bootstrap/Button';

export const Walnut = (props) => {
	const [map, setMap] = useState(null);
	const [activeMarker, setActiveMarker] = useState(null);

	const unitedStatesWalnutMarkers = [
		{
			id: 14,
			name: "San Joaquin",
			position: { lat: 37.8906856, lng: -121.5330082 },
		},
		{
			id: 15,
			name: "Sacramento Valleys",
			position: { lat: 38.0476971, lng: -121.8042663 },
		},
	];

	const iranWalnutMarkers = [
		{
			id: 16,
			name: "East Azerbaijan",
			position: { lat: 38.0807019, lng: 45.5897151 },
		},
		{
			id: 17,
			name: "West Azerbaijan",
			position: { lat: 37.8695845, lng: 44.5913972 },
		},
		{
			id: 18,
			name: "Kordestan",
			position: { lat: 35.6000576, lng: 46.3411893 },
		},
		{
			id: 19,
			name: "Kermanshah",
			position: { lat: 34.3372646, lng: 47.060854 },
		},
		{
			id: 20,
			name: "Hamadan",
			position: { lat: 34.8083218, lng: 48.4557746 },
		},
		{
			id: 21,
			name: "Bakhtiari",
			position: { lat: 36.2065546, lng: 43.9889359 },
		},
	];

	const handleActiveMarker = (marker) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	let { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDBE6nwWjWFtuQGKtYhB7sEDHVNsjadWpQ",
	});

	const handleMap5OnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		unitedStatesWalnutMarkers.forEach(({ position }) =>
			bounds.extend(position)
		);
		map.fitBounds(bounds);
	};

	const handleMap6OnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		iranWalnutMarkers.forEach(({ position }) => bounds.extend(position));
		map.fitBounds(bounds);
	};

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<div
			className="google-maps-wrapper"
			style={{
				display: "flex",
				justifyContent: "space-around",
				paddingTop: "50px",
			}}
		>
			<div style={{width: "500px"}}>
				<div>USA - major areas are San Joaquin and 
Sacramento Valleys</div>
				<GoogleMap
					mapContainerStyle={{ width: "500px", height: "500px" }}
					zoom={5}
					onLoad={handleMap5OnLoad}
					onClick={() => setActiveMarker(null)}
					onUnmount={onUnmount}
				>
					{unitedStatesWalnutMarkers.map(({ id, name, position }) => (
						<Marker
							key={id}
							position={position}
							onClick={() => handleActiveMarker(id)}
						>
							{activeMarker === id ? (
								<InfoWindow
									onCloseClick={() => setActiveMarker(null)}
								>
									<div>{name}</div>
								</InfoWindow>
							) : null}
						</Marker>
					))}
				</GoogleMap>
				<Button className="my-4" variant="primary">California</Button>
			</div>
			<div style={{width: "500px"}}>
				<div>Kerman, Kermanshah, Hamedan, Lorestan, 
Kohgilouyeh-Boyerahmad , Khorasan Razavi, 
Bakhtiari, Eastern and Western Azerbaijan and 
Markazi</div>
				<GoogleMap
					mapContainerStyle={{ width: "500px", height: "500px" }}
					zoom={5}
					onLoad={handleMap6OnLoad}
					onClick={() => setActiveMarker(null)}
					onUnmount={onUnmount}
				>
					{iranWalnutMarkers.map(({ id, name, position }) => (
						<Marker
							key={id}
							position={position}
							onClick={() => handleActiveMarker(id)}
						>
							{activeMarker === id ? (
								<InfoWindow
									onCloseClick={() => setActiveMarker(null)}
								>
									<div>{name}</div>
								</InfoWindow>
							) : null}
						</Marker>
					))}
				</GoogleMap>
				<Button className="my-4" variant="primary">Iran</Button>
			</div>
		</div>
	) : (
		<></>
	);
};
