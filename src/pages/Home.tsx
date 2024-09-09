import type { FunctionComponent } from "../common/types";
import { Typography } from '@mui/material';

export const Home = (): FunctionComponent => {

	return (
		<div className="container">
			<Typography component="h1" sx={{ mb: 2 }} variant="h4">
        SIAHL player stats
      </Typography>
		</div>
	);
};
