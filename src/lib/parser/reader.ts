interface HTMLElement {
  type: string;       // 'p', 'img', or 'h'
  position: number;   // Position in original document
  text?: string;      // Content for 'p' and 'h' elements
  image?: string;     // src attribute for 'img' elements
}

function parseHTML(html: string): HTMLElement[] {
  // Create a temporary container to hold the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  const result: HTMLElement[] = [];
  let position = 0;
  
  // Process all child nodes in order
  for (const node of Array.from(tempDiv.children)) {
    const tagName = node.tagName.toLowerCase();
    
    if (tagName === 'p') {
      result.push({
        type: 'p',
        position: position,
        text: node.textContent || ''
      });
    } else if (tagName === 'img') {
      result.push({
        type: 'img',
        position: position,
        image: (node as HTMLImageElement).getAttribute('src') || ''
      });
    } else if (tagName === 'h') {
      result.push({
        type: 'h',
        position: position,
        text: node.textContent || ''
      });
    }
    
    position++;
  }
  
  return result;
}
