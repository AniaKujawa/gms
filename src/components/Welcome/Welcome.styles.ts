import { makeStyles, createStyles } from '@material-ui/core/styles';
import { theme } from '../../styles/theme';
import bcg from './../../assets/bcg.jpg';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: `url(${bcg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: 600,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
  }),
);
