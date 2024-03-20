import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TableQuan from '../components/TableQuan';
import TablePhuong from '../components/TablePhuong';
import TableToChuc from '../components/TableToChuc';
import TableCaNhan from '../components/TableCaNhan';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function ListBHYT() {

  const [quan, setQuan] = React.useState('');

  const handleQuanChange = (event) => {
    setQuan(event.target.value);
    console.log("Quận:", quan);
  };

  const [phuong, setPhuong] = React.useState('');

  const handlePhuongChange = (event) => {
    setPhuong(event.target.value);
    console.log("Phường:", phuong);

  };


  const [state, setState] = React.useState({
    cty: false,
    gd: false,
    truong: false,
  });

  const handleChange = (event) => {
    setToChucList([]);
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  console.log('check', state.cty, state.gd, state.truong)

  const { cty, gd, truong } = state;
//   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;


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

  const [quanDetail, setQuanDetail]=useState('');
  const [phuongDetail, setPhuongDetail]=useState('');
  const [toChucDetail, setToChucDetail] = useState('');

  console.log("quanDetail:", quanDetail);
  console.log("phuongDetail:", phuongDetail);

  const [hoGiaDinhList, setHoGiaDinhList] = useState([]);
  const [isLoadingGD, setIsLoadingGD] = useState(true);
  const [errorGD, setErrorGD] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://26.164.228.111:8080/getallhogiadinh');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setHoGiaDinhList(jsonData);
      } catch (error) {
        setErrorGD(error);
      } finally {
        setIsLoadingGD(false);
      }
    };

    fetchData();
  }, []);

  const [congTyList, setCongTyList] = useState([]);
  const [isLoadingCT, setIsLoadingCT] = useState(true);
  const [errorCT, setErrorCT] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://26.164.228.111:8080/getallcongty');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setCongTyList(jsonData);
      } catch (error) {
        setErrorCT(error);
      } finally {
        setIsLoadingCT(false);
      }
    };

    fetchData();
  }, []);


  const [truongList, setTruongList] = useState([]);
const [isLoadingTruong, setIsLoadingTruong] = useState(true);
const [errorTruong, setErrorTruong] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://26.164.228.111:8080/getalltruonghoc');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setTruongList(jsonData);
    } catch (error) {
      setErrorTruong(error);
    } finally {
      setIsLoadingTruong(false);
    }
  };

  fetchData();
}, []);
console.log(truongList);

  const [toChucList, setToChucList] = useState([...congTyList, ...hoGiaDinhList, ...truongList]);
  
useEffect(()=>{
  if ((state.cty && state.gd && state.truong) ||(state.cty===false && state.gd===false && state.truong===false)) {
    setToChucList([...congTyList, ...hoGiaDinhList, ...truongList]);
  } else if (state.cty &&  state.gd) {
    setToChucList([...congTyList, ...hoGiaDinhList]);
  } else if (state.cty &&  state.truong) {
    setToChucList([...congTyList, ...truongList]);
  }
    else if (state.gd &&  state.truong) {
      setToChucList([...truongList, ...hoGiaDinhList]);
    }
    else if(state.cty){
      setToChucList(congTyList);
    }
    else if(state.gd){
      setToChucList(hoGiaDinhList);
    }
    else if(state.truong){
      setToChucList(truongList);
    }
  // if(state.cty){
  //   setToChucList([...congTyList]);
  // }
  // if(state.gd){
  //   setToChucList([...hoGiaDinhList]);
  // }
  // if(state.truong){
  //   setToChucList([...truongList]);
  // }
},[state.cty, state.gd, state.truong])


console.log('congTyList', congTyList)

