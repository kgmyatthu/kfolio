import { NextPage } from "next";
import styles from './tag.module.css';

interface TagProps{
    tags: string[]
}

const Tag: NextPage<TagProps> =({tags}) => {
    return (
      <div>
        {tags.map((tag: string, i: number) => {
          return <a key={i} className={styles.tag}>{tag}</a>
        })} 
      </div>
    )
    
}

export default Tag
