import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class Appliance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Recipe, (recipe) => recipe.appliances)
  recipes: Recipe[];
}
