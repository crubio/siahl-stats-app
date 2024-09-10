import Box from '@mui/material/Box';
import type { JSX } from 'react/jsx-runtime';
import type { Player } from '../../common/types';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface VirtualPlayerListProps {
  items: Array<Player>;
}

function renderList(items: Array<Player>): JSX.Element {
  return (
    <Box>
      <List>
      {items.map((item, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton>
            <ListItemText primary={item[1]} />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
    </Box>
  );
}

export default function VirtualizedList(props: VirtualPlayerListProps): JSX.Element {
  return (
    <>
      {props.items.length > 0 && (
      <Box
        sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
        {renderList(props.items)}
      </Box>
    )}
    </>
  );
}