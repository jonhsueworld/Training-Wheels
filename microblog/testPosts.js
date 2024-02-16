export let testPosts = [
  {
    id: 1,
    title: 'Learning Vue.js 3',
    content: 'I am learning Vue.js 3 with the composition API. Much of this revision involves adapting old concepts from the Options API project revisions.',
    likes: 10,
    tags: [
      'vue',
      'javascript',
      'composition api'
    ],
    isLiked: false
  },
  
  {
    id: 2,
    title: 'Lecture Code',
    content: 'The original iteration of this project used the composition API to feature basic Vue slot rendering, a search bar that filtered tags on exact wording, and an infinitely iterable like count button.',
    likes: 14,
    tags: [
      'vue',
      'composition api',
      'filter'
    ],
    isLiked: false
  },
  
  {
    id: 3,
    title: 'Revision',
    content: 'The current iteration adds a global case tolerant search filter, buttons to add new posts (populating a post creation form) or reset/cancel user input, page appearance improvements, and a like button with the correct business logic in which users only get up to 1 vote.',
    likes: 15,
    tags: [
      'vue',
      'composition api',
      'filter',
      'CRUD',
      'css'
    ],
    isLiked: false
  },

  {
    id: 4,
    title: 'Key Takeaways',
    content: 'Learning the composition API emphasized reusing composables to keep code modular and readable while translating and refactoring existing code and concepts from the Options API projects. Other business logic concepts were practiced while implementing additional user-facing functional and design features.',
    likes: 30,
    tags: [
      'composition api',
      'javascript',
      'design'
    ],
    isLiked: false
  }
]
