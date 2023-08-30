import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(5), minWidth: 150, marginBottom: '30px',marginRight: '20px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));