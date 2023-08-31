import { createSlice } from '@reduxjs/toolkit';

// Local storage key
const THEME_STORAGE_KEY = 'theme';

// Check if the user's preferred theme is dark
const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Get theme preference from local storage if available
const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const initialTheme = storedTheme !== null ? JSON.parse(storedTheme) : isDarkModePreferred;

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialTheme,
    reducers: {
        toggleTheme: (state) => {
            const newTheme = !state;
            localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newTheme));
            return newTheme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;