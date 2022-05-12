import { Component, OnInit } from '@angular/core';
import { ForoService } from '../../services/foro.service';
import { ForoPost } from '../../Entidades/ForoPost';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  ForoPosts : ForoPost [] = [];

  constructor(private foroService: ForoService) { }

  ngOnInit(): void {
  

  this.foroService.getPosts().subscribe((res) => {

   this.ForoPosts = res.map((e) => {
     return {
       id: e.payload.doc.id,
       ...(e.payload.doc.data() as ForoPost)
     };
   });
 }); 

}
}
