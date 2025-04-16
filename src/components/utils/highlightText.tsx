// Функция для экранирования специальных символов регулярных выражений
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Функция для сброса подсветки текста
export function resetHighlights(rootElement: HTMLElement): void {
  const marks = rootElement.querySelectorAll("mark.highlight");
  marks.forEach((mark) => {
    // Заменяем элемент <mark> на его текстовое содержимое
    mark.replaceWith(document.createTextNode(mark.textContent || ""));
  });
}

// Основная функция для подсветки текста по запросу
export function highlightSearchText(
  rootElement: HTMLElement,
  query: string
): void {
  // Сначала сбрасываем все предыдущие подсветки
  resetHighlights(rootElement);

  // Если запрос пустой, выходим из функции
  if (!query.trim()) return;

  // Экранируем запрос перед использованием в регулярном выражении
  const safeQuery = escapeRegExp(query);
  const regex = new RegExp(`(${safeQuery})`, "gi");

  // Создаем TreeWalker для обхода текстовых узлов внутри rootElement
  const treeWalker = document.createTreeWalker(
    rootElement,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) =>
        node.parentElement &&
        !["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement.tagName)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT,
    },
    false
  );

  // Найдем все текстовые узлы
  const nodes: Text[] = [];
  while (treeWalker.nextNode()) {
    nodes.push(treeWalker.currentNode as Text);
  }

  // Обработаем каждый найденный текстовый узел
  nodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (!parent) return;

    const originalText = textNode.nodeValue;
    if (!originalText) return;

    // Подсвечиваем совпадения с запросом
    const newHTML = originalText.replace(
      regex,
      '<mark class="highlight">$1</mark>'
    );

    // Если текст был изменён, заменяем его на новый HTML-узел
    if (newHTML !== originalText) {
      const span = document.createElement("span");
      span.innerHTML = newHTML;
      parent.replaceChild(span, textNode);
    }
  });
}
