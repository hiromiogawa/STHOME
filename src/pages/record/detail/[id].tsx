import { client } from '../../../../libs/client'
import { range } from '../../../../modules/utils'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { blogsTypes, categoryType, categoriesType, pagenationTypes } from '../../../../types/types'
import { SITE_TITLE, PER_PAGE } from '../../../../vars/site'
import Head from 'next/head'
import Layout from '../../../../components/Layout'
import Categories from '../../../../components/Categories'
import PageList from '../../../../components/templates/List'

type props = blogsTypes & categoriesType & pagenationTypes & {
    currentCategory: string
}

export default function BlogCategoryPageList({ contents, totalCount, currentPage, currentCategory, categories }: props) {
    return (
    <Layout>
        <Head>
            <title>{currentCategory} | 記事一覧 | {SITE_TITLE}</title>
        </Head>
        <Categories categories={categories} />
        <PageList contents={contents} totalCount={totalCount} currentPage={currentPage} currentCategory={currentCategory} />
    </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {    
    const resCategory = await client.get({endpoint: 'categories'})

    const resPaths = await Promise.all(
        resCategory.contents.map((category: categoryType) => {
            const result = client
            .get({
                endpoint: 'blogs',
                queries: {
                    filters: `category[equals]${category.id}`
                }
            })
            .then(({ totalCount }) => {
                return range(1, Math.ceil(totalCount / PER_PAGE)).map((repo) => `/blog/${category.id}/page/${repo}`)
            })
            return result
        })
    )
    const paths = resPaths.flat()
    return { paths, fallback: false }
}


// データを取得
export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context

    const id = params!.id

    const data = await client.get({
        endpoint: 'blogs',
        queries: { 
            limit: PER_PAGE, 
            offset: (Number(id) - 1) * PER_PAGE,
            filters: `category[equals]${params!.category}`
        }
    })
    const categories = await client.get({endpoint: 'categories'})

    return {
        props: {
            contents: data.contents,
            totalCount: data.totalCount,
            currentPage: id,
            currentCategory: params!.category,
            categories: categories.contents
        }
    }
}
