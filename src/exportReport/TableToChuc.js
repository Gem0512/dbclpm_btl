import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import dayjs from 'dayjs';

function createData(idToChuc, tenToChuc, soLuong, daDong, conNo, ghiChu) {
  return {
    idToChuc, tenToChuc, soLuong, daDong, conNo, ghiChu
  };
}

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67, 4.3, 67, 4.3, 67),
  createData(2, 'Donut', 452, 25.0, 51, 4.9, 67, 4.3, 67),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0, 67, 4.3, 67),
  createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0, 67, 4.3, 67),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9, 67, 4.3, 67),
  createData(6, 'Honeycomb', 408, 3.2, 87, 6.5, 67, 4.3, 67),
  createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3, 67, 4.3, 67),
  createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0, 67, 4.3, 67),
  createData(9, 'KitKat', 518, 26.0, 65, 7.0, 67, 4.3, 67),
  createData(10, 'Lollipop', 392, 0.2, 98, 0.0, 67, 4.3, 67),
  createData(11, 'Marshmallow', 318, 0, 81, 2.0, 67, 4.3, 67),
  createData(12, 'Nougat', 360, 19.0, 9, 37.0, 67, 4.3, 67),
  createData(13, 'Oreo', 437, 18.0, 63, 4.0, 67, 4.3, 67),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
