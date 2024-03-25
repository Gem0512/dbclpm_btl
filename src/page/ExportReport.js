import React, { useState } from 'react'
import Header from '../components/Header'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ExportReport() {

  const [quan, setQuan] = React.useState('');

  const handleQuanChange = (event) => {
    setQuan(event.target.value);
  };

  const [phuong, setPhuong] = React.useState('');

  const handlePhuongChange = (event) => {
    setPhuong(event.target.value);
  };


  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;


  const [time1, setTime1] = React.useState('');
  const [open1, setOpen1] = React.useState(false);

  const handleYearChange1 = (event) => {
    setTime1(event.target.value);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const [time2, setTime2] = React.useState('');
  const [open2, setOpen2] = React.useState(false);

  const handleYearChange2 = (event) => {
    setTime2(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const [selectedValue, setSelectedValue] = useState('thang'); // Giá trị mặc định

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
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
            paddingTop: '100px',
            // paddingLeft: '50px',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box>
            <Box>
                <FormControl sx={{ m: 2, minWidth: 120, }} disabled>
                    <InputLabel id="demo-simple-select-disabled-label">Hà Nội</InputLabel>
                    <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    label="Hà nội"
                    >
                    <MenuItem value="">
                        <em>Hà Nội</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    {/* <FormHelperText>Disabled</FormHelperText> */}
                </FormControl>
                <FormControl sx={{ marginRight: '100px', marginLeft: '100px',marginTop:'15px', minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label">Quận</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={quan}
                    label="Quận"
                    onChange={handleQuanChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 2, minWidth: 250 }}>
                    <InputLabel id="demo-simple-select-helper-label">Phường</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={phuong}
                    label="Phường"
                    onChange={handlePhuongChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box style={{display: 'flex'}}>
                <Box>
                    <FormControl sx={{ m: 3, marginRight: '100px' }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Lọc theo</FormLabel>
                        <FormGroup>
                        <FormControlLabel
                            control={
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                            }
                            label="Công ty"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                            }
                            label="Hộ gia đình"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                            }
                            label="Trường học"
                        />
                        </FormGroup>
                    </FormControl>

                    <FormControl sx={{
                        paddingTop: '25px',
                        marginRight: '100px'
                    }}
                    >
                        <FormLabel id="demo-radio-buttons-group-label">Đóng theo</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="thang" control={<Radio />} label="Tháng" />
                            <FormControlLabel value="quy" control={<Radio />} label="Quý" />
                            <FormControlLabel value="nam" control={<Radio />} label="Năm" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box>
                    {
                        selectedValue==='nam' ? (
                            <Box>
                            <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen1}>
                                Chọn khoảng {selectedValue} lọc
                            </Button>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-controlled-open-select-label">Từ</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open1}
                                    onClose={handleClose1}
                                    onOpen={handleOpen1}
                                    value={time1}
                                    label="Age"
                                    onChange={handleYearChange1}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-controlled-open-select-label">Đến</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open2}
                                    onClose={handleClose2}
                                    onOpen={handleOpen2}
                                    value={time2}
                                    label="Age"
                                    onChange={handleYearChange2}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                            </FormControl>
                            </Box>
                        ):  
                        selectedValue==='quy' ?(
                            <Box>
                                <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen1}>
                                    Chọn khoảng thời gian lọc
                                </Button>
                               <Box style={{display:'flex'}}>
                                <Box>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-controlled-open-select-label">Từ quý</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open1}
                                                onClose={handleClose1}
                                                onOpen={handleOpen1}
                                                value={time1}
                                                label="Age"
                                                onChange={handleYearChange1}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>

                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-controlled-open-select-label">Năm</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open2}
                                                onClose={handleClose2}
                                                onOpen={handleOpen2}
                                                value={time2}
                                                label="Age"
                                                onChange={handleYearChange2}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>

                                        </FormControl>
                                    </Box>
                                    <Box  style={{
                                        display:'flex',
                                        alignItems: 'center'
                                    }}>
                                        <ArrowForwardIcon></ArrowForwardIcon>
                                    </Box>
                                    <Box>
                                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-controlled-open-select-label">Đến quý</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open1}
                                                onClose={handleClose1}
                                                onOpen={handleOpen1}
                                                value={time1}
                                                label="Age"
                                                onChange={handleYearChange1}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>

                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-controlled-open-select-label">Năm</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open2}
                                                onClose={handleClose2}
                                                onOpen={handleOpen2}
                                                value={time2}
                                                label="Age"
                                                onChange={handleYearChange2}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>

                                        </FormControl>
                                    </Box>
                               </Box>
                            </Box>
                        ):(
                            <Box>
                            <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen1}>
                                    Chọn khoảng thời gian lọc
                                </Button>
                               <Box style={{display:'flex'}}>
                                <Box>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-controlled-open-select-label">Từ tháng</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open1}
                                                onClose={handleClose1}
                                                onOpen={handleOpen1}
                                                value={time1}
                                                label="Age"
                                                onChange={handleYearChange1}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>

                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-controlled-open-select-label">Năm</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open2}
                                                onClose={handleClose2}
                                                onOpen={handleOpen2}
                                                value={time2}
                                                label="Age"
                                                onChange={handleYearChange2}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>

                                        </FormControl>
                                    </Box>
                                    <Box  style={{
                                        display:'flex',
                                        alignItems: 'center'
                                    }}>
                                        <ArrowForwardIcon></ArrowForwardIcon>
                                    </Box>
                                    <Box>
                                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-controlled-open-select-label">Đến tháng</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open1}
                                                onClose={handleClose1}
                                                onOpen={handleOpen1}
                                                value={time1}
                                                label="Age"
                                                onChange={handleYearChange1}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>

                                        </FormControl>
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-controlled-open-select-label">Năm</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={open2}
                                                onClose={handleClose2}
                                                onOpen={handleOpen2}
                                                value={time2}
                                                label="Age"
                                                onChange={handleYearChange2}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>

                                        </FormControl>
                                    </Box>
                               </Box>
                            </Box>
                        )
                    }
                    
                </Box>
            </Box>
            </Box>
            <Box style={{
                marginTop: '100px',
                marginLeft: '50px'
            }}>
                 <Button variant="contained">Lọc</Button>
            </Box>
        </Box>
        <Box style ={{ display:'flex', justifyContent:'center', width: '100%'}}>
          <Box style={{width: '80%'}} >
          {/* <TableListBHYT style={{width: '100%'}}></TableListBHYT> */}
          </Box>
        </Box>
    </Box>
  )
}
