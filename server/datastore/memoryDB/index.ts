
import { User, Post, Comment, Like } from '../../types';
import { Datastore } from './../index';


export class inMemoryDatastore implements Datastore {
    private users:User[] = [];
    private posts:Post[] = [];
    private comments:Comment[] = [];
    private likes:Like[] = [];

    createUser(user: User): void {
        this.users.push(user);
    }

    getUserByEmail(email: string): User | undefined {
        return this.users.find(u => u.email == email);
    }

    getUserByUsername(username: string): User|undefined {
        return this.users.find(u => u.username == username);
    }

    listPosts(): Post[] {
        return this.posts;
    }

    createPost(post: Post): void {
        this.posts.push(post);
    }
    
    getPost(id: string): Post | undefined {
        return this.posts.find(p => p.id == id);
    }

    deletePost(id: string): void {
        this.posts = this.posts.filter(p => p.id !== id);
    }

    createComment(comment: Comment): void {
        this.comments.push(comment);
    }

    listComments(postId: string): Comment[] {
        return this.comments.filter(c => c.postId == postId);
    }

    deleteComment(id: string): void {
        this.comments = this.comments.filter(c => c.id !== id);
    }

    createLike(like: Like): void {
        this.likes.push(like);
    }
}