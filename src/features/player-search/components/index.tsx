import { Box, TextField } from "@mui/material";


interface Props {
  handleSubmit: (value: string) => void;
}

export default function PlayerSearch(props: Props): JSX.Element {
  const {handleSubmit} = props;

  return (
    <>
      <Box sx={{ maxWidth: '100%' }}>
        <TextField 
          fullWidth
          label="player search"
          id="player-name" 
          margin="normal"
          placeholder="Enter a full or partial player name"
          onChange={(event) => { handleSubmit(event.target.value); }}
          type="search"
          autoComplete="off"
        />
      </Box>
    </>
  );
}