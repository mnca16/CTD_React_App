/*  NOTE:
    This pattern is called an enum. This way we are never using a string
    to set the theme. Object.freeze ensures you can not add properties
*/
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

export const Theme = {
  light: lightTheme,
  dark: darkTheme,
  // Could add more themes at a later date
};
