export function validateEmail(email: string): string | null {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return "Поле email не должно быть пустым.";
  }

  if (!emailPattern.test(email)) {
    return "Некорректный формат email.";
  }

  return null;
}
