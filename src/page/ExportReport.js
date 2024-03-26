import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import TableQuan from '../exportReport/TableQuan';
import TablePhuong from '../exportReport/TablePhuong';
import TableToChuc from '../exportReport/TableToChuc';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import axios from 'axios';
import dayjs from 'dayjs';

export default function ListBHYT() {

  const [quan, setQuan] = React.useState('');
  const [phuong, setPhuong] = React.useState('');
  const [stateLT, setStateLT] = React.useState("3");

  const handleQuanChange = (event) => {
    setQuan(event.target.value);
    if(event.target.value===""){
      setPhuong(null);
    }
    console.log("Quận:", quan);
  };



  const handlePhuongChange = (event) => {
    setPhuong(event.target.value);
    console.log("Phường:", phuong);

  };


  const [selectedDate1, setSelectedDate1] = useState(null);

  // Hàm xử lý sự kiện khi người dùng chọn một ngày mới
  const handleDateChange1 = (newDate) => {
    const dateString = newDate ? dayjs(newDate).format('YYYY-MM-DD') : '';
    setSelectedDate1(dateString);
    console.log(dateString)
  };

  const [selectedDate2, setSelectedDate2] = useState(null);

  // Hàm xử lý sự kiện khi người dùng chọn một ngày mới
  const handleDateChange2 = (newDate) => {
    const dateString = newDate ? dayjs(newDate).format('YYYY-MM-DD') : '';
    setSelectedDate2(dateString);
    console.log(dateString)
  };
  

  // const [filteredDate, setFilteredDate] = useState([]);

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const filteredData = response!==''?response:data.filter(item => {
  //         const fromDate = new Date(item.tuNgay).toISOString().split('T')[0]; 
  //         const toDate = new Date(item.denNgay).toISOString().split('T')[0];


  //         return fromDate <= selectedDate1 && toDate >= selectedDate2;
  //     });

  //     console.log("fromDate <= selectedDate1", new Date(selectedDate2).toISOString().split('T')[0])
  //     console.log("fromDate <= selectedDate1",selectedDate2)
  //     setFilteredDate(filteredData);
  //     setResponse(filteredData);
  //     console.log("filteredData", filteredDate)
  // };

  // fetchData();
  // }, [selectedDate1, selectedDate2])

  const [caNhanTP, setCaNhanTP] =useState(false);


  const [state, setState] = React.useState({
    cty: false,
    gd: false,
    truong: false,
  });

  const handleChange = (event) => {
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
  const [ctyDetail, setCtyDetail]= useState('');
  const [gdDetail, setGdDetail]= useState('');
  const [truongDetail, setTruongDetail]= useState('');


  console.log("quanDetail:", quanDetail);
  console.log("phuongDetail:", phuongDetail);
  console.log("toChucDetail", toChucDetail);
  console.log("ctyDetail", ctyDetail);
  console.log("gdDetail", gdDetail);
  console.log("truongDetail", truongDetail);


  const [response, setResponse] = useState(null);
  const [checkChange, setCheckChange]= useState(false);
  const [errorKQ, setErrorKQ] = useState(null);
useEffect(()=>{
  
  const fetchDataKQ = async () => {
    // setResponse(null);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quan: quan||quanDetail||null,
        phuong: phuong||phuongDetail|| null,
        congTy: state.cty,
        truongHoc: state.truong,
        hoGiaDinh: state.gd
      })
    };

    try {
      const res = await fetch('http://26.164.228.111:8080/query', requestOptions);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setResponse(data);
      if(quan==="" && phuong===null){
        setCheckChange(true);
      }
      else setCheckChange(false);
      setErrorKQ(null);
    } catch (error) {
      setErrorKQ('Error fetching data');
      setResponse(null);
    }
  };
  fetchDataKQ();
},[quan,quanDetail, phuong, phuongDetail ,state.cty, state.truong, state.gd])


 console.log('response', response);
 console.log('quan', quan);
 console.log('quanDetail', quanDetail);
 console.log('phuong', phuong);
 console.log('phuongDetail', phuongDetail);
 console.log('state.cty', state.cty);
 console.log('state.truong', state.truong);
 console.log('state.gd', state.gd);

 

const [allCaNhan, setAllCaNhan] = useState([]);
const [isLoadingCaNhan, setIsLoadingCaNhan] = useState(true);
const [errorCaNhan, setErrorCaNhan] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://26.164.228.111:8080/getallcanhan');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setAllCaNhan(jsonData);
    } catch (error) {
      setErrorCaNhan(error);
    } finally {
      setIsLoadingCaNhan(false);
    }
  };

  fetchData();
}, []);


