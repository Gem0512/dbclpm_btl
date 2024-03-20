import React from 'react'
import Header from '../components/Header'
import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'

export default function Configuration() {
  return (
    <Box style={{
        backgroundColor: '#ccc',
        width: '100%',
        height: '1000px'
    }}>
        <Box style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            /* Khoảng cách lề bên trong header */
            zIndex: 1000,
        }}>
            <Header></Header>
        </Box>
        
        <Box style={{
            paddingTop: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box style={{
                display:'flex',
                margin: '30px',
                }}>
                <Box style={{
                    margin: '30px',
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography>Học sinh</Typography>
                </Box>
                <Box style={{
                    // width: '50%'
                }}>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Lương cơ bản</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỉ lệ</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỉ lệ phải đóng</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                </Box>
            </Box>

            <Box style={{
                display:'flex',
                margin: '30px',
                
                }}>
                <Box style={{
                    margin: '30px',
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography>Công ty</Typography>
                </Box>
                <Box >
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỷ lệ của công ty</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỉ lệ của cá nhân</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                </Box>
            </Box>
            <Box style={{
                display:'flex',
                margin: '0px',
                }}>
                <Box style={{
                    margin: '30px',
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography>Hộ gia đình</Typography>
                </Box>
                <Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '70%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Lương cơ bản</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '70%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỉ lệ</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '70%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỉ lệ người thứ 2</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '70%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỉ lệ người thứ 3</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '70%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỉ lệ người thứ 4</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                    <Box style={{display:'flex'}}>
                        <Box style={{
                            width: '70%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>Tỉ lệ người thứ 5 trở đi</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">đ</InputAdornment>}
                                label="Amount"
                            />
                            </FormControl>
                    </Box>
                </Box>
            </Box>
            
        </Box>
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px'
        }}>
            <Button variant="contained">Lưu</Button>
        </Box>
    </Box>
  )
}
