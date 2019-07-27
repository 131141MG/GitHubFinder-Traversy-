class Github {
  constructor() {
    this.client_id = '374165c09841b7143b84';
    this.client_secret = 'e7f43de6a172a618e5efe447b7708d9373f7df44';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile, //profile: profile (same thing in ES6)
      repos //repos:repos
    };
  }
}
