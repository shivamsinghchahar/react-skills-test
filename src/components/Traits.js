import { useEffect, useState } from "react";

import { DataGrid, GridColumnsToolbarButton } from "@material-ui/data-grid";

import Trait from "./Trait";
import { traits } from "../apis/traits";

const columns = [
  {
    field: "traitId",
    headerName: "Trait ID",
    type: "number",
  },
  { field: "traitName", headerName: "Trait Name" },
  { field: "description", headerName: "Description" },
  {
    field: "dataType",
    headerName: "Data Type",
  },
  {
    field: "personalData",
    headerName: "Personal Data",
  },
  {
    field: "manageColumn",
    headerName: "Manage Column",
    renderHeader: () => <GridColumnsToolbarButton />,
  },
];

export default function Traits() {
  const [loading, setLoading] = useState(false);
  const [traitsData, setTraitsData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function fetchTraits() {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await traits();
      setTraitsData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleCellClick(params) {
    if (params.field === "traitId") {
      setIsModalOpen(!isModalOpen);
    }
  }

  useEffect(() => {
    fetchTraits();
  }, []);

  return (
    !!traitsData && (
      <div style={{ height: "75vh", width: "100%" }}>
        <DataGrid
          loading={loading}
          rows={traitsData?.items.map((trait) => ({
            ...trait,
            id: trait.traitId,
          }))}
          columns={columns.map((column) => ({
            ...column,
            sortable: false,
            flex: 1,
          }))}
          pagination
          pageSize={50}
          rowsPerPageOptions={[10, 25, 50]}
          onCellClick={(params) => handleCellClick(params)}
          checkboxSelection
          disableColumnMenu
          disableSelectionOnClick
        />

        <Trait isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    )
  );
}
