// Ví dụ trong component Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Menu, MenuItem } from '@mui/material';
const Header = () => {
    const [color, setColor] = useState('black');
    const handleClick = () => {
        // Thay đổi màu sắc
        setColor('#00ff00'); // Màu sắc mới khi click
      };

      const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickAccount = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Box style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '80px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center'
         }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', }}>
        <li style={{ 
            marginRight: '20px',
        
            }}>
            <Button>
                <Link to="/listBHYT"
                style={{
                    textDecoration:'none',
                    color: 'white',
                    fontWeight:'bold',
                    fontSize: '16px'
                }}
                onClick={handleClick}
                >Danh sách BHYT</Link>
            </Button>
        </li>
        <li style={{ 
            marginRight: '20px' 
            }}>
            <Button>
                <Link to="/exportReport"
                 style={{
                    textDecoration:'none',
                    color: 'white',
                    fontWeight:'bold',
                    fontSize: '16px'
                }}
                >Xuất báo cáo</Link>
            </Button>
        </li>
        <li style={{ 
            marginRight: '20px' 
            }}>
            <Button>
                <Link to="/configuration"
                 style={{
                    textDecoration:'none',
                    color: 'white',
                    fontWeight:'bold',
                    fontSize: '16px'
                }}
                >Cấu hình</Link>
            </Button>
        </li>
        <li style={{ 
            marginRight: '20px' 
            }}>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickAccount}
                        style={{
                            color: 'white',
                        }}
                    >
                        <AdminPanelSettingsIcon></AdminPanelSettingsIcon>

                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
        </li>
        <li style={{ 
            marginRight: '0px' 
            }}>
            <Button>
                <Link to="/configuration"
                     style={{
                    textDecoration:'none',
                    color: 'white',
                    fontWeight:'bold',
                    fontSize: '16px'
                }}
                    >
                    <LogoutIcon></LogoutIcon>
                </Link>
            </Button>
        </li>
      </ul>
    </Box>
  );
};

export default Header;
