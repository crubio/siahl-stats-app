import type { JSX } from 'react/jsx-runtime';
import type { Player } from '../../common/types';
import { List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface VirtualPlayerListProps {
  items: Array<Player>;
}

export default function VirtualizedList(props: VirtualPlayerListProps): JSX.Element {
  const nagivate = useNavigate();

  function renderList(items: Array<Player>): JSX.Element {

    return (
      <List>
      {items.map((item, index) => (
        <ListItem divider disablePadding key={index}>
          <ListItemButton onClick={() => { nagivate(`/player/${item[0]}`); }}>
            <ListItemText primary={item[1]} secondary={item[0]} />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
    );
  }

  return (
    <>
      {props.items.length > 0 && (
      <Paper elevation={1}
        sx={{ width: '100%', height: 400, overflow: 'auto' }}
      >
        {renderList(props.items)}
      </Paper>
    )}
    </>
  );
}