import { Double } from "mongoose";

export interface IMovie {
    title: String;
    year: Number;
    director: String;
    duration?: String;
    genre: String[];
    rate: Double;
    poster: String;
}
