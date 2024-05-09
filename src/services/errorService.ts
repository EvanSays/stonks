
const logError = (error: string, errorInfo = null) => {
    console.error('Logged Error:', error);
    // Here you could send error details to a remote logging service
  };
  
  const handleError = (error: string, errorInfo = null) => {
    logError(error, errorInfo);
    // Additional error handling logic can go here
  };
  
  export {
    logError,
    handleError,
  };
  