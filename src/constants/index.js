/* eslint  import/prefer-default-export: "off" */
export const FETCH_PUBLICATIONS_REQUEST = 'FETCH_PUBLICATIONS_REQUEST';
export const FETCH_PUBLICATIONS_SUCCESS = 'FETCH_PUBLICATIONS_SUCCESS';
export const FETCH_PUBLICATIONS_FAILURE = 'FETCH_PUBLICATIONS_FAILURE';

export const FETCH_PUBLICATIONS_PAGE_REQUEST = 'FETCH_PUBLICATIONS_PAGE_REQUEST';
export const FETCH_PUBLICATIONS_PAGE_SUCCESS = 'FETCH_PUBLICATIONS_PAGE_SUCCESS';
export const FETCH_PUBLICATIONS_PAGE_FAILURE = 'FETCH_PUBLICATIONS_PAGE_FAILURE';

export const FILTER_PUBLICATIONS_REQUEST = 'FILTER_PUBLICATIONS_REQUEST';
export const FILTER_PUBLICATIONS_SUCCESS = 'FILTER_PUBLICATIONS_SUCCESS';
export const FILTER_PUBLICATIONS_FAILURE = 'FILTER_PUBLICATIONS_FAILURE';

export const SUBSCRIPTION_CLEAR = 'SUBSCRIPTION_CLEAR';
export const SUBSCRIPTION_REQUEST = 'SUBSCRIPTION_REQUEST';
export const SUBSCRIPTION_SUCCESS = 'SUBSCRIPTION_SUCCESS';
export const SUBSCRIPTION_FAILURE = 'SUBSCRIPTION_FAILURE';

export const FETCH_AUTOCOMPLETE_LIST_REQUEST = 'FETCH_AUTOCOMPLETE_LIST_REQUEST';
export const FETCH_AUTOCOMPLETE_LIST_SUCCESS = 'FETCH_AUTOCOMPLETE_LIST_SUCCESS';
export const FETCH_AUTOCOMPLETE_LIST_FAILURE = 'FETCH_AUTOCOMPLETE_LIST_FAILURE';
export const CLEAR_AUTOCOMPLETE_LIST = 'CLEAR_AUTOCOMPLETE_LIST';
export const SET_SEARCH_SELECTED_ITEMS = 'SET_SEARCH_SELECTED_ITEMS';

export const SET_GENE_SELECTION_IN_FILTERS = 'SET_GENE_SELECTION_IN_FILTERS';
export const PUBMED_URL = 'https://www.ncbi.nlm.nih.gov/pubmed';

export const ENTITIES = [
  {
    type: 'GENE',
    title: 'Genes',
    color: 'blue',
    href: id => `https://monarchinitiative.org/gene/HGNC:${id}`,
  },
  {
    type: 'PHENOTYPE',
    title: 'Phenotypes',
    color: 'orange',
    href: id => `https://monarchinitiative.org/${id}`,
  },
  {
    type: 'DISEASE',
    title: 'Diseases',
    color: 'red',
    href: id => `https://monarchinitiative.org/${id}`,
  },
];
