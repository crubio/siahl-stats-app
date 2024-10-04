import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/layout/app-header";

export const AppWrapper = (): JSX.Element => {
  return (
    <>
      <Container maxWidth="sm" sx={{padding: 0}}>
        <AppHeader />
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ minHeight: '80vh' }} >
          <Outlet />
        </Box>
      </Container>
    </>
  );
}