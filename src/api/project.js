import request from '@/axios';

export function getProjectInfo(id) {
    return request({
        url: '/f/project/' + id,
        method: 'get'
    });
}
