<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body.substring(0, 10) }}</td>
                <td>{{ post.created_at.substring(0, 10) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
        };
    },
    mounted() {
        axios.get("/posts").then((response) => {
            this.posts = response.data;
        });
    },
};
</script>
