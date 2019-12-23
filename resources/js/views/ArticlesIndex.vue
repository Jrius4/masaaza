<style scoped>
*{
    list-style: none;
}
</style>
<template>
    <div class="articles">
        <div v-if="error" class="error">
            <p>{{ error }}</p>
        </div>

        <ul v-if="articles">
            <li v-for="{ id, title, excerpt } in articles" :key="id">
                <h2>{{ title }}</h2><br/>
                <p>{{ excerpt }}</p>
            </li>
        </ul>

        <div class="pagination">
            <button :disabled="! prevPage" @click.prevent="goToPrev" class="btn btn-md btn-warning">Previous</button>
            {{ paginatonCount }}
            <button :disabled="! nextPage" @click.prevent="goToNext" class="btn btn-md btn-warning">Next</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

const getArticles = (page, callback) => {
    const params = { page };

    axios
        .get('/api/articles', { params })
        .then(response => {
            callback(null, response.data);
        }).catch(error => {
            callback(error, error.response.data);
        });
};

export default {
    data() {
        return {
            articles: null,
            meta: null,
            links: {
                first: null,
                last: null,
                next: null,
                prev: null,
            },
            error: null,
        };
    },
    computed: {
        nextPage() {
            if (! this.meta || this.meta.current_page === this.meta.last_page) {
                return;
            }

            return this.meta.current_page + 1;
        },
        prevPage() {
            if (! this.meta || this.meta.current_page === 1) {
                return;
            }

            return this.meta.current_page - 1;
        },
        paginatonCount() {
            if (! this.meta) {
                return;
            }

            const { current_page, last_page } = this.meta;

            return `${current_page} of ${last_page}`;
        },
    },
    beforeRouteEnter (to, from, next) {
        getArticles(to.query.page, (err, data) => {
            next(vm => vm.setData(err, data));
        });
    },
    // when route changes and this component is already rendered,
    // the logic will be slightly different.
    beforeRouteUpdate (to, from, next) {
        this.articles = this.links = this.meta = null
        getArticles(to.query.page, (err, data) => {
            this.setData(err, data);
            next();
        });
    },
    methods: {
        goToNext() {
            this.$router.push({
                query: {
                    page: this.nextPage,
                },
            });
        },
        goToPrev() {
            this.$router.push({
                name: 'articles',
                query: {
                    page: this.prevPage,
                }
            });
        },
        setData(err, { data: articles, links, meta }) {
            if (err) {
                this.error = err.toString();
            } else {
                this.articles = articles;
                this.links = links;
                this.meta = meta;
            }
        },
    }
}
</script>
