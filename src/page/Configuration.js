import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

export default function Configuration() {
    const [luongCB, setLuongCB] = useState('');
    const [tiLeHS, setTiLeHS] = useState('');
    const [tiLePhaiDongHS, setTiLePhaiDongHS] = useState('');
    const [tiLeCT, setTiLeCT] = useState('');
    const [tiLeCN, setTiLeCN] = useState('');
    const [tiLeTV1, setTiLeTV1] = useState('');
    const [tiLeTV2, setTiLeTV2] = useState('');
    const [tiLeTV3, setTiLeTV3] = useState('');
    const [tiLeTV4, setTiLeTV4] = useState('');
    const [tiLeTV5, setTiLeTV5] = useState('');
    const [ngayHieuLuc, setNgayHieuLuc] = useState(dayjs().format('YYYY-MM-DD'));
    const [cauHinh, setCauHinh]= useState('');
    useEffect(() => {
        document.title = 'Cấu hình BHYT';
      }, []);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://26.164.228.111:8080/getcauhinh');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();

            setCauHinh(jsonData);
            setLuongCB(jsonData.luongCoBan);
            setTiLeHS(jsonData.tiLeHS);
            setTiLePhaiDongHS(jsonData.tiLePhaiDongHS);
            setTiLeCT(jsonData.tiLeCT);
            setTiLeCN(jsonData.tiLeCN);
            setTiLeTV1(jsonData.tiLeTV1);
            setTiLeTV2(jsonData.tiLeTV2);
            setTiLeTV3(jsonData.tiLeTV3);
            setTiLeTV4(jsonData.tiLeTV4);
            setTiLeTV5(jsonData.tiLeTV5);
            setNgayHieuLuc(jsonData.ngayHieuLuc);
        } catch (error) {
            console.log(error);
          } 
        };
      
        fetchData();
      }, []);

      const handleLuongCBChange = (event) => {
        setLuongCB(event.target.value);
    };

    const handleTiLeHSChange = (event) => {
        setTiLeHS(event.target.value);
    };

    const handleTiLePhaiDongHSChange = (event) => {
        setTiLePhaiDongHS(event.target.value);
    };
    const handleTiLeCTChange = (event) => {
        setTiLeCT(event.target.value);
    };
    const handleTiLeCNChange = (event) => {
        setTiLeCN(event.target.value);
    };
    const handleTiLeTV1Change = (event) => {
        setTiLeTV1(event.target.value);
    };
    const handleTiLeTV2Change = (event) => {
        setTiLeTV2(event.target.value);
    };
    const handleTiLeTV3Change = (event) => {
        setTiLeTV3(event.target.value);
    };
    const handleTiLeTV4Change = (event) => {
        setTiLeTV4(event.target.value);
    };
    const handleTiLeTV5Change = (event) => {
        setTiLeTV5(event.target.value);
    };
    const handleNgayHieuLucChange = (newDate) => {
        const dateString = newDate ? dayjs(newDate).format('YYYY-MM-DD') : '';
        setNgayHieuLuc(dateString);
        console.log(dateString)
      };
const [response, setResponse] =useState('');

      const handleLuuCauHinh = async () => {
        // setResponse(null);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            luongCoBan : luongCB,
            tiLeHS : tiLeHS,
            tiLePhaiDongHS : tiLePhaiDongHS,
            tiLeCT : tiLeCT,
            tiLeCN: tiLeCN,
            tiLeTV1 : tiLeTV1,
            tiLeTV2 : tiLeTV2,
            tiLeTV3 : tiLeTV3,
            tiLeTV4 : tiLeTV4,
            tiLeTV5 : tiLeTV5,
            ngayHieuLuc : ngayHieuLuc
          })
        };
    
        try {
          const res = await fetch('http://26.164.228.111:8080/updatecauhinh', requestOptions);
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await res.json();
          setResponse(data);
          console.log(res)
        } catch (error) {
            console.log(error);
        }
      };

  return (
    <Box style={{
        backgroundColor: 'white',
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
                                value={luongCB}
                                onChange={handleLuongCBChange}
                                defaultValue={luongCB}
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
                                value={tiLeHS}
                                onChange={handleTiLeHSChange}
                                defaultValue={tiLeHS}
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
                                value={tiLePhaiDongHS}
                                onChange={handleTiLePhaiDongHSChange}
                                defaultValue={tiLePhaiDongHS}
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
                                value={tiLeCT}
                                onChange={handleTiLeCTChange}
                                defaultValue={tiLeCT}
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
                                value={tiLeCN}
                                onChange={handleTiLeCNChange}
                                defaultValue={tiLeCN}
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
                                value={luongCB}
                                onChange={handleLuongCBChange}
                                defaultValue={luongCB}
                                
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
                                value={tiLeTV1}
                                onChange={handleTiLeTV1Change}
                                defaultValue={tiLeTV1}
                                
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
                                value={tiLeTV2}
                                onChange={handleTiLeTV2Change}
                                defaultValue={tiLeTV2}
                                
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
                                value={tiLeTV3}
                                onChange={handleTiLeTV3Change}
                                defaultValue={tiLeTV3}
                                
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
                                value={tiLeTV4}
                                onChange={handleTiLeTV4Change}
                                defaultValue={tiLeTV4}
                                
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
                                value={tiLeTV5}
                                onChange={handleTiLeTV5Change}
                                defaultValue={tiLeTV5}
                                
                            />
                            </FormControl>
                    </Box>
                </Box>
            </Box>
            
        </Box>

        <Box style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px'}}>
                        <Box style={{
                           
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center', 
                            paddingRight: 30
                        }}>
                            <Typography>Thời gian bắt đầu có hiệu lực của cấu hình</Typography>
                        </Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                            label="Chọn ngày bắt đầu"
                            minDate={dayjs()}
                    // value={ngayHieuLuc}
                    onChange={handleNgayHieuLucChange}
                    />
                        </LocalizationProvider>
                    </Box>
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px'
        }}>
            <Button variant="contained"
            onClick={handleLuuCauHinh}>Lưu</Button>
        </Box>
    </Box>
  )
}
