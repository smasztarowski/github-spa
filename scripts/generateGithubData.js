let randomString;
let randomEmail;
let LoremIpsum;
try {
    randomString = require('crypto-random-string');
    randomEmail = require('random-email');
    LoremIpsum = require("lorem-ipsum").LoremIpsum;
} catch (ex) {
    console.warn('You can use this only in development mode');
    return;
}
const fs = require('fs');
const path = require('path');
const randomDate = require('./utils/randomDate');
const randomNumber = require('./utils/randomNumber');

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const baseUser = {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: `https://placekitten.com/g/${randomNumber(1, 10) * 100}/${randomNumber(1, 10) * 100}`,
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url: 'https://api.github.com/users/octocat/following',
    gists_url: 'https://api.github.com/users/octocat/gists',
    starred_url: 'https://api.github.com/users/octocat/starred',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
}

const baseUserDetails = {
    ...baseUser,
    name: 'monalisa octocat',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    hireable: false,
    bio: 'There once was...',
    twitter_username: 'monatheoctocat',
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2008-01-14T04:33:35Z',
};

const users = [
    baseUser,
];

const usersDetails = [
    baseUserDetails,
];

for (let i = 2; i < 100; i++) {
    const login = randomString({ length: 10 });
    const twitter_username = randomString({ length: 10 });
    const name = `${randomString({ length: randomNumber(5, 15) })} ${randomString({ length: randomNumber(5, 15) })}`;
    const location = `${randomString({ length: randomNumber(5, 15) })} ${randomString({ length: randomNumber(5, 15) })}`;
    const email = randomEmail();
    const bio = lorem.generateSentences(randomNumber(1, 5));
    const created_at = randomDate(new Date(2000, 0, 1), new Date(), 0, 24).toISOString();
    const updated_at = randomDate(new Date(2000, 0, 1), new Date(), 0, 24).toISOString();
    const user = {
        login,
        id: i,
        node_id: randomString({ length: 10, type: 'base64' }),
        avatar_url: `https://placekitten.com/g/${randomNumber(1, 10) * 100}/${randomNumber(1, 10) * 100}`,
        gravatar_id: '',
        url: `https://api.github.com/users/${login}`,
        html_url: `https://github.com/${login}`,
        followers_url: `https://api.github.com/users/${login}/followers`,
        following_url: `https://api.github.com/users/${login}/following`,
        gists_url: `https://api.github.com/users/${login}/gists`,
        starred_url: `https://api.github.com/users/${login}/starred`,
        subscriptions_url: `https://api.github.com/users/${login}/subscriptions`,
        organizations_url: `https://api.github.com/users/${login}/orgs`,
        repos_url: `https://api.github.com/users/${login}/repos`,
        events_url: `https://api.github.com/users/${login}/events`,
        received_events_url: `https://api.github.com/users/${login}/received_events`,
        type: 'User',
        site_admin: false,
    };
    const userDetails = {
        ...user,
        name,
        company: 'GitHub',
        blog: 'https://github.com/blog',
        location,
        email,
        hireable: false,
        bio,
        twitter_username,
        public_repos: randomNumber(0, 15),
        public_gists: randomNumber(0, 15),
        followers: randomNumber(0, 15),
        following: randomNumber(0, 15),
        created_at,
        updated_at,
    };
    users.push(user);
    usersDetails.push(userDetails);
}

const usersData = JSON.stringify(users, null, 4);
const usersDetailsData = JSON.stringify(usersDetails, null, 4);

try {
    const dir = path.join(__dirname, '/../src/Api/Sandbox/constants');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(path.join(dir, 'mockUsers.js'), `export const usersData = ${usersData}`);
    fs.writeFileSync(path.join(dir, 'mockUsersDetails.js'), `export const usersDetailsData = ${usersDetailsData}`);
    console.log('Data is saved.');
} catch (error) {
    console.error(error);
}
