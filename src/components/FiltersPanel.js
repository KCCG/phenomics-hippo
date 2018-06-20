import React, { Component } from 'react';
import { Tab, Icon } from 'semantic-ui-react';
import { ENTITIES } from '../constants';
import Filters from './Filters';
import AppliedFilters from './AppliedFilters';

export default class FiltersPanel extends Component {
  state = { activeTabIndex: null };

  handleTabChange = (_e, { activeIndex }) => this.setState({ activeTabIndex: activeIndex });
  render() {
    const { selectedFilterIds, filterItems, isLoading, onFilterChange } = this.props;

    let defaultActiveTabIndex = null;

    const tabPanes = ENTITIES.map((entity, index) => {
      const filterItemsByType = filterItems.filter(item => item.type === entity.type);

      if (filterItemsByType.length === 0) return null;

      if (defaultActiveTabIndex === null) {
        defaultActiveTabIndex = index;
      }
      return {
        menuItem: {
          key: entity.title,
          content:
            (this.state.activeTabIndex === null && index === defaultActiveTabIndex) ||
            index === this.state.activeTabIndex ? (
                entity.title
              ) : (
                <span style={{ color: entity.color }}>
                  {entity.shortTitle}
                  <Icon name="triangle right" />
                </span>
              ),
          color: entity.color,
        },
        render: () => (
          <Filters
            disabled={isLoading}
            items={filterItemsByType}
            selectedFilterIds={selectedFilterIds}
            onFilterChange={onFilterChange}
          />
        ),
      };
    });

    return (
      <div style={{ padding: 10 }}>
        <AppliedFilters
          disabled={isLoading}
          onFilterChange={onFilterChange}
          filterItems={filterItems}
          selectedFilterIds={selectedFilterIds}
        />

        <Tab
          menu={{ attached: true, tabular: true }}
          defaultActiveIndex={defaultActiveTabIndex}
          panes={tabPanes}
          onTabChange={this.handleTabChange}
        />
      </div>
    );
  }
}
