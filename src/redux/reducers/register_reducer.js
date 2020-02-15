export default (state = {}, action) => {
    switch (action.type) {
      case 'login_success':
        console.log("vimal8");
        console.log(state);
        _.set(state, ['isLoggedIn'].join('.'), true);
        return state;
      case 'TOGGLE_TODO':
        return state.map(
          todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  