import { Injectable, signal } from '@angular/core';
import { Post } from './post';
import { Auth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  newsletter = signal("Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum quia minima ex ipsum corporis totam sed id voluptate odio fuga nihil labore ad odit blanditiis temporibus impedit officia est. Minima consequatur quia, labore, a illum repellendus cumque minus non illo quos odit debitis sapiente exercitationem culpa reprehenderit eveniet nobis laborum doloribus dolorem laudantium vero ex. Placeat laboriosam, non a iusto distinctio ab quae, error numquam mollitia, quos esse eligendi consequuntur. Aut, pariatur in aliquam quibusdam libero facilis, inventore fugit quia tempora illo officiis rem dolorem at sapiente ducimus! Hic libero quo saepe quis eligendi iste non corrupti vel dolorem labore quos necessitatibus voluptate rerum, excepturi laborum? Ex magni nobis beatae ratione, odit mollitia temporibus. Sapiente tempora earum ipsum adipisci dolorum laborum. Odit nobis neque quia modi assumenda, tenetur dignissimos amet fugiat nesciunt recusandae earum cupiditate culpa blanditiis hic similique illo doloribus dolor dolorem dicta iste non sed repudiandae! Voluptas aperiam eveniet accusantium, beatae, eos corrupti enim iusto qui cumque cum quo alias? Sint harum incidunt suscipit officia similique repellendus, praesentium quas at placeat iusto fugiat, est voluptates, cumque consectetur obcaecati optio atque exercitationem deserunt? At, repudiandae consequuntur, ducimus est dolorem numquam voluptate veniam autem sunt magni recusandae rem facere magnam omnis quidem, eos eaque hic facilis deleniti tempore accusamus blanditiis? Assumenda hic, saepe magni perspiciatis ducimus alias minima? Qui saepe est ullam, harum obcaecati explicabo perspiciatis quo tempore, cupiditate impedit, debitis porro adipisci quaerat repellat fuga. Beatae officiis, ipsum adipisci, perferendis voluptatibus asperiores esse voluptatem ad dolore eius voluptate eos possimus quo a cumque eaque, porro quia rem iusto? Cumque rem quae voluptatem officia libero harum! Saepe eos qui perferendis illum impedit dignissimos consequuntur officiis vitae voluptate, nemo cupiditate? Hic dolorem nam aut pariatur nostrum doloremque illo sint fugit. Illum quo eveniet non, ut vero animi quis earum excepturi!");

  announcementPosts: Post[] = [];
  classPosts: Post[] = [];
  eventPosts: Post[] = [];
  requestPosts: Post[] = [];

  announcementPostComments: Comment[] = [];
  classPostComments: Comment[] = [];
  eventPostComments: Comment[] = [];
  requestPostComments: Comment[] = [];

  setNewsletter(inputNews: string){
    this.newsletter.set(inputNews);
  }

  getAnnPostById(id:number): Post{
    return this.announcementPosts.filter(post => post.id == id)[0];
  }

  getClassPostById(id:number): Post{
    return this.classPosts.filter(post => post.id == id)[0];
  }

  getEventPostById(id:number): Post{
    return this.eventPosts.filter(post => post.id == id)[0];
  }

  getRequestPostById(id:number): Post{
    return this.requestPosts.filter(post => post.id == id)[0];
  }

  addAnnPost(add: Post){
    this.announcementPosts.push(add);
  }

  addClassPost(add: Post){
    this.classPosts.push(add);
  }

  addEventPost(add: Post){
    this.eventPosts.push(add);
  }

  addRequestPost(add: Post){
    this.requestPosts.push(add);
  }

  getAnnPostCommById(id:number): Comment{
    return this.announcementPostComments.filter(post => post.id == id)[0];
  }

  getClassPostCommById(id:number): Comment{
    return this.classPostComments.filter(post => post.id == id)[0];
  }

  getEventPostCommById(id:number): Comment{
    return this.eventPostComments.filter(post => post.id == id)[0];
  }

  getRequestPostCommById(id:number): Comment{
    return this.requestPostComments.filter(post => post.id == id)[0];
  }

  addAnnPostComm(add: Comment){
    this.announcementPostComments.push(add);
  }

  addClassPostComm(add: Comment){
    this.classPostComments.push(add);
  }

  addEventPostComm(add: Comment){
    this.eventPostComments.push(add);
  }

  addRequestPostComm(add: Comment){
    this.requestPostComments.push(add);
  }
}
