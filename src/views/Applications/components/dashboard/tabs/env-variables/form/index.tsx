import { useState } from "react";
import useApplicationsStore from "@/stores/application";

import { Box, TextField, Typography } from "@mui/material";
import { GhostIconButton } from "@/components/IconButton";
import { OutlineButton, PrimaryButton } from "@/components/Button";

import Card from "@/components/Card";
import DeleteIcon from "@assets/icons/actions/delete-lines.svg?react";

function generateFormData(variables: Array<object>, noNew = false) {
  const fData = JSON.parse(JSON.stringify(variables));  // Quick Approach to Deep Clone the Array
  if (!noNew) fData.push({ key: "", value: "" });
  return fData;
}

const Form = ({ handleCancel }) => {
  const selectedApp = useApplicationsStore(state => state.selectedApplication);
  const envVariables = useApplicationsStore(state => state.envVariables)[selectedApp?.id] || [];

  const rmVariable = useApplicationsStore(state => state.rmEnvVariable);
  const setVariables = useApplicationsStore(state => state.setEnvVariables);

  const [ formData, setFormData ] = useState(generateFormData(envVariables));

  const handleChange = (field: "key" | "value", value: string, index: number) => {
    const newFormData = [ ...formData ];

    const oldVariable = formData[index];
    newFormData[index] = { ...oldVariable, [field]: value };

    setFormData(newFormData);
  };

  const handleAdd = () => {
    setVariables(String(selectedApp?.id), formData);
    setFormData(generateFormData(formData));
  };

  const handleDelete = (index: number) => {
    if (!selectedApp) return;
    const variable = envVariables[index];

    if (!variable) {
      // trying to delete unsaved var;
      // just reset the inputs
      const newFormData = [ ...formData ];
      newFormData[index] = { key: "", value: "" };

      setFormData(newFormData);
      return;
    }

    rmVariable(selectedApp.id, variable.key);
    setFormData(generateFormData(formData.filter(v => v.key !== variable.key), true));
  };

  return (
    <Card padding={"12px"} bordered>
      <Card padding={"12px"} rowGap={"24px"} borderRadius={"4px"}>
        {formData.map((_: object, i: number) => (
          <Box key={i} flex={1} display={"flex"} >
            <Box display={"flex"} alignItems={"center"} flex={1}>
              <Typography marginRight={"16px"}>Name</Typography>
              <TextField sx={{ flex: 1, "input": { width: "100%", padding: "8px" } }} value={formData[i].key} onChange={(e) => handleChange("key", e.target.value, i)} />
            </Box>

            <Box display={"flex"} alignItems={"center"} flex={1} marginLeft={"24px"}>
              <Typography marginRight={"16px"}>Value</Typography>
              <TextField sx={{ flex: 1, "input": { width: "100%", padding: "8px" } }} value={formData[i].value} onChange={(e) => handleChange("value", e.target.value, i)} />
            </Box>

            <GhostIconButton onClick={() => handleDelete(i)} sx={{ height: "24px", width: "24px", marginLeft: "16px", alignSelf: "center" }}>
              <DeleteIcon />
            </GhostIconButton>
          </Box>
        ))}
      </Card>

      <Box display={"flex"} justifyContent={"flex-end"} columnGap={"8px"} marginTop={"12px"}>
        <OutlineButton onClick={handleCancel}>
          Cancel
        </OutlineButton>

        <PrimaryButton onClick={handleAdd}>
          Add
        </PrimaryButton>
      </Box>
    </Card>
  );
};

export default Form;
