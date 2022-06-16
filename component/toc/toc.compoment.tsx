import { useEffect, useMemo } from 'react'
import Heading from './heading.component'
import markdownToAST from '../../utils/markdownToAst'
import pickHeadingFromAST from '../../utils/pickHeadingFromAst'
import parseHeadingAST from '../../utils/parseHeadingAST'
import parseHeadingText, {
  Heading as HeadingType,
} from '../../utils/parseHeadingText'
import { ImMenu } from 'react-icons/im'
import styles from './toc.module.css'

interface TOCProps {
  markdown: string
  ulClassName?: string
  liClassName?: string
  anchorClassName?: string
  hyperlink?: boolean
  blankSpaceReplaceText?: string
  headingDepth?: 1 | 2 | 3 | 4 | 5 | 6
  hyperLinkPrefix?: string
  onChangeHeading?: (headingList: HeadingType[]) => void
  activeLiClassName?: string
  activeAnchorClassName?: string
  activeHeading?: HeadingType[]
}

const TOC: React.FC<TOCProps> = ({
  markdown,
  ulClassName,
  liClassName,
  anchorClassName,
  hyperlink,
  blankSpaceReplaceText,
  headingDepth,
  hyperLinkPrefix,
  onChangeHeading,
  activeLiClassName,
  activeAnchorClassName,
  activeHeading,
}) => {
  const headingAst = pickHeadingFromAST(markdownToAST(markdown), headingDepth)
  const headingList = useMemo(() => parseHeadingAST(headingAst), [headingAst])
  const parsedHeadingList = useMemo(
    () => parseHeadingText(headingList, blankSpaceReplaceText, hyperLinkPrefix),
    [headingList]
  )

  useEffect(() => {
    if (onChangeHeading) {
      onChangeHeading(parsedHeadingList)
    }
  }, [parsedHeadingList])

  return (
    <>
        <div className={styles['toc-label']}> 
            <ImMenu/> 
            <span>Table of contents</span>
        </div>
        <Heading
          headingList={parsedHeadingList}
          ulClassName={ulClassName}
          liClassName={liClassName}
          anchorClassName={anchorClassName}
          hyperlink={hyperlink}
          activeLiClassName={activeLiClassName}
          activeAnchorClassName={activeAnchorClassName}
          activeHeading={activeHeading}
        />
    </>
  )
}

export default TOC
