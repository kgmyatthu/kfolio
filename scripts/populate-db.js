
const { PrismaClient } = require("@prisma/client");
const fs = require('fs');
const matter = require('gray-matter');

const populate = async () => {

  const prisma = new PrismaClient()

    const files = fs.readdirSync('articles');
    console.log(files); 
    for await( const filename of files){
      if(filename === '.git' ||
          filename === 'README.md' ||
          filename === 'LICENSE') continue;

      if(filename!=='assets'){
        const slug = filename.replace('.md', '').replace(/_/g,'-')
        const raw = fs.readFileSync(`articles/${filename}`, 'utf-8');
        const { data: frontmatter, content } = matter(raw);
    
        const article = {
          path: `articles/${slug.replace(/-/g,'_')}.md`,
          date: new Date(frontmatter.date),
          slug: slug,
          body: content,
           tags: {
            connectOrCreate: frontmatter.tags.map( (tag) => {
               return {
                  create: {
                    name: tag,
                  },
                  where: {
                    name: tag,
                  },
                }
            })
          }
        }
       
        try{
          await prisma.article.create({data: article})
        }catch(e){
        }
    
      }
    }
}

populate();
