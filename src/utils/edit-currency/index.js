const CHANGED_CURRENCY_FIELD = "CHANGED-CURRENCIES";

export function getChangedCurrencies() {
  const list = localStorage.getItem(CHANGED_CURRENCY_FIELD);
  return JSON.parse(list) || [];
}

export function setNewCurrency(changedCurrency) {
  let current_list_of_changed_currencies = getChangedCurrencies();
  current_list_of_changed_currencies = [
    ...current_list_of_changed_currencies,
    changedCurrency,
  ];

  localStorage.setItem(
    CHANGED_CURRENCY_FIELD,
    JSON.stringify(current_list_of_changed_currencies)
  );
}
