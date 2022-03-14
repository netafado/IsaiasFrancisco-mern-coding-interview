import React, { FC, useState } from "react";
import { Box, Card, Container, Typography, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import { FlightStatuses } from "../../models/flight.model";

interface FlightCardProps {
  code: string;
  origin: string;
  destination: string;
  passengers?: string[];
  status: FlightStatuses;
}

const mapFlightStatusToColor = (status: FlightStatuses) => {

  const mappings = {
    [FlightStatuses.Arrived]: "#1ac400",
    [FlightStatuses.Delayed]: "##c45800",
    [FlightStatuses["On Time"]]: "#1ac400",
    [FlightStatuses.Landing]: "#1ac400",
    [FlightStatuses.Cancelled]: "#ff2600",
  };

  return mappings[status] || "#000000";
};

export const FlightCard: React.FC<FlightCardProps> = (
  props: FlightCardProps
) => {
  const [status, setStatus] = useState("");
  const handleChangeStatus = (e: any) =>{
    setStatus(e.target.value)
  }
  return (
    <Card
      style={{
        backgroundColor: "#f5f5f5",
        margin: "15px",
        padding: "35px",
        justifyContent: "center",
      }}
    >
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{props.code} </Typography>
        <Typography style={{ color: mapFlightStatusToColor(props.status) }}>
          Status: {props.status}
        </Typography>
      </Box>

      <Box>
        <Typography>Origin: {props.origin}</Typography>
      </Box>
      <Box>
        <Typography>Destination: {props.destination}</Typography>
      </Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Change Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Change Status"
          onChange={handleChangeStatus}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
};
