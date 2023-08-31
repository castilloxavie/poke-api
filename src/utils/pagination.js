const paginateData = (items, currentPage) => {
    //cantidad dde items por pagina
    const ITEMS_PER_PAGE = 20

    //item de la pagina actual
    const sliceEnd = currentPage * ITEMS_PER_PAGE
    const sliceStart = sliceEnd - ITEMS_PER_PAGE
    const itemCorrentPage = items.slice(sliceStart, sliceEnd)

    //ultima pagina
    const lastPage = Math.ceil(items.length / ITEMS_PER_PAGE)


    //bloque actual
    const PAGE_PER_BLOCK = 5
    const actualBlock = Math.ceil(currentPage/PAGE_PER_BLOCK)

    //encontar las paginas actual
    const pagesIncurrentBlocck = []
    const maxPage = actualBlock * PAGE_PER_BLOCK
    const minPage = (maxPage - PAGE_PER_BLOCK) + 1
    for (let x = minPage; x <= maxPage; x++){
        if(x <= lastPage){
            pagesIncurrentBlocck.push(x)
        }
        
    }
    return{
        itemCorrentPage,
        lastPage,
        pagesIncurrentBlocck

    }
}

export{
    paginateData
}