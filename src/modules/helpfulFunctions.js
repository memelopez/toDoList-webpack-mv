// helper functions

// function to help validate input
export default function validateDescription(text) {
  if (text === null || text === '') {
    return false;
  }
  return true;
}

// export { validateDescription };