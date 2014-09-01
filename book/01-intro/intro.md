
# Introduction

<!--{
  "title": "Introduction",
  "status": 0
}-->

This book is the manifesto of [the Swocial project](http://github.com/swocial). The project is about creating a distributed network of social applications, which has the interest of the private citizens as its very core. That means to the extent possible allow the users to administrate the content they have produced, create rules for who get to see what, and - in regard to copyrights - decide how it may be used by others. This raises several questions about how this should be done in terms of technical requirements, user experience, and economical and legal ramifications.

The environment the project strives to create cannot be realized without collaboration. This need creates roles for personas in addition to that of being a private citizen - service providers, distributors, curators, and many more. There is also the challenges of economics, as the intrastructure is not an exempt of a society that requires goods and services to be exchanged in order for its citizens to survive.

Manifesting the project will create challenges based on the fact that it will not be a singular entity - in its optimal form it will be multiple initiatives trying to create value for users, bound together by the exchange of data with and for the users. There will also be challenges as the project becomes bigger and more integrated with existing infrastructure and technical solutions. There will be competitors that will undermine the effort of the projects contributors. There will be multiple debates based on existing cultural societies and power structures. If it succeeds, it will grow beneath the grasp of what a singular person, organization, or interest group can control.

## Part one - Fundamental concepts

There are factors concerning the project that have overlapping issues, conflicting requirements, and probably many other challenges I haven't though of. But the hope is to try to identify as many facets as possible, and deal with them succinctly. In order for this to be done, I must lay some foundations. This will be the purpose of part one, which will consist of three chapters.

The first chapter in part one will be about the concepts of [Semantic Web](#the-semantic-web). Many of these standards are already used throughout the net, in other projects, and have proven to be sturdy tools for expressing and communicate data.

The second chapter is about [Distributed Social Networks (DSNs)](#distributed-social-networks). In addition to describing the core concepts of what they entail, it will also note some existing projects, and how they differ from the Swocial project.

Lastly, there is the chapter on [Economics](#economics). This will describe some basic theories of economics, compare them, and situate how the Swocial project relates to them.

## Part two - Discussions

This part will take on several discussions there are to be made on the Swocial project. It will have a bottom-to-top approach, meaning each chapter will in part build atop the discussion delt with in earlier chapter, i.e. there will be an accumulation of discussions.

The first chapter will be on [Infrastructure](#infrastructure), which includes different standards that are corner stones for DSNs, such as formats of data, protocols, and vocabularies. There will also be discussion on technical challenges, such as redundant data, synchronization issues, and latency.

The second chapter is about [Security](#security), and deals with challenges such as cryptography, privacy, and authentication. It will propose several schemas to classes of users, and how these should be treated as across DSNs.

As important as the more hard issues such as infrastructure and security, is how the user interacts with the system, and this will be discussed in the chapter on [User experience](#user-experience). Notably, the fact that a person has limited time to administrate their impact on the Internet, and there is a need for agents to work on the behalf of the users.

With issues regarding infrastructure, security, and user experience in place, it's time to discuss the [Economy](#economy) in a DSN. This involves currencies and markets, services and service providers, consumers and producers. An emphasis will be put on the different roles people will play in this economy, and how some of these can be troublesome when combined.

At last there will be a discussion on [Society](#society); how will the Swocial project situate itself in the existing digital social sphere. How will it extend cultural structures already in place, what power structures should be in place (if any), and should these reflect or differ from the existing ones manifested throuh the development of human culture.

## Who the book is for

There are several groups of people who may be interested in the project, and hopefully this manifesto will be a comprehensive guide for those who want to dwell on its aspects. These groups can be divided as the following sections describe, but note that membership to one group does not exclude membership to another. People are diverse, and may wear multiple hats.

### The private citizens

Users of social networks, consumers and producers as they are interchangeably, need to hold positions of power, so that their interests are protected.

**Citizens of social networks want:**

* To own the data of which they are the producers
  * To administrate this information in a way that isn't time-consuming or in other way burdensome to their lives and resources
* To make use of this data as they wish, which entails
  * To exchange parts with friends
  * To broadcast parts with followers
  * To allow service providers access, so that they can make use of it in some way that benefit the citizens
* To receive updates from the social network they are part of
  * Information that can be consumed and utilized in accordance with an agreement
* To the extent possible know what has been distributed, and to who

### The service providers

There are limitations to what can be accomplished by users alone. For a DSN to be possible, it needs to make use of a distributed network already in place, e.g. the Internet. In addition to this structural requirement, there also a need for service providers. A fact that must be acknowledged is that these providers are part of an economic system that requires them to turn in profit. Service providers need to be an integrated part of the system, and their needs should also be fulfilled (as long as they aren't in conflict with that of the users).

**Service providers should be able:**

* To develop and maintain a service without being required to offer full transparency (e.g. allowed to own and use proprietary code)
* To utilize the service in a way that enables them to continue the service (e.g. make profit)

At the same time a service is dependent on trust from its users, as they grant access to the data that can be processed. The mechanisms in play should make use of this, so that users can ensure that a service provider doesn't abuse the trust its given, e.g. by violating the statements of use of data.

### The developers and hackers

A developer may be a service provider, or part of a team that work as service provider, but not necessarily so. They may simply want to toy around with the data available, try to enhance them in new and unexpected ways. Especially when it comes to a persons own data, that should be as easily accessable and utilized as possible, and APIs should allow for read and write of data. At the same time, it's important that security and consistancy are taken care of, so that a user don't corrupt their data by mistake.

I've put hackers along with developers, as they have a lot of the same interests. The system should have white and grey hat hackers in mind, who are invaluable contributors to a system that must have high focus on security.

**Developers/hackers wish to:**

* Be innovative and utilize data in original/new ways
* Get access to data in an easy and secure manner
* Be able to report on faults in the systems

### Cultural architects

As social networks are part of the bigger, human picture, there will be people who are interested in tools to facilitate these digital networks. [more to come]

### Advertisers

[more to come]

### Scientists

[more to come]