const [caNhanPhuong, setCaNhanPhuong] = useState(null);

useEffect(() => {
  const phuongFinal=  phuong||phuongDetail||null;
  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://26.164.228.111:8080/getcanhantrongphuong',
        phuongFinal, // Dữ liệu JSON là "P001"
        {
          headers: {
            'Content-Type': 'application/json' // Xác định kiểu dữ liệu là JSON
          }
        }
      );
      setCaNhanPhuong(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [phuong, phuongDetail]); 

console.log("caNhanPhuong", caNhanPhuong)



const [caNhanToChuc, setCaNhanToChuc] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://26.164.228.111:8080/getcanhantrongtochuc',
        toChucDetail, // Dữ liệu JSON là "P001"
        {
          headers: {
            'Content-Type': 'application/json' // Xác định kiểu dữ liệu là JSON
          }
        }
      );
      setCaNhanToChuc(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [toChucDetail]); 

console.log("caNhanToChuc", caNhanToChuc)


const [caNhanCty, setCaNhanCty] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://26.164.228.111:8080/getcanhantrongcongty',
        ctyDetail, // Dữ liệu JSON là "P001"
        {
          headers: {
            'Content-Type': 'application/json' // Xác định kiểu dữ liệu là JSON
          }
        }
      );
      setCaNhanCty(response.data);
      console.log("caNhanCty", response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [ctyDetail]); 

console.log("caNhanCty", caNhanCty)



const [caNhanGD, setCaNhanGD] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://26.164.228.111:8080/getcanhantronghogiadinh',
        gdDetail, // Dữ liệu JSON là "P001"
        {
          headers: {
            'Content-Type': 'application/json' // Xác định kiểu dữ liệu là JSON
          }
        }
      );
      setCaNhanGD(response.data);
      console.log("setCaNhanGD", response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [gdDetail]);

const [caNhanTruong, setCaNhanTruong] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://26.164.228.111:8080/getcanhantrongtruonghoc',
        truongDetail, // Dữ liệu JSON là "P001"
        {
          headers: {
            'Content-Type': 'application/json' // Xác định kiểu dữ liệu là JSON
          }
        }
      );
      setCaNhanTruong(response.data);
      console.log("setCaNhanGD", response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [truongDetail]);


const [caNhanQuan, setCaNhanQuan] = useState(null);

