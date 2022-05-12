import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForoService } from '../../services/foro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-foro-post',
  templateUrl: './foro-post.component.html',
  styleUrls: ['./foro-post.component.css']
})
export class ForoPostComponent implements OnInit {

  public postForm! : FormGroup; 
  usuarioLogueado = this.loginService.getUserLogueado();

  constructor( private foroService:ForoService, public formBuilder:FormBuilder, private loginService: LoginService
   // public router:Router
  ) {
    this.postForm = this.formBuilder.group({
      title: [''],
      content: [''],
      author: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.foroService.createPost(this.postForm.value)
   // this.router.navigate([''])
  }

}
