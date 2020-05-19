<template>
    <div>
        <el-button type="primary" @click="logout">退出</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        logout(){
            // 清空sessionStorage
            window.sessionStorage.clear();
            // 跳转到登录页面
            this.$router.push('/adminlogin');
        }
    }
}
</script>

<style lang="less" scoped>

</style>