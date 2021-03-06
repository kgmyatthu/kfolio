import { PhrasingContent } from 'mdast'

type content = {
  text: string
  href: string
}

const parseText = (
  content: PhrasingContent,
  link: content,
  blankSpaceReplaceText = '-',
  hyperlinkPrefix = ''
): content => {
  switch (content.type) {
    case 'text':
    case 'inlineCode': {
      const text = content.value
      link.text += text
      link.href += `${hyperlinkPrefix}${text.replace(
        /\s+/g,
        blankSpaceReplaceText
      )}`
      break
    }
    case 'link':
    case 'strong':
    case 'emphasis': {
      if (content.children.length === 0) break
      return parseText(
        content.children[0],
        link,
        blankSpaceReplaceText,
        hyperlinkPrefix
      )
    }
    default:
      return link
  }

  return link
}

export default parseText
