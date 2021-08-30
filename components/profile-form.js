import {
  Button,
  FormGroup,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthSession } from "../hooks";
import { supabase } from "../utils/supabase-client";
import country from "country-list-js";

const ProfileForm = ({ profile }) => {
  const [firstName, setFirstName] = useState(profile.first_name ?? "");
  const [lastName, setLastName] = useState(profile.last_name ?? "");
  const [countryOfResidence, setCountryOfResidence] = useState(
    profile.country_of_residence ?? ""
  );
  const [vaccineManufacturer, setVaccineManufacturer] = useState(
    profile.vaccine_manufacturer ?? ""
  );
  const [vaccineDoses, setVaccineDoses] = useState(profile.vaccine_doses ?? 0);
  const onSubmit = async () => {
    try {
      await supabase
        .from("profiles")
        .update({
          first_name: firstName,
          last_name: lastName,
          country_of_residence: countryOfResidence,
          vaccine_doses: vaccineDoses,
          vaccine_manufacturer: vaccineManufacturer,
        })
        .match({
          id: profile.id,
        });
    } catch (err) {}
  };

  return (
    <Fragment>
      <StyledFormGroup>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <InputLabel>Country of Residence</InputLabel>
        <Select
          value={countryOfResidence}
          onChange={(event) => setCountryOfResidence(event.target.value)}
        >
          <MenuItem value=""></MenuItem>
          {country
            .names()
            .sort()
            .map((countryName) => (
              <MenuItem key={countryName} value={countryName}>
                {countryName}
              </MenuItem>
            ))}
        </Select>
      </StyledFormGroup>
      <StyledFormGroup>
        <TextField
          label="Vaccine Shots"
          value={vaccineDoses}
          onChange={(event) => setVaccineDoses(+event.target.value || 0)}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <TextField
          label="Vaccine Manufacturer (e.g. Moderna)"
          value={vaccineManufacturer}
          onChange={(event) => setVaccineManufacturer(event.target.value)}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Update
        </Button>
      </StyledFormGroup>
    </Fragment>
  );
};

const ProfileFormFetcher = () => {
  const session = useAuthSession();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session) return;

      const { data } = await supabase
        .from("profiles")
        .select()
        .filter("id", "eq", session.user.id)
        .limit(1);

      setProfile(data[0]);
    };

    fetchProfile();
  }, [session]);

  if (!session || !profile) return null;

  return <ProfileForm profile={profile} />;
};

export default ProfileFormFetcher;

const StyledFormGroup = styled(FormGroup)`
  margin-bottom: 20px;
`;
