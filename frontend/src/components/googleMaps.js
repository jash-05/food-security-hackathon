import React, { useState, useCallback } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	InfoWindow,
	Marker,
} from "@react-google-maps/api";

export const GoogleMaps = () => {
	const [map, setMap] = useState(null);
	const [activeMarker, setActiveMarker] = useState(null);

	const chinaBananaMarkers = [
		{
			id: 1,
			name: "Guandong",
			position: { lat: 23.28963, lng: 113.279687 },
		},
		{
			id: 2,
			name: "Guangxi",
			position: { lat: 22.815546, lng: 108.3775513 },
		},
		{
			id: 3,
			name: "Yunnan",
			position: { lat: 25.1275329, lng: 97.3682973 },
		},
		{
			id: 4,
			name: "Hainan",
			position: { lat: 19.1377162, lng: 108.760069 },
		},
	];

	// const phillipinesBananaMarkers = [];

	const handleActiveMarker = (marker) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDBE6nwWjWFtuQGKtYhB7sEDHVNsjadWpQ",
	});

	const handleMap1OnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		chinaBananaMarkers.forEach(({ position }) => bounds.extend(position));
		map.fitBounds(bounds);
	};

	const handleMap2OnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		chinaBananaMarkers.forEach(({ position }) => bounds.extend(position));
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
			<div>
				<GoogleMap
					mapContainerStyle={{ width: "600px", height: "600px" }}
					zoom={10}
					onLoad={handleMap1OnLoad}
					onClick={() => setActiveMarker(null)}
					onUnmount={onUnmount}
				>
					{chinaBananaMarkers.map(({ id, name, position }) => (
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
			</div>
			<div>
				<GoogleMap
					mapContainerStyle={{ width: "600px", height: "600px" }}
					zoom={10}
					onLoad={handleMap2OnLoad}
					onClick={() => setActiveMarker(null)}
					onUnmount={onUnmount}
				>
					{chinaBananaMarkers.map(({ id, name, position }) => (
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
			</div>
		</div>
	) : (
		<></>
	);
};
