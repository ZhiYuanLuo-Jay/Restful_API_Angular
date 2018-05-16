import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'; //(1) Import the HttpService 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Restful Task API';
  tasks = [];
  taskList = [];
  taskDesc: string;
  taskInfo: any;
  taskTitle: string;
  snacks: string[];
  loggedIn: boolean;
  newTask: any;
  editTask: any;

  constructor(private _httpService: HttpService){};  // (2) Make HttpService as an attribute in the class.

  ngOnInit(){
    this.getTasksFromService();
    // this.getTasksFromServiceById();
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;
    this.newTask = { title: "", description: ""}
    
  }

  onSubmit() {
    // console.log(this.newTask.title);
    // console.log(this.newTask.description);
    this.newTask = {
      title:this.newTask.title,
      description: this.newTask.description
    }
    let addObserable = this._httpService.addTask(this.newTask);
    addObserable.subscribe(postdata => {
      console.log("Got data from post back", postdata);
      this.newTask = { title: "", description: "" };
      this.getTasksFromService(); // After adding to the list, instantly display the updated info
    })
  }

  // Edit a Task, is to show the current task, then update the task.
  onUpdate() {
    this.editTask = {
      id:this.editTask.id,
      title:this.editTask.title,
      description: this.editTask.description
    }
    let updateObserable = this._httpService.updateTask(this.editTask);
    updateObserable.subscribe(putdata => {
      console.log("Got data from post back", putdata);
      this.editTask = { title: "", description: "" };
      this.getTasksFromService(); // After updating the list, instantly display the updated info
    })
  }
  
  onBtnEditTask(id:string, title:string, description:string) {
   console.log(`edit info: ${id} ${title} ${description}`);
   this.editTask = {id:id ,title: title, description: description}
  }
  // ===============================================================

  onBtnClickTasks(): void{
    let obserable = this._httpService.getTasks();
    obserable.subscribe(data => {
    console.log("Got our tasks!", data);
    this.tasks = data['data'];
    console.log("stored in attributes", this.tasks);
    }); 
  }

  onTaskDetail(id:string): void{
    console.log(`with _id: ${id}`);
    let showOne = this._httpService.getTaskById(id);
    showOne.subscribe(oneInfo =>{
      console.log("Got out task by Id", oneInfo);
      // this.taskTitle = oneInfo['info']['title'];
      // this.taskDesc = oneInfo['info']['description'];
      this.taskInfo = oneInfo['info'];
    })
  }
  
  onBtnDelTask(id:string): void{
    console.log(`with _id: ${id}`);
    let delOne = this._httpService.delTask(id);
    delOne.subscribe(oneInfo =>{
      console.log("Delete Task by Id", oneInfo);
      this.getTasksFromService(); // After updating the list, instantly display the updated info
    })
  }

  getTasksFromService(){
    let obserable = this._httpService.getTasks();
    obserable.subscribe(data => {
    console.log("Got our tasks!", data);
    this.taskList = data['data'];
    console.log("stored in attributes", this.taskList);
    });    
  }

  // getTasksFromServiceById(){
  //   let showOne = this._httpService.getTaskById();
  //   showOne.subscribe(data => {
  //     // console.log("Got out task by Id", data);
  //     this.task = data['info']['description'];
  //     console.log("retrieved by ID, store in attribute: ",this.task);
  //   });
  // }


  // Button click, User interactive example
  // onButtonClick(): void { 
  //   console.log(`Click event is working`);
  // }

  // onButtonClickP(num: Number): void { 
  //   console.log(`Click event is working with num param: ${num}`);
  // }

  // onButtonClickParams(num: Number, str: String): void { 
  //   console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }

  // onButtonClickEvent(event: any): void { 
  //   console.log(`Click event is working with event: ${event}`);
  // }


}
