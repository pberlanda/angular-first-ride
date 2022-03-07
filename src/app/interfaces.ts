export interface User {
  username: string;
  password: string;
  confirmPassword?: string; // opzionale > non è obbligatoria
}

let user: User;

user = { username: 'Paolo', password: 'laMiaPassword' }; // notazione JSON per scrivere oggetti
