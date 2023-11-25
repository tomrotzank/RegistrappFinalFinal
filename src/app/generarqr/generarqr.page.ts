import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }

  volverALogin(){
    this.router.navigate(['/feed']);
  }
}
