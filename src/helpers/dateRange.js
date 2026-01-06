

export const formatDate = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const parseLocalDate = (dateString) => {
  const [y, m, d] = dateString.split('-').map(Number);
  return new Date(y, m - 1, d); // 👈 CLAVE
};

/* ===================== DÍA ===================== */
export const getDayRange = (dateString) => ({
  from: dateString,
  to: dateString,
});

/* ===================== MES ===================== */
export const getMonthRange = (dateString) => {
  const date = parseLocalDate(dateString);
  const today = new Date();

  const year = date.getFullYear();
  const month = date.getMonth(); // 0–11 (YA CORRECTO)

  const start = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);

  const end =
    year === today.getFullYear() && month === today.getMonth()
      ? today
      : endOfMonth;

  return {
    from: formatDate(start),
    to: formatDate(end),
  };
};

/* ===================== AÑO ===================== */
export const getYearRange = (dateString) => {
  const date = parseLocalDate(dateString);
  const today = new Date();

  const year = date.getFullYear();

  const start = new Date(year, 0, 1);
  const end =
    year === today.getFullYear()
      ? today
      : new Date(year, 11, 31);

  return {
    from: formatDate(start),
    to: formatDate(end),
  };
};

