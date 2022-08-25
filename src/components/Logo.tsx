import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import './Logo.css'
import logo from '../assets/sofloc-logo.svg'

export function Logo ({ sx }: {
  sx?: SxProps<Theme>,
}) {
  return(
    <Typography
      className='navbar-item logo'
      variant='h5'
      noWrap
      component='div'
      sx={sx}
    >
      <a href='/'>
        <img src={logo} alt="sofloc-logo" />
      </a>
    </Typography>
  )
}
