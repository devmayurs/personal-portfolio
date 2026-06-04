import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ESection, EThemeMode } from '../../types';

interface IUiState {
  activeSection: ESection;
  themeMode: EThemeMode;
}

const initialState: IUiState = {
  activeSection: ESection.ABOUT,
  themeMode: EThemeMode.DARK,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<ESection>) {
      state.activeSection = action.payload;
    },
    setThemeMode(state, action: PayloadAction<EThemeMode>) {
      state.themeMode = action.payload;
    },
    toggleThemeMode(state) {
      state.themeMode =
        state.themeMode === EThemeMode.DARK ? EThemeMode.LIGHT : EThemeMode.DARK;
    },
  },
});

export const { setActiveSection, setThemeMode, toggleThemeMode } = uiSlice.actions;
export default uiSlice.reducer;
