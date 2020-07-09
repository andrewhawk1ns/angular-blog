import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  private title: String = 'Archive';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.paramMap
    .subscribe(params => { //Need to subscribe if we are staying on the same route
      const year = params.get('year'); // + converts the id to a number
      const month = params.get('month');
      this.title = `${this.title} ${year} / ${month}`;
    });
  }

  viewAll() {
    this.router.navigate(['/']);
  }

}
