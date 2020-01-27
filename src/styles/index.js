import { createMuiTheme } from '@material-ui/core/styles';

// --large-viewport: 1440px;
// --medium-viewport: 1024px;
// --small-viewport: 900px;
// --xsmall-viewport: 568px;
// --max-width: 1440px;
// --c--page-background: #2a2f36;
// --c--white: #fff;
// --c--gray-border: #485059;
// --c--planetary-red: #dc4133;
// --c--text: #fff;
// --c--text-secondary: #9da7b3;
// --scroll-bar: 15px;
// blue theme
// #034f84
// #92a8d1
// #d5f4e6
// #80ced6

// green theme
// #319370
export default createMuiTheme({
  palette: {
    primary: {
      main: '#034f84',
    },
    secondary: {
      main: '#ffffff',
      one: '#80ced6',
    },
    icon: {
      main: '#034f84',
    },
    background: {
      main: '#2a2f36',
      one: '#ffffff',
      two: '#d5f4e6',
      three: '#92a8d1',
      five: '#319370',
    }
  },
});