import { ref } from 'vue'

const getAllPosts = () => {
    const posts = ref(null)
    const error = ref(null)
    const load = async () => {
        try {
            let data = await fetch("https://jsonplaceholder.typicode.com/posts")
            console.log("Data is " + data)
            if (!data.ok) {
                throw Error("No Data is Available")
            }
            posts.value = await data.json()

        } catch (err) {
            error.value = err.message()
            console.log("Encountered Error" + error.value)
        }

    }

    return { posts, error, load }

}

export default getAllPosts