## YouTube Workflow

Simple Complexity flow
 1. CRUD operations for User
 2. CRUD operations for Comments

Medium Complexity Flow
 1. CRUD operations for Video
 2. CRUD operations for Channel

Not considering subscription and watch history.

Step 1: Create the data gathering requirement

User Data:
* User ID
* Username
* Email
* Password
* Profile Picture
* Liked Videos

Video Data:
* Video ID
* Title
* Description
* URL
* Thumbnail URL
* Upload Date
* Views Count
* Likes Count
* Dislikes Count
* Comments (Comment ID, User ID, Text, Timestamp)
* Tags
* Channel ID

Channel Data:
* Channel ID
* Channel Name
* Channel Description
* Channel Creation Date
* Videos List (Video IDs)
* Owner (User ID)

Comment Data:
* Comment ID
* Video ID
* User ID
* Text
* Timestamp


Step 2: Identify Edges and Nodes

Nodes:
* User
* Video
* Channel
* Comment

Edges:
* User likes Video
* User comments on Video
* Video belongs to Channel
* Channel has many Videos
* Video has many Comments


Step 3: Write the Schema : SDL + Query/Mutations

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  profilePicture: String
  likedVideos: [Video!]!
  comments: [Comment!]!
}

type Video {
  id: ID!
  title: String!
  description: String
  url: String!
  thumbnailUrl: String
  uploadDate: String!
  viewsCount: Int!
  likesCount: Int!
  dislikesCount: Int!
  comments: [Comment!]!
  tags: [String!]!
  channel: Channel!
}

type Channel {
  id: ID!
  name: String!
  description: String
  creationDate: String!
  videos: [Video!]!
  owner: User!
}

type Comment {
  id: ID!
  video: Video!
  user: User!
  text: String!
  timestamp: String!
}


type Query {
  user(id: ID!): User
  video(id: ID!): Video
  channel(id: ID!): Channel
  comment(id: ID!): Comment
  searchVideos(query: String!): [Video!]!
}

type Mutation {
  createUser(username: String!, email: String!, password: String!): User
  updateUser(id: ID!, username: String, email: String, password: String, profilePicture: String): User
  deleteUser(id: ID!): Boolean

  createVideo(title: String!, description: String, url: String!, thumbnailUrl: String, tags: [String!]!, channelId: ID!): Video
  updateVideo(id: ID!, title: String, description: String, thumbnailUrl: String, tags: [String!]!): Video
  deleteVideo(id: ID!): Boolean

  createChannel(name: String!, description: String, ownerId: ID!): Channel
  updateChannel(id: ID!, name: String, description: String): Channel
  deleteChannel(id: ID!): Boolean

  createComment(videoId: ID!, userId: ID!, text: String!): Comment
  updateComment(id: ID!, text: String!): Comment
  deleteComment(id: ID!): Boolean
}


Step 4: Create the mindmap

YouTube
│
├── Users
│   ├── User ID
│   ├── Username
│   ├── Email
│   ├── Password
│   ├── Profile Picture
│   ├── Liked Videos
│   │   └── Video IDs
│   └── Comments
│       └── Comment IDs
│
├── Videos
│   ├── Video ID
│   ├── Title
│   ├── Description
│   ├── URL
│   ├── Thumbnail URL
│   ├── Upload Date
│   ├── Views Count
│   ├── Likes Count
│   ├── Dislikes Count
│   ├── Tags
│   ├── Channel ID
│   └── Comments
│       └── Comment IDs
│
├── Channels
│   ├── Channel ID
│   ├── Name
│   ├── Description
│   ├── Creation Date
│   ├── Videos
│   │   └── Video IDs
│   └── Owner
│       └── User ID
│
└── Comments
    ├── Comment ID
    ├── Video ID
    ├── User ID
    ├── Text
    └── Timestamp