const [phuongList, setPhuongList] = useState([]);
const [isLoadingPhuong, setIsLoadingPhuong] = useState(true);
const [errorPhuong, setErrorPhuong] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://26.164.228.111:8080/getallphuong');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setPhuongList(jsonData);
    } catch (error) {
      setErrorPhuong(error);
    } finally {
      setIsLoadingPhuong(false);
    }
  };

  fetchData();
}, []);




  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://26.164.228.111:8080/getallquan');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);
  // const filteredPhuongList = phuongList.filter(phuong => phuong.idBHYTQuan === quan);
  const filteredPhuongList = phuongList.filter(phuong => {
    if (quan !== '') {
      return phuong.idBHYTQuan === quan;
    } else {
      return phuong.idBHYTQuan === quanDetail;
    }
  });

  const filteredToChucList = toChucList.filter(item => {
    if (phuong !== '') {
      return item.idBHYTPhuong === phuong;
    } else if (phuongDetail !== '') {
      return item.idBHYTPhuong === phuongDetail;
    }
  });
  console.log('toChucList', toChucList);
  console.log('filteredToChucList', filteredToChucList)


  
  
  return (
    <Box style={{
        backgroundColor: '#ccc',
        width: '100%',
        height: 'auto'
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
                    
                    {data.map((quanItem) => (
                      <MenuItem key={quanItem.id} value={quanItem.idBHYT}>
                        {quanItem.ten}
                      </MenuItem>
                    ))}
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
                    {filteredPhuongList.map((phuongItem) => (
                      <MenuItem key={phuongItem.idBHYT} value={phuongItem.idBHYT}>
                        {phuongItem.ten}
                      </MenuItem>
                    ))}
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
                            <Checkbox checked={cty} onChange={handleChange} name="cty" />
                            }
                            label="Công ty"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={gd} onChange={handleChange} name="gd" />
                            }
                            label="Hộ gia đình"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={truong} onChange={handleChange} name="truong" />
                            }
                            label="Trường học"
                        />
                        </FormGroup>
                    </FormControl>

                   
                </Box>

                <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DemoContainer components={['DatePicker']}> */}
                    <DatePicker label="Basic date picker" />
                {/* </DemoContainer> */}
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DemoContainer components={['DatePicker']}> */}
                    <DatePicker label="Basic date picker" />
                {/* </DemoContainer> */}
                </LocalizationProvider>
                    
                </Box>
            </Box>
            <Box style={{
                display:'flex',
                justifyContent:'space-between'
            }}>
            <Box>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Lọc theo</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="1" control={<Radio />} label="Đã đóng" />
                    <FormControlLabel value="2" control={<Radio />} label="Chưa đóng" />
                </RadioGroup>
                </FormControl>
            </Box>
            <Box style={{
                paddingTop: 40
            }}>
                <Button>Danh sách cá nhân</Button>
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
         {quan==='' && quanDetail==='' && (
            <TableQuan style={{width: '100%'}}
            setQuanDetail={setQuanDetail}
            data={data}
            ></TableQuan>
         )}
         {phuong==='' && quan!=='' &&  phuongDetail ==='' && (
            <TablePhuong style={{width: '100%'}}
            setPhuongDetail={setPhuongDetail}
            filteredPhuongList={filteredPhuongList}></TablePhuong>
         )}

         {quanDetail !=='' && phuongDetail ==='' &&(
            <TablePhuong style={{width: '100%'}}
            setPhuongDetail={setPhuongDetail}
            filteredPhuongList={filteredPhuongList}></TablePhuong>
         )}

         {/* {phuongDetail !==''&& toChucDetail===''&& (phuong!==''|| phuongDetail!=='')&&(
            <TableToChuc style={{width: '100%'}}
            setToChucDetail={setToChucDetail}
            filteredToChucList={filteredToChucList}></TableToChuc>
         )} */}
         {
            (quan !=='' || quanDetail!=='') &&  (phuong!==''|| phuongDetail!=='') && toChucDetail===''&&(
                <TableToChuc style={{width: '100%'}}
                setToChucDetail={setToChucDetail}
                filteredToChucList={filteredToChucList}></TableToChuc>
            )
         }
         {
            toChucDetail !=='' && (
                <TableCaNhan style={{width: '100%'}}></TableCaNhan>
            )
         }
          </Box>
        </Box>
    </Box>
  )
}
