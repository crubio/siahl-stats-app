import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
import { Container, Box, Typography, Link } from '@mui/material';

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

function Copyright(): JSX.Element {
  return (
    <Typography
      align="center"
      variant="body2"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        Chris Rubio
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Copyright />
        </Box>
      </Container>
		</QueryClientProvider>
	);
};

export default App;
