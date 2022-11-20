import React, { useState, useCallback } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	InfoWindow,
	Marker,
} from "@react-google-maps/api";

export const Mango = (props) => {
	const [map, setMap] = useState(null);
	const [activeMarker, setActiveMarker] = useState(null);

	const phillipinesMangoMarkers = [
		{
			id: 8,
			name: "Pangasinan",
			position: { lat: 16.0340652, lng: 120.054229 },
		},
		{
			id: 9,
			name: "Visayas",
			position: { lat: 11.0000207, lng: 123.4912452 },
		},
		{
			id: 10,
			name: "Davao",
			position: { lat: 7.2539602, lng: 125.1708733 },
		},
		{
			id: 11,
			name: "Mindanao",
			position: { lat: 7.6963398, lng: 124.2522795 },
		},
	];

	const indiaMangoMarkers = [
		{
			id: 12,
			name: "Visakhapatnam",
			position: { lat: 17.7389495, lng: 83.1225041 },
		},
		{
			id: 13,
			name: "Tirupati",
			position: { lat: 13.6278095, lng: 79.3547601 },
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

	const handleMap3OnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		phillipinesMangoMarkers.forEach(({ position }) =>
			bounds.extend(position)
		);
		map.fitBounds(bounds);
	};

	const handleMap4OnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		indiaMangoMarkers.forEach(({ position }) => bounds.extend(position));
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
					mapContainerStyle={{ width: "500px", height: "500px" }}
					zoom={5}
					onLoad={handleMap3OnLoad}
					onClick={() => setActiveMarker(null)}
					onUnmount={onUnmount}
				>
					{phillipinesMangoMarkers.map(({ id, name, position }) => (
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
					mapContainerStyle={{ width: "500px", height: "500px" }}
					zoom={5}
					onLoad={handleMap4OnLoad}
					onClick={() => setActiveMarker(null)}
					onUnmount={onUnmount}
				>
					{indiaMangoMarkers.map(({ id, name, position }) => (
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
