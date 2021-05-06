import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharServiceService } from 'src/app/servicios/char-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild(".container") content;
  state: boolean;
  icons;
  args;
  chatBoxContent;
  chatboxStatus;
  messages: Observable<any[]>;
  newMsg = '';
  constructor(private chatSer: CharServiceService, private router: Router) {
    this.state = false;
  }

  ngOnInit(): void {
    this.messages = this.chatSer.getChatMessages();
    console.log(this.messages)
  }


  toggleState() {
    this.state = !this.state;
    this.showOrHideChatBox();
  }

  showOrHideChatBox() {
    if (this.state) {
      this.chatboxStatus = "chatbox--active";
    } else if (!this.state) {

      this.chatboxStatus = "";

    }
  }

  sendMessage() {
    this.chatSer.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
}




