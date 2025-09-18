# Hike Finder - Project Structure

## Directory Structure

```
src/
├── components/          # React components
│   ├── auth/           # Authentication components
│   ├── ExploreCard/    # Explore page card component
│   ├── HikeCard/       # Hike display card component
│   ├── InfoCard/       # Information card component
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── loadingSpinner/ # Loading spinner component
│   ├── Modal/          # Modal component (fixed casing)
│   └── Search/         # Search component
├── constants/          # App-wide constants
│   └── index.js        # API endpoints, UI constants, error messages
├── hooks/              # Custom React hooks
│   ├── useApi.js       # API call hook with loading/error states
│   └── useLocalStorage.js # LocalStorage management hook
├── pages/              # Page components
│   ├── Explore/        # Explore page
│   └── Home/           # Home page
├── services/           # API and external services
│   ├── api.js          # API functions
│   └── authService.js  # Authentication utilities
└── utils/              # Utility functions
    └── index.js        # Helper functions (formatting, debounce, etc.)
```

## Key Improvements Made

### 1. **Fixed Component Casing**
- Moved `modal/` → `Modal/` for consistency
- Updated all import statements

### 2. **Added Missing Directories**
- `constants/` - Centralized app constants
- `hooks/` - Custom React hooks
- `utils/` - Utility functions

### 3. **Centralized Constants**
- API endpoints in one place
- Error messages standardized
- UI constants for consistent styling

### 4. **Custom Hooks**
- `useApi` - Handles API calls with loading/error states
- `useLocalStorage` - Manages localStorage with React state

### 5. **Utility Functions**
- Formatting helpers (distance, time)
- Debounce function for search
- String utilities

## Usage Examples

### Using Constants
```javascript
import { API_ENDPOINTS, ERROR_MESSAGES } from '../constants'

// Instead of hardcoded strings
const url = API_ENDPOINTS.HIKES
const errorMsg = ERROR_MESSAGES.LOGIN_FAILED
```

### Using Custom Hooks
```javascript
import { useApi } from '../hooks/useApi'
import { getHikes } from '../services/api'

// In your component
const { data: hikes, loading, error } = useApi(getHikes)
```

### Using Utilities
```javascript
import { formatDistance, debounce } from '../utils'

// Format distance for display
const displayDistance = formatDistance(2.5) // "2.5km"

// Debounce search input
const debouncedSearch = debounce(handleSearch, 300)
```

## Benefits

1. **Maintainability** - Centralized constants and utilities
2. **Reusability** - Custom hooks can be used across components
3. **Consistency** - Standardized error messages and API endpoints
4. **Scalability** - Clear structure for adding new features
5. **Developer Experience** - Better organization and easier navigation