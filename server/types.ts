export interface User {
    id: string;
    firstName: string;
    firstLame: string;
    username: string;
    email: string;
    password: string;
}


export interface Post {
    id: string;
    title: string;
    url: string;
    userId: string;
    postedAt: number;
}

export interface Like {
    postId: string;
    userId: string;
}


export interface Comment {
    id: string;
    postId: string;
    userId: string;
    comment: string;
    postedAt: number;
}