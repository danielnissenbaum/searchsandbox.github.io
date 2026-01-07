// Initialize the search client
const searchClient = algoliasearch('D0YX2JPAZD', 'ea7088907b08ee64a555c99a259f6718');

const search = instantsearch({
  indexName: 'algolia_movie_sample_dataset',
  searchClient,
});

// Create and mount the Search Box widget
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: '',
    autofocus: true,
    // This transforms the search bar into a "live" search
    showReset: true,
    showLoadingIndicator: true,
  }),

  // Add a basic hits widget so you can see it working
 search.addWidgets([
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      // If no results come back, this will tell us
      empty: (results) => `<div>No results found for "${results.query}"</div>`,
      
      // Use raw data fields (no components)
      item: (hit) => `
        <div style="padding: 10px; border-bottom: 1px solid #ddd;">
          <h3 style="color: blue;">${hit.title}</h3>
          <p>${hit.overview}</p>
        </div>
      `,
    },
  })
]);

search.start();
