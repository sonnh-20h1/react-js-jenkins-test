import type { FC } from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import CreditCard01Icon from '@untitled-ui/icons-react/build/esm/CreditCard01';
import Settings04Icon from '@untitled-ui/icons-react/build/esm/Settings04';
import User03Icon from '@untitled-ui/icons-react/build/esm/User03';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/components/router-link';
import { useMockedUser } from 'src/hooks/use-mocked-user';
import { useRouter } from 'src/hooks/use-router';
import { paths } from 'src/paths';

interface AccountPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

export const AccountPopover: FC<AccountPopoverProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const router = useRouter();
  const user = useMockedUser();

  const handleLogout = useCallback(async (): Promise<void> => {
    try {
      onClose?.();
      router.push(paths.index);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, [router, onClose]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
      disableScrollLock
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 200 } }}
      {...other}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="body1">{user.name}</Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          demo@devias.io
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        <ListItemButton
          component={RouterLink}
          href="#"
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <User03Icon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1">Profile</Typography>} />
        </ListItemButton>
        <ListItemButton
          component={RouterLink}
          href="#"
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <Settings04Icon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1">Settings</Typography>} />
        </ListItemButton>
        <ListItemButton
          component={RouterLink}
          href={paths.index}
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <CreditCard01Icon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={<Typography variant="body1">Billing</Typography>} />
        </ListItemButton>
      </Box>
      <Divider sx={{ my: '0 !important' }} />
      <Box
        sx={{
          display: 'flex',
          p: 1,
          justifyContent: 'center',
        }}
      >
        <Button
          color="inherit"
          onClick={handleLogout}
          size="small"
        >
          Logout
        </Button>
      </Box>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
