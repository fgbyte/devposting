# Key learnings
1. Architect an app from scratch
2. Ideate UX flow
3. Design Database
4. GitHub OAuth
5. Manage User Profiles
6. Posts, Likes & Comments
7. Infinite Content Feeds
8. Optimistic & Pending UIs
8. Deploying to Actual Users


## Remix + Supabase Social Media App Steps
1. UI and behavior design of the app
2. Database Design of the app including functions
3. Remix App setup, building UI basic routes
4. Setting up GH OAuth using @supabase/ssr
5. Building gitposts route with infinite scroll
6. Building profile route of users
7. Building individual post route
8. Pending UIs for Post and Optimistic UIs for Likes
9. Final touch-ups and deployment to production


### Database Design and Implementation
- [x] Tables
- [x] RSS policy


### Remix App setup and basic routes
- [x] Setup a Remix app using shadcn-ui and install all required components and libraries
- [x] Building basic routes required for our app (index, login, home and gitposts)
- [x] Building basic Components required for our app


1:22:30 //TODO
### Setting up GH OAuth using @supabase/ssr
- [ ] Download supabase database types locally
- [ ] Create supabase browser and server clients
- [ ] Create Database access layer for loaders and actions
- [ ] Implement GH OAuth and successfullY login a user



### Building profile route of users with infinite scroll
- [ ] Create an infinite scroll for viewposts tabs
- [ ] Use post action for write-post component
- [ ] Implement search on the posts



### Building Profile route for users
- [ ] Create profile route
- [ ] Use the infinite scroll for user posts



### Building individual post route
- [ ] Create a Like button with Like action
- [ ] Create a comment action
- [ ] Update write-post component to support comments
- [ ] Create a component to show comments
- [ ] Build an individual post route with all the above



### Optimistic UIs and final fixes
- [ ] Build `/postId` route under profiles route
- [ ] Prevent scrolling when link is clicked
- [ ] Prevent `/gitposts` route from revalidating on like and comments
- [ ] Update count of likes/comments on the infinite list
- [ ] Build an Optimistic UI for Likes



