import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

export default function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
    },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      headerAlign: "left",
      align: "left",
      type: "number",
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        {/* <GridToolbarDensitySelector /> */}
        {/* <GridToolbarExport /> */}
      </GridToolbarContainer>
    );
  }

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          // disableColumnFilter
          slots={{ toolbar: CustomToolbar }}
          rows={mockDataContacts}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
