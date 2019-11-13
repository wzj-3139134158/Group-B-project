<template>
 <div class="wrap">
        <main>
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>数量</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in currentPageData" :key="index">
                        <td>
                            {{item.name}}
                        </td>
                        <td>
                            {{item.count}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
        <footer>
            <button @click="prevPage()">
                上一页
            </button>
            <span>第{{currentPage}}页/共{{totalPage}}页</span>
            <button @click="nextPage()">
                下一页
            </button>
        </footer>
    </div>
</template>

<script>
    let productList = [];
for (let i = 0; i < 99; i++) {
    productList.push({
        name: "第" + i + "瓶奶酪",
        count: Math.random() * 100
    });
}
export default {
    data() {
        return {
            productList, //所有数据
            totalPage: 1, // 统共页数，默认为1
            currentPage: 1, //当前页数 ，默认为1 
            pageSize: 10, // 每页显示数量
            currentPageData: [] //当前页显示内容
        };
    },
    mounted() {
        // 计算一共有几页
        this.totalPage = Math.ceil(this.productList.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
        this.getCurrentPageData();
    },
    methods: {
        // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
        // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
        getCurrentPageData() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.currentPageData = this.productList.slice(
                begin,
                end
            );
        },
        //上一页
        prevPage() {
            console.log(this.currentPage);
            if (this.currentPage == 1) {
                return false;
            } else {
                this.currentPage--;
                this.getCurrentPageData();
            }
        },
        // 下一页
        nextPage() {
            if (this.currentPage == this.totalPage) {
                return false;
            } else {
                this.currentPage++;
                this.getCurrentPageData();
            }
        }
    }
}
</script>>