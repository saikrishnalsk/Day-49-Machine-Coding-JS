function debounce(func, wait) {
    let timeoutId;
    
    return function (...args) {
      const context = this;
      
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }
  
  // Example usage
  const expensiveOperation = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Simulated API call or expensive computation
  };
  
  // Create debounced version
  const debouncedSearch = debounce(expensiveOperation, 500);
  
  // Usage in event listener
  const searchInput = document.querySelector('#search');
  searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
  });