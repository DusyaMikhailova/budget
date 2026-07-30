// Преобразует дату в нативный мобильный календарь: он открывается снизу
// и позволяет выбрать любой прошедший день, а будущие даты блокируются.
function enhanceExpenseDate() {
  const hidden = document.querySelector('#expense-form input[name="date"][type="hidden"]');
  const calendar = document.querySelector('#expense-form #calendar');
  if (!hidden || !calendar) return;
  hidden.type = 'date';
  hidden.classList.add('field');
  hidden.max = new Date().toISOString().slice(0, 10);
  hidden.setAttribute('aria-label', 'Дата расхода');
  calendar.remove();
}
new MutationObserver(enhanceExpenseDate).observe(document.getElementById('app'), { childList: true, subtree: true });
enhanceExpenseDate();
