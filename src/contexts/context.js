import React from 'react';

const AppContext = React.createContext({
    students: [],
    removeStudent: () => {},
    addStudent: () => {},
    randomizeHouse: () => {},
    getStudents: () => {}
})

export default AppContext;