import { Address } from "./address";
import { Company } from "./company";
import { Post } from "./post";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    posts: Post[];
}