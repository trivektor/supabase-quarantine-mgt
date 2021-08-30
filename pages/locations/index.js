import { Fragment, useEffect, useState } from "react";
import { supabase } from "../../utils/supabase-client";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", width: 200 },
  { field: "address", headerName: "Address", width: 300 },
  { field: "contact_name", headerName: "Contact Name", width: 300 },
  { field: "contact_email", headerName: "Contact Email", width: 300 },
  { field: "contact_phone", headerName: "Contact Phone", width: 300 },
];

const Locations = ({ locations }) => {
  console.log({ locations });

  return (
    <Fragment>
      <h1>All Locations ({locations.length})</h1>
      <Button variant="contained" color="secondary" href="/locations/new">
        Add Location
      </Button>
      <div style={{ height: 400 }}>
        <DataGrid columns={columns} rows={locations} />
      </div>
    </Fragment>
  );
};

const LocationsFetcher = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data } = await supabase.from("locations").select();

      setLocations(data);
    };

    fetchLocations();
  }, []);

  return <Locations locations={locations} />;
};

export default LocationsFetcher;
