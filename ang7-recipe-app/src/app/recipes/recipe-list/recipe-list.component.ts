import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is desc',
     'https://c.pxhere.com/photos/ad/33/soup_eat_cook_tomatoes_nutritional_yeast_vegan_tabasco_bowl-648689.jpg!d'),
    new Recipe('A test recipe', 'this is desc', 
    'https://c.pxhere.com/photos/ad/33/soup_eat_cook_tomatoes_nutritional_yeast_vegan_tabasco_bowl-648689.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
