export const signIn = (account: { username: string, password: string }):any => {
  if(account.username === 'admin' && account.password === '123') {
    return Promise.resolve({ token: 'login-token' });
  }
};