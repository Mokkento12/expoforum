// 🔐 Экранируем специальные символы для регулярки
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlightSearchText(rootElement: HTMLElement, query: string) {
  resetHighlights(rootElement);

  if (!query.trim()) return;

  // ✅ Экранируем запрос перед вставкой в RegExp
  const safeQuery = escapeRegExp(query);
  const regex = new RegExp(`(${safeQuery})`, "gi");

  const treeWalker = document.createTreeWalker(
    rootElement,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) =>
        node.parentElement &&
        !["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement.tagName)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT,
    }
  );

  const nodes: Text[] = [];
  while (treeWalker.nextNode()) {
    nodes.push(treeWalker.currentNode as Text);
  }

  nodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (!parent) return;

    const originalText = textNode.nodeValue;
    if (!originalText) return;

    const newHTML = originalText.replace(
      regex,
      '<mark class="highlight">$1</mark>'
    );

    if (newHTML !== originalText) {
      const span = document.createElement("span");
      span.innerHTML = newHTML;
      parent.replaceChild(span, textNode);
    }
  });
}
