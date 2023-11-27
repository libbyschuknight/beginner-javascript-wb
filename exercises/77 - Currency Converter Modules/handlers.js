import { convert } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromSelect, toSelect, fromInput, toEl } from './elements.js';

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );

  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
