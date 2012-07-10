/// <reference path="jquery.js" />
/// <reference path="handlebars.js" />
/// <reference path="ember.js" />
/// <reference path="ember-data.js" />

var App = null;

$(function () {

    App = Ember.Application.create();

    App.ApplicationController = Ember.Controller.extend();
    App.ApplicationView = Ember.View.extend({ templateName: 'application' });

    App.HomeController = Ember.Controller.extend();
    App.HomeView = Ember.View.extend({ templateName: 'home' });

    App.NavbarController = Ember.Controller.extend();
    App.NavbarView = Ember.View.extend({ templateName: 'navbar' });

    App.ContactModel = Ember.Object.extend({
        id: null,
        firstName: null,
        lastName: null,
        alias: null,
        imageUrl: 'http://img580.imageshack.us/img580/8577/unknownlg.jpg',
        twitter: null,
        twitterLink: function() {
            return 'https://twitter.com/#!/%@'.fmt(this.twitter);
        }.property('twitter'),
        facebook: null,
        website: null,
        fullName: function () {
            return '%@ %@'.fmt(this.firstName, this.lastName)
        }.property('firstName', 'lastName'),
        fullNameAlias: function() {
            return '%@ %@ (%@)'.fmt(this.firstName, this.lastName, this.alias);
        }.property('firstName', 'lastName', 'alias'),
        toJSON : function() {
            return {
                Id: this.get("id"),
                FirstName: this.get("firstName"),
                LastName: this.get("lastName"),
                Alias: this.get("alias"),
                ImageUrl: this.get("imageUrl"),
                Twitter: this.get("twitter"),
                Facebook: this.get("facebook"),
                Website: this.get("website")
            };
        },
        twitterLink: function() {
            return 'https://twitter.com/%@'.fmt(this.get('twitter'));
        }.property('twitter'),
        makeCopy: function () {
            return App.ContactModel.create({
                id: this.id,
                firstName: this.get("firstName"),
                lastName: this.get("lastName"),
                imageUrl: this.get("imageUrl"),
                alias: this.get("alias"),
                website: this.get("website"),
                facebook: this.get("facebook"),
                twitter: this.get("twitter")
            });
        }
    });

    App.ContactsController = Ember.ArrayController.extend({
        content: [],
        currentPage: 1,
        itemsPerPage: 4,
        isLoaded: false,
        isEmptyCollection: function() {
            return this.content.length === 0;
        }.property('@each'),
        resourceUrl: '/api/contact/%@',
        contactsCount: function() {
            return this.content.length;
        }.property('@each'),
        findAll: function () {
            var _self = this;
            _self.set('isLoaded', false);
            $.ajax({
                url: this.resourceUrl.fmt(''),
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    _self.set('content', []);
                    $(data).each(function () {
                        _self.pushObject(App.ContactModel.create({
                            id: this.Id,
                            firstName: this.FirstName,
                            lastName: this.LastName,
                            imageUrl: (this.ImageUrl === '' ? 'http://img580.imageshack.us/img580/8577/unknownlg.jpg' : this.ImageUrl),
                            alias: (this.Alias === '' ? ' - ' : this.Alias),
                            website: (this.Website === null ? ' - ' : this.Website),
                            facebook: (this.Facebook === null ? ' - ' : this.Facebook),
                            twitter: (this.Twitter === '' ? null : this.Twitter)
                        }));
                    });
                },
                error: function (xhr, text, error) {
                    console.log('error: %@'.fmt(text));
                },
                complete: function (x) {
                    _self.set('isLoaded', true);
                }
            });
        }
        
    });

    App.ContactController = Ember.Controller.extend({
        contact: null,
        templateName: 'contact-details',
        isLoaded: true,
        resourceUrl: '/api/contact/%@',
        find: function (id) {
            var _self = this;
            _self.set('contact', null);
            _self.set('isLoaded', false);
            $.ajax({
                url: this.resourceUrl.fmt(id),
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    var contact = null;
                    $(data).each(function () {
                        contact = App.ContactModel.create({
                            id: this.Id,
                            firstName: this.FirstName,
                            lastName: this.LastName,
                            imageUrl: (this.ImageUrl === '' ? 'http://img580.imageshack.us/img580/8577/unknownlg.jpg' : this.ImageUrl),
                            alias: (this.Alias === '' ? ' - ' : this.Alias),
                            website: (this.Website === null ? ' - ' : this.Website),
                            facebook: (this.Facebook === null ? ' - ' : this.Facebook),
                            twitter: (this.Twitter === '' ? null : this.Twitter)
                        });
                    });
                    _self.set('contact', contact);
                    _self.set('isLoaded', true);
                    console.log('record retrieved');
                },
                error: function (xhr, text, error) {
                    console.log('contact-find -> error: %@'.fmt(text));
                },
                complete: function (x) {
                    _self.set('isLoaded', true);
                }
            });
        },
        update: function (id, contact) {
            var _self = this;
            if (null == contact) {
                contact = _self.get('contact');
            }
            _self.set('isLoaded', false);
            $.ajax({
                url: this.resourceUrl.fmt(id),
                data: JSON.stringify(contact),
                type: 'PUT',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    console.log('record updated');
                    _self.set('contact', contact);
                    _self.set('isLoaded', true);
                },
                error: function (xhr, text, error) {
                    console.log('contact-update -> error: %@'.fmt(text));
                }
            });
        },
        add: function (contact) {
            var _self = this;
            _self.set('isLoaded', false);
            $.ajax({
                url: this.resourceUrl.fmt(''),
                data: JSON.stringify(contact),
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    console.log('record saved');
                },
                error: function (xhr, text, error) {
                    console.log('contact-add -> error: %@'.fmt(text));
                },
                complete: function (x) {
                    _self.set('isLoaded', true);
                }
            });
        },
        remove: function (id) {
            var _self = this;
            var _id = id;
            _self.set('isLoaded', false);
            $.ajax({
                url: this.resourceUrl.fmt(id),
                type: 'DELETE',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    console.log('record deleted');
                    App.router.get('contactsController').removeObject(
                        App.router.get('contactsController').get('content').filterProperty('id', _id)[0]
                    );
                    _self.set('contact', null);
                },
                error: function (xhr, text, error) {
                    console.log('contact-remove -> error: %@'.fmt(text));
                },
                complete: function (x) {
                    _self.set('isLoaded', true);
                    App.Router.transitionTo('root.contacts.index');
                }
            });
        }
    });

    App.ContactsView = Ember.View.extend({
        templateName: 'contact-table'
    });

    App.ContactListItemView = Ember.View.extend({
        templateName: 'contact-table-row'
    });

    App.ContactView = Ember.View.extend({
        templateName: 'contact-details'
    });

    App.EditContactView = Ember.View.extend({
        templateName: 'contact-edit'
    });

    App.AddContactView = Ember.View.extend({
        templateName: 'contact-add'
    });

    App.Router = Ember.Router.extend({
        enableLogging: true,
        location: 'hash',

        root: Ember.Route.extend({
            // EVENTS
            gotoHome: Ember.Route.transitionTo('home'),
            gotoContacts: Ember.Route.transitionTo('contacts.index'),

            // STATES
            home: Ember.Route.extend({
                route: '/',
                connectOutlets: function (router, context) {
                    router.get('applicationController').connectOutlet('home');
                }
            }),
            contacts: Ember.Route.extend({
                route: '/contacts',
                index: Ember.Route.extend({
                    route: '/',
                    contactDetails: function (router, context) {
                        var contact = context.context;
                        router.transitionTo('details', contact);
                    },
                    contactEdit: function (router, context) {
                        var contact = context.context.makeCopy();
                        router.transitionTo('edit', contact);
                    },
                    contactRemove: function (router, context) {
                        var contact = context.context;
                        Bootstrap.ModalPane.popup({
                            heading: "Remove Contact",
                            message: "Are you sure you want to remove <strong>%@</strong> from your contact list?".fmt(contact.get('fullName') === contact.get('alias') ? contact.get('fullName') : contact.get('fullNameAlias')),
                            primary: "OK",
                            secondary: "Cancel",
                            showBackdrop: true,
                            callback: function (opts, event) {
                                if (opts.primary) {
                                    router.get('contactController').remove(contact.get('id'));
                                }
                                event.preventDefault();
                            }
                        });
                    },
                    contactAdd: function (router, context) {
                        var contact = App.ContactModel.create();
                        router.transitionTo('add', contact)
                    },
                    connectOutlets: function (router, context) {
                        router.get('contactsController').findAll();
                        router.get('applicationController').connectOutlet('contacts', router.get('contactsController').content);
                    }
                }),
                details: Ember.Route.extend({
                    route: '/:contact_id',
                    view: App.ContactView,
                    connectOutlets: function (router, contact) {
                        router.get('contactController').set('contact', contact);
                        router.get('applicationController').connectOutlet('contact');
                    },
                    serialize: function (router, contact) {
                        return { "contact_id": contact.get('id') }
                    },
                    deserialize: function (router, params) {
                        return router.get('contactController').find(params["contact_id"]);
                    }
                }),
                edit: Ember.Route.extend({
                    route: '/:contact_id/edit',
                    connectOutlets: function (router, contact) {
                        router.get('contactController').set('contact', contact);
                        router.get('applicationController').connectOutlet({
                            viewClass: App.EditContactView,
                            controller: router.get('contactController'),
                            context: contact
                        });
                    },
                    submitUpdateContact: function(router, context) {
                        var contact = context.context;
                        router.get('contactController').update(contact.get('id'), contact);
                        router.transitionTo('root.contacts.index');
                    },
                    submitRemoveContact: function (router, context) {
                        var contact = context.context;
                        Bootstrap.ModalPane.popup({
                            heading: "Remove Contact",
                            message: "Are you sure you want to remove <strong>%@</strong> from your contact list?".fmt(contact.get('fullName') === contact.get('alias') ? contact.get('fullName') : contact.get('fullNameAlias')),
                            primary: "OK",
                            secondary: "Cancel",
                            showBackdrop: true,
                            callback: function (opts, event) {
                                if (opts.primary) {
                                    router.get('contactController').remove(contact.get('id'));
                                    router.transitionTo('root.contacts.index');
                                }
                                event.preventDefault();
                            }
                        });
                    },
                    serialize: function (router, contact) {
                        return { "contact_id": contact.get('id') }
                    },
                    deserialize: function (router, params) {
                        return router.get('contactController').find(params["contact_id"]);
                    }
                }),
                add: Ember.Route.extend({
                    route: '/add',
                    viewClass: App.AddContactView,
                    connectOutlets: function (router, contact) {
                        var c = App.ContactModel.create();
                        router.get('contactController').set('contact', c);
                        router.get('applicationController').connectOutlet({
                            viewClass: App.AddContactView,
                            controller: router.get('contactController'),
                            context: c
                        });
                    },
                    submitAddContact: function (router, context) {
                        var contact = context.context;
                        router.get('contactController').add(contact);
                        router.get('contactsController').pushObject(contact);
                        router.transitionTo('root.contacts.index');
                    }
                })

            })
        })
    });
    App.initialize();
});