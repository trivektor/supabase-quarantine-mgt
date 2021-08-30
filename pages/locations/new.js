import { Button, FormGroup, FormLabel, TextField } from "@material-ui/core";
import { Fragment, useState } from "react";
import { supabase } from "../../utils/supabase-client";

const NewLocation = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const onSubmit = async () => {
    try {
      await supabase.from("locations").upsert({
        name,
        address,
        contact_name: contactName,
      });
    } catch (err) {}
  };

  return (
    <Fragment>
      <h1>New Quarantine Location</h1>
      <FormGroup style={{ marginBottom: 20 }}>
        <TextField
          variant="outlined"
          label="Location Name"
          size="small"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: 20 }}>
        <TextField
          variant="outlined"
          label="Address"
          size="small"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: 20 }}>
        <TextField
          variant="outlined"
          label="Contact Name"
          size="small"
          value={contactName}
          onChange={(event) => setContactName(event.target.value)}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: 20 }}>
        <TextField
          variant="outlined"
          label="Contact Email"
          size="small"
          value={contactEmail}
          onChange={(event) => setContactEmail(event.target.value)}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: 20 }}>
        <TextField
          variant="outlined"
          label="Contact Phone Number"
          size="small"
          value={contactPhone}
          onChange={(event) => setContactPhone(event.target.value)}
        />
      </FormGroup>
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Fragment>
  );
};

export default NewLocation;
