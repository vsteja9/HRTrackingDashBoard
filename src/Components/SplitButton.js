import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// type callbackFunction = () => void;
// interface ISplitButtonOption {
//   text: string;
//   callback: callbackFunction;
//   sx?: SxProps<Theme>;
// }

// type SplitButtonProps = {
//   optionsMapping: Array<ISplitButtonOption>;
//   dataTestId: string;
//   sx?: SxProps<Theme>;
//   variant?: 'contained' | 'outlined' | 'text' | undefined;
//   onChange?: Dispatch<SetStateAction<number>>;
//   disabled?: boolean;
//   startIcon?: React.ReactNode;
// };

function SplitButton(props) {
  const { optionsMapping, dataTestId, sx, variant, onChange, disabled, startIcon } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex] = React.useState(0);

  const options = optionsMapping.map((option) => option.text);

  const handleClick = () => {
    const currentSelection= optionsMapping[selectedIndex];
    currentSelection.callback();
  };

  const handleMenuItemClick = (event, index) => {
    setOpen(false);

    if (onChange) {
      onChange(index);
    }

    const currentSelection= optionsMapping[index];
    currentSelection.callback();
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;

    setOpen(false);
  };

  const renderSplitButton = () => (
    <ButtonGroup variant={variant} ref={anchorRef} aria-label='split button' data-testid={dataTestId}>
      <Button onClick={handleClick} disabled={disabled} data-testid='primaryButton' startIcon={startIcon}>
        {options[selectedIndex]}
      </Button>
      <Button
        size='small'
        disabled={disabled}
        aria-controls={open ? 'split-button-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='menu'
        onClick={handleToggle}
        data-testid='toggleButton'
      >
        <ArrowDropDownIcon />
      </Button>
    </ButtonGroup>
  );

  return (
    <Box sx={sx} display='flex' justifyContent='flex-end'>
      {renderSplitButton()}
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 1000 }}
        data-testid='popper'
        placement='bottom-end'
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu' autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      sx={optionsMapping[index].sx}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      data-testid={`menuItem-${index}`}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

SplitButton.defaultProps = {
  sx: {},
  variant: 'contained',
  onChange: undefined,
  disabled: false,
  startIcon: undefined,
};

export default SplitButton;
