# SkotOS Jitsi Admin

To have persistent rooms in Jitsi, we need a persistent connection to them. To limit access to rooms, we need an admin, and we need to not give out admin access to random users (or they can kick other players, etc.)

So: we secure our Jitsi and limit it to specific accounts using the internal_hashed Jitsi authentication method. We hold open connections to persistent rooms from a single SkotOS admin XMPP account (called skotosadmin). This server communicates with the local DGD server to determine what rooms to create, who to allow or kick, etc.

Note: this is modified from github.com/jitsi/jxs, a sort of Jitsi XMPP load-tester. Hristo Terezov is listed as a "contributor" because he is the initial author of that load-tester, which I modified.

## Building
```
npm install
npm run build
```

You can find the build in `dist/`. There's only one bundled file there - `main.js`.

## Running

Note: UPDATE THIS SECTION

```
npm start <path_to_config_json> <number_of_conferences> <number_of_participants_per_conference>
```

or

```
node dist/main.js <path_to_config_json> <number_of_conferences> <number_of_participants_per_conference>
```

### Config.json

Note: UPDATE THIS SECTION

You must specify the path to a `config.json` file as a first argument of the app. We read the following properties from there:
 - service - required. This will be a service URL to the xmpp server that we use.
 - domain - required. The domain of the xmpp server.