// idQuan, tenQuan, soLuong, mucDong, daDong, conNo, kiHan, ghiChu
const headCells = [
  {
    id: 'idToChuc',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'tenToChuc',
    numeric: true,
    disablePadding: false,
    label: 'Tên tổ chức',
  },
  {
    id: 'soLuong',
    numeric: true,
    disablePadding: false,
    label: 'Số lượng người tham gia',
  },

  {
    id: 'daDong',
    numeric: true,
    disablePadding: false,
    label: 'Đã đóng',
  },
  {
    id: 'conNo',
    numeric: true,
    disablePadding: false,
    label: 'Còn nợ',
  },
  {
    id: 'ghiChu',
    numeric: true,
    disablePadding: false,
    label: 'Ghi chú',
  },
//   {
//     id: 'chitiet',
//     numeric: true,
//     disablePadding: false,
//     label: 'Chi tiết',
//   },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected,stateLT, setStateLT, setCaNhanTP } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Box style={{
          display:'flex',
          width: '100%',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Typography
          // sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Báo cáo BHYT các tổ chức
        </Typography>
      <Box>
      <FormControl style={{
        display:'flex'
        }}>
                <FormLabel id="demo-radio-buttons-group-label">Lọc theo</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                    value={stateLT}
                    onChange={(e) => {
                      setStateLT(e.target.value)
                      }
                    }
                    // style={{display:'flex'}}
                >
                    <FormControlLabel value="1" control={<Radio />} label="Đã đóng" />
                    <FormControlLabel value="2" control={<Radio />} label="Chưa đóng" />
                    <FormControlLabel value="3" control={<Radio />} label="Cả hai" />
                </RadioGroup>
                </FormControl>
      </Box>
          <Box style={{
                paddingTop: 40
            }}>
                {/* <Button variant="contained" sx={{
                  marginRight: 10,
                }}
                onClick={()=>{
                  setCaNhanTP(true);
                  setStateLT("3")
                }}>Danh sách cá nhân</Button> */}
                {/* <Button variant="contained" onClick={()=>{
                  setCaNhanTP(false);
                 
                }}>Quay lại</Button> */}
            </Box>
        </Box>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function TableToChuc({response, setCaNhanTP, setToChucDetail,stateLT, setStateLT, selectedDate1, selectedDate2, setCtyDetail, setGdDetail, setTruongDetail}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  console.log("YYYYYYY", response)

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} stateLT ={stateLT} setStateLT ={setStateLT} setCaNhanTP={setCaNhanTP}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
            {/* {response.CongTy.} */}
            {response && response.CongTy && response.CongTy
              .filter(row => {
                // console.log(stateLT)
                console.log(row.conNo)
                if (stateLT === "1") {
                  return parseInt(row.conNo) !== 0 ? false : true
                }
                if (stateLT === "2") {
                  return parseInt(row.conNo) !== 0 ? true : false
                }
                if (stateLT === "3") {
                  return true
                }
              })
              .filter(row => {
                  // Kiểm tra xem selectedDate1 và selectedDate2 có được chọn hay không
                  const isSelectedDateRange = selectedDate1 && selectedDate2;

                  // Kiểm tra xem ngày của mục nằm trong khoảng [selectedDate1, selectedDate2] hay không
                  const isDateInRange = isSelectedDateRange && 
                      new Date(row.tuNgay) >= new Date(selectedDate1) && 
                      new Date(row.denNgay) <= new Date(selectedDate2);

                  // Trả về true nếu không có khoảng ngày được chọn hoặc mục nằm trong khoảng ngày được chọn
                  return !isSelectedDateRange || isDateInRange;
              })
              .map((row, index) => {
              const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
{/* // idQuan, tenQuan, soLuong, mucDong, daDong, conNo, kiHan, ghiChu */}
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.idBHYT}
                    </TableCell>
                    <TableCell align="right">{row.ten}</TableCell>
                    <TableCell align="right">{row.soLuong}</TableCell>
                    <TableCell align="right">{row.daDong}</TableCell>
                    <TableCell align="right">{row.conNo}</TableCell>
                    <TableCell align="right">{row.ghiChu}</TableCell>
                    <TableCell align="right" padding="button">
                    {/* <Button variant="contained" color="primary" onClick={()=>{
                        setToChucDetail(row.idBHYT);
                        setCtyDetail(row.idBHYT);
                    }}>
                        Chi tiết
                    </Button> */}
                    </TableCell>
                  </TableRow>
                );
            }
       
      )}

      {response && response.TruongHoc && response.TruongHoc
              .filter(row => {
                // console.log(stateLT)
                console.log(row.conNo)
                if (stateLT === "1") {
                  return parseInt(row.conNo) !== 0 ? false : true
                }
                if (stateLT === "2") {
                  return parseInt(row.conNo) !== 0 ? true : false
                }
                if (stateLT === "3") {
                  return true
                }
              })
              .filter(row => {
                  // Kiểm tra xem selectedDate1 và selectedDate2 có được chọn hay không
                  const isSelectedDateRange = selectedDate1 && selectedDate2;

                  // Kiểm tra xem ngày của mục nằm trong khoảng [selectedDate1, selectedDate2] hay không
                  const isDateInRange = isSelectedDateRange && 
                      new Date(row.tuNgay) >= new Date(selectedDate1) && 
                      new Date(row.denNgay) <= new Date(selectedDate2);

                  // Trả về true nếu không có khoảng ngày được chọn hoặc mục nằm trong khoảng ngày được chọn
                  return !isSelectedDateRange || isDateInRange;
              })
              .map((row, index) => {
              const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
{/* // idQuan, tenQuan, soLuong, mucDong, daDong, conNo, kiHan, ghiChu */}
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.idBHYT}
                    </TableCell>
                    <TableCell align="right">{row.ten}</TableCell>
                    <TableCell align="right">{row.soLuong}</TableCell>
                    <TableCell align="right">{row.daDong}</TableCell>
                    <TableCell align="right">{row.conNo}</TableCell>
                    <TableCell align="right">{row.ghiChu}</TableCell>
                  
                  </TableRow>
                );
            }
       
      )}

      {response && response.HoGiaDinh && response.HoGiaDinh
              .filter(row => {
                // console.log(stateLT)
                console.log(row.conNo)
                if (stateLT === "1") {
                  return parseInt(row.conNo) !== 0 ? false : true
                }
                if (stateLT === "2") {
                  return parseInt(row.conNo) !== 0 ? true : false
                }
                if (stateLT === "3") {
                  return true
                }
              })
              .filter(row => {
                  // Kiểm tra xem selectedDate1 và selectedDate2 có được chọn hay không
                  const isSelectedDateRange = selectedDate1 && selectedDate2;

                  // Kiểm tra xem ngày của mục nằm trong khoảng [selectedDate1, selectedDate2] hay không
                  const isDateInRange = isSelectedDateRange && 
                      new Date(row.tuNgay) >= new Date(selectedDate1) && 
                      new Date(row.denNgay) <= new Date(selectedDate2);

                  // Trả về true nếu không có khoảng ngày được chọn hoặc mục nằm trong khoảng ngày được chọn
                  return !isSelectedDateRange || isDateInRange;
              })
              .map((row, index) => {
              const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
{/* // idQuan, tenQuan, soLuong, mucDong, daDong, conNo, kiHan, ghiChu */}
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.idBHYT}
                    </TableCell>
                    <TableCell align="right">{row.ten}</TableCell>
                    <TableCell align="right">{row.soLuong}</TableCell>
                    <TableCell align="right">{row.daDong}</TableCell>
                    <TableCell align="right">{row.conNo}</TableCell>
                    <TableCell align="right">{row.ghiChu}</TableCell>
                   
                  </TableRow>
                );
            }
       
      )}
              
              {/* id, ten, diaChi, tuoi, mucDong, trangThai, ghiChu, kiHan, thoiGian */}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}