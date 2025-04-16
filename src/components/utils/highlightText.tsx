export function highlightSearchText(rootElement: HTMLElement, query: string) {
  // Сначала сбрасываем старую подсветку
  resetHighlights(rootElement);

  if (!query.trim()) return;

  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");

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

    if (!regex.test(originalText)) return;

    const newHTML = originalText.replace(
      regex,
      '<mark class="highlight">$1</mark>'
    );

    const span = document.createElement("span");
    span.innerHTML = newHTML;
    parent.replaceChild(span, textNode);
  });
}

// Escaping спецсимволов для RegExp
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function resetHighlights(rootElement: HTMLElement) {
  const marks = rootElement.querySelectorAll("mark.highlight");
  marks.forEach((mark) => {
    const text = document.createTextNode(mark.textContent || "");
    mark.parentNode?.replaceChild(text, mark);
  });
}
