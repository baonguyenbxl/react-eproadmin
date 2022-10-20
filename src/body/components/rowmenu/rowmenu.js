import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'Show some love to MUI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

export const RowMenu= ()=>
{
  const [ anchorEl, setAnchorEl ] = React.useState < null | HTMLElement > ( null );
  const [ selectedIndex, setSelectedIndex ] = React.useState( 1 );
  const open = Boolean( anchorEl );
  const handleClickListItem = ( event: React.MouseEvent<HTMLElement> ) =>
  {
    setAnchorEl( event.currentTarget );
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) =>
  {
    setSelectedIndex( index );
    setAnchorEl( null );
  };

  const handleClose = () =>
  {
    setAnchorEl( null );
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={ { bgcolor: 'background.paper' } }
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={ open ? 'true' : undefined }
          onClick={ handleClickListItem }
        >
          <ListItemText
            primary="When device is locked"
            secondary={ options[ selectedIndex ] }
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
        MenuListProps={ {
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        } }
      >
        { options.map( ( option, index ) => (
          <MenuItem
            key={ option }
            disabled={ index === 0 }
            selected={ index === selectedIndex }
            onClick={ ( event ) => handleMenuItemClick( event, index ) }
          >
            { option }
          </MenuItem>
        ) ) }
      </Menu>
    </div>
  );
}

