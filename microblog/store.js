import { reactive, computed } from 'vue'
import { testPosts } from './testPosts.js'

class Store {
  constructor() {
    testPosts.forEach(t => t.context = t.title + t.content)
    this.state = reactive({
      posts: testPosts,
      currentTag: null
    })
  }

  setHashtag(tag) {
    this.state.currentTag = tag
  }

  get posts() {
    if (!store.state.currentTag) {
      return store.state.posts
    }

    return store.state.posts.filter(post => 
      post.hashtags.includes(store.state.currentTag) || (post.content).toUpperCase().includes((store.state.currentTag).toUpperCase())
    )
  }

  likePost(post) {
    const thePost = this.state.posts.find(x => {
      return x.id === post.id
    })

    if (!thePost) {
      return
    }

    thePost.isLiked = !thePost.isLiked
    if (thePost.isLiked) {
        thePost.likes++
    }
    else {
        thePost.likes--
    }
  }

  addPost(post) {
    this.posts.push(
        {
            id: post.id,
            title: post.title,
            content: post.content,
            likes: post.likes,
            hashtags: post.hashtags,
            isLiked: post.isLiked
        }
    )
    console.log(testPosts)
  }

}

export const store = new Store()
