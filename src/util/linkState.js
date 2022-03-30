export const linkState = {
    getThemesState: (state) => state.themes.themes,
    getThemesBooksState: (state) => state.themes.books,
    getThemesBookState: (state) => state.themes.book,

    getAppLoadingState: (state) => state.app.loading,
    getPaginationSelectedPostState: (state) => state.pagination.selectedPost,
    getPaginationOldThemeState: (state) => state.pagination.oldTheme,
    getPaginationSelectedPostBooksState: (state) =>
        state.pagination.selectedPostBooks,
    getPaginationPageBooksState: (state) => state.pagination.pageBooks,
    getFidbackState: (state) => state.fidback.all_fidback,
    getBooksState: (state) => state.fidback.all_books,
    getUsersState: (state) => state.fidback.all_users,
    getSelectedBooksState: (state) => state.fidback.all_selected_books,
    getDesiredArray: (state) => state.fidback.desired_array,
    getLoginState: (state) => state.fidback.all_login,
    getUserValidallLoginState: (state) => state.fidback.auth,
    getUseAuth: (state) => state.fidback.user || {},
    getThemePost: (state) => state.post.post_theme,
    getBookPost: (state) => state.post.post_theme_book,
    getSelectedBookPost: (state) => state.post.post_book,
};
