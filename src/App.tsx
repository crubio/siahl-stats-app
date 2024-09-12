import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FunctionComponent } from "./common/types";
import { Container, Box } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from "./pages/Error";
import { AppWrapper } from "./routes/root";
import { Home } from "./pages/Home";
import Footer from "./components/layout/footer";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>about page</div>,
      },
    ],
  }
]);



const App = (): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
			<Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Footer />
        </Box>
      </Container>
		</QueryClientProvider>
	);
};

export default App;
