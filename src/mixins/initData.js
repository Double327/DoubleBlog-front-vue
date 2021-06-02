export default {
    data() {
        return {
            // 查询参数
            queryParams: {
                pageNum: 1,
                pageSize: 10,
                orderByColumn: "createTime",
                isAsc: "desc"
                //此处和具体的组件合并后可以设置查询参数
            },
        }
    }
}
