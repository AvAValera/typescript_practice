export type localUserGit = {
  login: string,
  id: number,
  avatar: string,
  mame: string,
  company: string,
  location: string,
  bio: string,
  blog: string,
  twitter: string,
  repos: number,
  followers: number,
  following: number,
  created: string
}

export type UserGit = {
  login: string,
  id: number,
  avatar_url: string,
  name: string,
  company: string,
  location: string,
  bio: string,
  blog: string,
  twitter_username: string,
  public_repos: number,
  followers: number,
  following: number,
  created_at: Date
}

export type UserGitError = {
  message: string,
  documentation_url: string
}

