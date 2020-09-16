const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NuxtApp } = require("@keystonejs/app-nuxt");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
// const initialiseData = require("./initial-data");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const PROJECT_NAME = "open-relationship-nuxt";
const adapterConfig = {
  mongoUri: "mongodb://localhost/open-relationship-nuxt",
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  // onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

const TodoSchema = require("./lists/Todo.js");
const UserSchema = require("./lists/User.js");

keystone.createList("Todo", TodoSchema);
keystone.createList("User", UserSchema);
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
    }),
    new NuxtApp({
      srcDir: "src",
      buildDir: "dist",
    }),
  ],
};

const AreaSchema = require("./lists/Area.js");
const PeopleSchema = require("./lists/People.js");
const OrganizationSchema = require("./lists/Organizations.js");
const People_relationSchema = require("./lists/People_relation.js");
const People_organizationSchema = require("./lists/People_relation.js");
const Organization_relationSchema = require("./lists/Organization_relation.js");
const EventSchema = require("./lists/Events.js");
const PositionSchema = require("./lists/Posts.js");
const MembershipSchema = require("./lists/Memberships.js");
const CountSchema = require("./lists/Count.js");
const MotionSchema = require("./lists/Motions.js");
keystone.createList("Area", AreaSchema);
keystone.createList("ppl", PeopleSchema);
keystone.createList("Organization", OrganizationSchema);
keystone.createList("People_relation", People_relationSchema);
keystone.createList("People_organization", People_organizationSchema);
keystone.createList("Organization_relation", Organization_relationSchema);
keystone.createList("Event", EventSchema);
keystone.createList("Post", PositionSchema);
keystone.createList("Membership", MembershipSchema);
keystone.createList("Count", CountSchema);
keystone.createList("Motion", MotionSchema);
