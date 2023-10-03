(() => {
  // Array of Celcius degrees
  const celciusDegrees = [33.6, 12.34];

  // Server IP
  const serverIp = '123.123.123.123';

  // Users list
  const users = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];

  // User emails lists
  const userEmails = users.map((user) => user.email);

  // Boolean variables of a videogame
  const canJump = false;
  const canRun = true;
  const hasItems = false;
  const isLoading = false;

  // Initial and end time
  const startTime = new Date().getTime();
  const endTime = new Date().getTime() - startTime;

  // =====
  // Functions
  // =====

  // Get books
  function getBooks() {
    throw new Error('Function not implemented.');
  }

  // Get booksfrom URL
  function getBooksFromUrl(url: string) {
    throw new Error('Function not implemented.');
  }

  // Get square area based on sides
  function getSquareArea(side: number) {
    throw new Error('Function not implemented.');
  }

  // Print job if is active
  function printJob() {
    throw new Error('Function not implemented.');
  }
})();
