import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, {CardVariant} from "./components/Card";
import UserItem from "./components/UserItem";
import { IUser, ITodo } from "./types/types";
import List from "./components/List"
import TodoItem from "./components/TodoItem";
import EventExample from "./components/EventsExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {


  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Users </NavLink>
          <NavLink to="/todos">ToDos </NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UsersPage/>}/>
          <Route path={'/todos'} element={<TodosPage/>}/>
          <Route path={'/users/:id'} element={<UserItemPage/>}/>
          <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //   <EventExample/>
    //   <Card variant={CardVariant.outlined} width="200px" height="200px">
    //     <button>Button</button>
    //   </Card>
      
      
    // </div>
  );
};

export default App;