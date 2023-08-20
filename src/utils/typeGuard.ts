import {UserGit} from "../type/user.ts";

export const isGitUser = (user: any): user is UserGit => "id" in user