import { Box, TextField } from "@mui/material";


interface Props {
  handleSubmit: (value: string) => void;
}

export default function PlayerSearch(props: Props): JSX.Element {
  const {handleSubmit} = props;

  return (
    <>
      <Box sx={{ width: 500, maxWidth: '100%' }}>
        <TextField 
          fullWidth
          label="player name"
          id="player-name" 
          margin="normal"
          onChange={(event) => { handleSubmit(event.target.value); }}
          type="search"
          autoComplete="off"
        />
      </Box>
    </>
  );
}