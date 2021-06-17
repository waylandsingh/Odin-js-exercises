const getTheTitles = function(books) {
    // books is an array of objects
    // get a title from each book: mapping from 1 to 1

    const titles = books.map(e=>e.title)
    return titles

};

module.exports = getTheTitles;
