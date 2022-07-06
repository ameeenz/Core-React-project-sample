import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { People } from './components/People/index';
import { PeopleCreate } from './components/People/create';
import { PeopleDetail } from './components/People/detail';
import { PeopleEdit } from './components/People/edit';
export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/people/index' component={People} />
        <Route path='/people/create' component={PeopleCreate} />
        <Route path='/people/detail/:id' component={PeopleDetail} />
        <Route path='/people/edit/:id' component={PeopleEdit} />
      </Layout>
    );
  }
}
