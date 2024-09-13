import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent implements OnInit {
  editorContent: string = '';
  MESSAGE_ENGAGEMENT = [];
  MESSAGE : any;

  constructor(
    private interactionService : InteractionService, 
    private _chrd : ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

 
  setAlignment(alignment: 'left' | 'center' | 'right') {
    document.execCommand('justify' + alignment, false, '');
  }


  format(command: string, value?: string) {
    document.execCommand(command, false, value);
  }

  onContentChange() {
    this.editorContent = document.querySelector('.editor')?.innerHTML || '';
  }

 


  generateText() {
    console.log(this.editorContent, "CONETNEST");
    this.interactionService.initiateInteraction(this.editorContent).subscribe({
      next  : (response : any) =>{
        console.log(response, "SEND RESPONSE")
        this.MESSAGE_ENGAGEMENT = response.previous;
         
        
      },
      complete : () => {
        // this.editorContent.reset();
      }
    })
   
  }


}
