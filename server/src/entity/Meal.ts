import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Recipe, (recipe) => recipe.meals)
  recipes: Recipe[];
}
