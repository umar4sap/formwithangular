import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
 
  
  
     public progressValue : any = "17%";
  
 
  
  trigger(tabType){
    if(tabType=='about'){
      this.progressValue="17%";
    }else if(tabType=='account'){
      this.progressValue="50%";
    }else if(tabType=='addres'){
      this.progressValue="80%";
    }
    else if(tabType=='finish'){
      this.progressValue="100%";
    }
  }
}