useEffect(() => {
  const quanFinal=  quan||quanDetail||null;
  const fetchData = async () => {
    try {
      const response = await axios.post(
        'http://26.164.228.111:8080/getcanhantrongquan',
        quanFinal, // Dữ liệu JSON là "P001"
        {
          headers: {
            'Content-Type': 'application/json' // Xác định kiểu dữ liệu là JSON
          }
        }
      );
      setCaNhanQuan(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [quan, quanDetail]); 

console.log("caNhanQuan", caNhanQuan)


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


  
  return (
    <Box style={{
        backgroundColor: 'white',
        width: '100%',
        height: 1200,
        
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
                    </Select>
                    {/* <FormHelperText>Disabled</FormHelperText> */}
                </FormControl>
                <FormControl sx={{ marginRight: '100px', marginLeft: '105px',marginTop:'15px', minWidth: 258 }}>
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
                <FormControl sx={{ m: 2, minWidth: 258 }}>
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

                <Box style={{
                  display:'flex',
                  paddingTop: 60
                }}>
                <Box style={{
                  // width: 200,
                  paddingRight: 116
                }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                    label="Chọn ngày bắt đầu"
                    value={selectedDate1}
                    onChange={handleDateChange1}
                    renderInput={(params) => <TextField {...params} />} />
                </LocalizationProvider>
                </Box>

                <Box style={{
                  // width: 200,
                  // paddingRight: 110
                }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                    label="Chọn ngày kết thúc"
                    value={selectedDate2}
                    // minDate={selectedDate1.dayjs}
                    onChange={handleDateChange2}
                    renderInput={(params) => <TextField {...params} />} />
                </LocalizationProvider>
                </Box>
                    
                </Box>
            </Box>
            <Box style={{
                display:'flex',
                justifyContent:'space-between'
            }}>
            <Box>
            
            </Box>
            
            </Box>
            </Box>
           
        </Box>
        <Box style ={{ display:'flex', justifyContent:'center', width: '100%', marginTop: 60}}>
          <Box style={{width: '80%'}} >

         {caNhanTP===false && (quan==='' && quanDetail==='') &&(phuong==='' && phuongDetail==='')&& (state.cty === false && state.truong===false && state.gd=== false) && (
            <TableQuan style={{width: '100%'}}
            setQuanDetail={setQuanDetail}
            response={response||data}
            setCaNhanTP={setCaNhanTP}
            stateLT = {stateLT}
            setStateLT = {setStateLT}
            selectedDate1={selectedDate1}
            selectedDate2={selectedDate2}
            ></TableQuan>
         )}

         {/* {caNhanTP===false && (quan==="") &&(phuong!=='' || phuongDetail!=='')&& (state.cty === false && state.truong===false && state.gd=== false) && (
            <TableQuan style={{width: '100%'}}
            setQuanDetail={setQuanDetail}
            response={response||data}
            setCaNhanTP={setCaNhanTP}
            stateLT = {stateLT}
            setStateLT = {setStateLT}
            selectedDate1={selectedDate1}
            selectedDate2={selectedDate2}
            ></TableQuan>
         )} */}


          
        {toChucDetail==='' && caNhanTP === false && (state.cty !== false || state.truong!==false || state.gd!== false) && (
          <TableToChuc 
          response={response} 
          setCaNhanTP={setCaNhanTP}
          setToChucDetail={setToChucDetail}
          stateLT = {stateLT}
          setStateLT = {setStateLT}
          selectedDate1={selectedDate1}
          selectedDate2={selectedDate2}
          setCtyDetail={setCtyDetail}
          setGdDetail={setGdDetail}
          setTruongDetail={setTruongDetail}>
          </TableToChuc>
         )}




         {toChucDetail==='' && caNhanTP ===false && (quan!=='' || quanDetail!=='') &&(phuong!=='' || phuongDetail!=='')&& (state.cty ===false && state.truong===false && state.gd===false) && (
          <TableToChuc 
          response={response} 
          setCaNhanTP={setCaNhanTP}
          setToChucDetail={setToChucDetail}
          stateLT = {stateLT}
          setStateLT = {setStateLT}
          selectedDate1={selectedDate1}
          selectedDate2={selectedDate2}
          setCtyDetail={setCtyDetail}
          setGdDetail={setGdDetail}
          setTruongDetail={setTruongDetail}>

          </TableToChuc>
         )}



         {caNhanTP===false &&(quan!=='' || quanDetail!=='') &&(phuong==='' && phuongDetail==='')&& (state.cty ===false && state.truong===false && state.gd===false) && (
            <TablePhuong style={{width: '100%'}}
            setPhuongDetail={setPhuongDetail}
            response={response}
            setCaNhanTP={setCaNhanTP}
            stateLT = {stateLT}
            setStateLT = {setStateLT}
            selectedDate1={selectedDate1}
            selectedDate2={selectedDate2}
            ></TablePhuong>
         )}

         {caNhanTP===false &&(quan!=='' || quanDetail!=='') &&(phuong===null)&& (state.cty ===false && state.truong===false && state.gd===false) && (
            <TablePhuong style={{width: '100%'}}
            setPhuongDetail={setPhuongDetail}
            response={response}
            setCaNhanTP={setCaNhanTP}
            stateLT = {stateLT}
            setStateLT = {setStateLT}
            selectedDate1={selectedDate1}
            selectedDate2={selectedDate2}
            ></TablePhuong>
         )}



         {caNhanTP===false &&(quan==='' && quanDetail==='') &&(phuong!=='' || phuongDetail!=='')&& (state.cty ===false && state.truong===false && state.gd===false) && (
            <TablePhuong style={{width: '100%'}}
            setPhuongDetail={setPhuongDetail}
            response={response}
            setCaNhanTP={false}
            stateLT = {stateLT}
            setStateLT = {setStateLT}
            selectedDate1={selectedDate1}
            selectedDate2={selectedDate2}
            ></TablePhuong>
         )}

    
        
          </Box>
        </Box>
    </Box>
  )
}
