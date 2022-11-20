/** @format */

import {React, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import {indicatorMappings} from "./utils.py/constants";
import {Typography} from "@mui/material";

const LeftPanel = ({addIndicatorToStage}) => {
	return (
		<div className="panel-wrapper">
			<div className="panel-dropdowns">
				<Accordion defaultActiveKey="0">
					{indicatorMappings.map((category) => {
						return (
							<Accordion.Item eventKey={category.eventKey}>
								<Accordion.Header>{category.text}</Accordion.Header>
								<Accordion.Body>
									<Box
										sx={{
											width: "100%",
											maxWidth: 380,
											bgcolor: "background.paper",
										}}>
										<nav aria-label={category.key + "-items"}>
											<List>
												{category.indicators.map((indicator) => {
													return (
														<ListItem disablePadding>
															<Typography
																sx={{
																	m: 1,
																}}
																id={indicator.key}
																data-category={category.key}
																onClick={(e) => {
																	console.log(e);
																	addIndicatorToStage(
																		e.target.dataset.category,
																		e.target.id
																	);
																}}>
																{indicator.text}
															</Typography>
														</ListItem>
													);
												})}
											</List>
										</nav>
									</Box>
								</Accordion.Body>
							</Accordion.Item>
						);
					})}
					<Accordion.Item eventKey="3">
						<Accordion.Header>Crops</Accordion.Header>
						<Accordion.Body></Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
			<div className="panel-buttons">
				<Button variant="outlined">Import/Export</Button>
				<Button variant="outlined">Yield</Button>
			</div>
		</div>
	);
};

export default LeftPanel;
