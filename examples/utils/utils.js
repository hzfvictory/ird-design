export function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
}

export function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
}

export function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, "").trim();
}

export function getSource(source, type) {
  const regex = new RegExp(`<${type}[^>]*>`);
  let openingTag = source.match(regex);
  if (!openingTag) {
    return "";
  } else {
    openingTag = openingTag[0];
  }
  return source.slice(
    source.indexOf(openingTag) + openingTag.length,
    source.lastIndexOf(`</${type}>`)
  );
}
