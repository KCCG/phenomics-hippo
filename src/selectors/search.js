import { createSelector } from 'reselect';

export const autocompleteGenes = createSelector(
  [state => state.getIn(['search', 'autocomplete', 'genes'])],
  items => items
);

export const selectedGenes = createSelector(
  [state => state.getIn(['search', 'selectedGenes'])],
  items => items
);

export const condition = state => state.getIn(['search', 'condition']);
export const isAutocompleteLoading = state =>
  state.getIn(['search', 'autocomplete', 'isLoading']);
export const autocompleteSearchQuery = state =>
  state.getIn(['search', 'autocomplete', 'searchQuery']);
