import React, { useState, useCallback } from "react";
import {
	GoogleMap,
	useJsApiLoader,
	InfoWindow,
	Marker,
} from "@react-google-maps/api";
import Button from 'react-bootstrap/Button';

export const Banana = (props) => {
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

	const indonesianBananaMarkers = [
		{
			id: 5,
			name: "Lampung",
			position: { lat: -4.9425096, lng: 103.7706487 },
		},
		{
			id: 6,
			name: "East & West Java",
			position: { lat: -6.9030227, lng: 107.3560393 },
		},
		{
			id: 7,
			name: "Indonesian Papua",
			position: { lat: -1.7856935, lng: 128.404844 },
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

	const handleMap1OnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		chinaBananaMarkers.forEach(({ position }) => bounds.extend(position));
		map.fitBounds(bounds);
	};

	const handleMap2OnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		indonesianBananaMarkers.forEach(({ position }) =>
			bounds.extend(position)
		);
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
				<div>Most bananas are grown in the south, mainly in Guandong, Guangxi, Yunnan and Hainan</div>
				<GoogleMap
					mapContainerStyle={{ width: "500px", height: "500px" }}
					zoom={5}
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
				<Button className="my-4" variant="primary">China</Button>
			</div>
			<div style={{width: "500px"}}>
				<div>The major growing regions are Lampung, East Java, and West Java. Indonesian Papua in the east</div>
				<GoogleMap
					mapContainerStyle={{ width: "500px", height: "500px" }}
					zoom={5}
					onLoad={handleMap2OnLoad}
					onClick={() => setActiveMarker(null)}
					onUnmount={onUnmount}
				>
					{indonesianBananaMarkers.map(({ id, name, position }) => (
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
				<Button className="my-4" variant="primary">Indonesia</Button>
			</div>
		</div>
	) : (
		<></>
	);
};
