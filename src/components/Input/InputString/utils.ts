export const getType = (type?: string) => {
  switch (type) {
    case 'email':
      return 'email';
    case 'password':
      return 'password';
    default:
      return 'text';
  }
}