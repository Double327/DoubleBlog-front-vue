import request from '@/axios';

export function getCategories() {
    return request({
        url: '/f/categories',
        method: 'get'
    })
}

export function getBlogByCategoryId(queryParams) {
    return request({
        url: '/f/blog',
        method: 'get',
        params: queryParams
    })
}

