import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Ingredient } from "./Ingredient";
import { Appliance } from "./Appliance";
import { Meal } from "./Meal";

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  instructions: string;

  @Column()
  estimated_time: number;

  @Column()
  beforehand_prep: boolean;

  @ManyToMany((type) => Ingredient, (ingredient) => ingredient.recipes)
  ingredients: Ingredient[];

  @ManyToMany((type) => Meal, (meal) => meal.recipes)
  meals: Meal[];

  @ManyToMany((type) => Appliance, (appliance) => appliance.recipes)
  appliances: Appliance[];
}
