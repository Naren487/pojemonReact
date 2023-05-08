  import React from 'react';
  import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* Pagination Component 
-------------------------------------------------*/

// const propTypes = {
//   items: React.PropTypes.array.isRequired,
//   onChangePage: React.PropTypes.func.isRequired,
//   initialPage: React.PropTypes.number    
// }

// const defaultProps = {
//   initialPage: 1
// }

// class Pagination extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = { 
//         pager: {}
//       };
//   }

//   componentWillMount() {
//       // set page if items array isn't empty
//       if (this.props.items && this.props.items.length) {
//           this.setPage(this.props.initialPage);
//       }
//   }

//   componentDidUpdate(prevProps, prevState) {
//       // reset page if items array has changed
//       if (this.props.items !== prevProps.items) {
//           this.setPage(this.props.initialPage);
//       }
//   }

//   setPage(page) {
//       var items = this.props.items;
//       var pager = this.state.pager;

//       if (page < 1 || page > pager.totalPages) {
//           return;
//       }

//       // get new pager object for specified page
//       pager = this.getPager(items.length, page, 10, 10);

//       // get new page of items from items array
//       var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

//       // update state
//       this.setState({ pager: pager });

//       // call change page function in parent component
//       this.props.onChangePage(pageOfItems);
//   }

//   getPager(totalItems, currentPage, pageSize, maxPagesToDisplay) {
//       // default to first page
//       currentPage = currentPage || 1;

//       // default page size is 10
//       pageSize = pageSize || 10;

//       // default max pages to display is 10
//       maxPagesToDisplay = maxPagesToDisplay || 10;
    
//       // calculate total pages
//       var totalPages = Math.ceil(totalItems / pageSize);

//       var startPage, endPage;
//       if (totalPages <= maxPagesToDisplay) {
//           // less than 10 total pages so show all
//           startPage = 1;
//           endPage = totalPages;
//       } else {
//           // more than 10 total pages so calculate start and end pages

//           var halfwayPoint = Math.ceil(maxPagesToDisplay / 2);
//           var pastHalfwayPoint = Math.floor(maxPagesToDisplay / 2) + 1;
//           var beforeHalfwayPoint = halfwayPoint - 1;
//           if (currentPage <= pastHalfwayPoint) {
//               startPage = 1;
//               endPage = maxPagesToDisplay;
//           } else if (currentPage + beforeHalfwayPoint >= totalPages) {
//               startPage = totalPages - (maxPagesToDisplay - 1);
//               endPage = totalPages;
//           } else {
//               startPage = currentPage - halfwayPoint;
//               endPage = currentPage + beforeHalfwayPoint;
//           }
//       }

//       // calculate start and end item indexes
//       var startIndex = (currentPage - 1) * pageSize;
//       var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

//       // create an array of pages to ng-repeat in the pager control
//       var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

//       // return object with all pager properties required by the view
//       return {
//           totalItems: totalItems,
//           currentPage: currentPage,
//           pageSize: pageSize,
//           totalPages: totalPages,
//           startPage: startPage,
//           endPage: endPage,
//           startIndex: startIndex,
//           endIndex: endIndex,
//           pages: pages
//       };
//   }

//   render() {
//       var pager = this.state.pager;

//       if (!pager.pages || pager.pages.length <= 1) {
//           // don't display pager if there is only 1 page
//           return null;
//       }

//       return (
//           <ul className="pagination">
//               <li className={pager.currentPage === 1 ? 'disabled' : ''}>
//                   <a onClick={() => this.setPage(1)}>First</a>
//               </li>
//               <li className={pager.currentPage === 1 ? 'disabled' : ''}>
//                   <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
//               </li>
//               {pager.pages.map((page, index) =>
//                   <li key={index} className={pager.currentPage === page ? 'active' : ''}>
//                       <a onClick={() => this.setPage(page)}>{page}</a>
//                   </li>
//               )}
//               <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
//                   <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
//               </li>
//               <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
//                   <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
//               </li>
//           </ul>
//       );
//   }
// }

// Pagination.propTypes = propTypes;
// Pagination.defaultProps = defaultProps;


// /* App Component 
// -------------------------------------------------*/

// class App extends React.Component {
//   constructor() {
//       super();

//       // an example array of items to be paged
//       var exampleItems = [...Array(250).keys()].map(i => (
//         { 
//           id: (i+1), 
//           name: 'Item ' + (i+1),
//           anotherProperty: 'Just another value for testing display'
//         }
//       ));

//       this.state = {
//           exampleItems: exampleItems,
//           filteredItems: exampleItems, // It is not filtered by default.
//           pageOfItems: []
//       };

//       // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
//       this.onChangePage = this.onChangePage.bind(this);
    
//       this.handleFilter = this.handleFilter.bind(this);
//   }

//   onChangePage(pageOfItems) {
//       // update state with new page of items
//       this.setState({ pageOfItems: pageOfItems });
//   }

//   handleFilter(e) {
//     const inputValue = e.currentTarget.value.toString().toLowerCase();
//     const newFilteredItems = this.state.exampleItems.filter(item => {
//       const itemNameLowerCase = item.name.toLowerCase();
//       return itemNameLowerCase.includes(inputValue);
//     });
    
//     if (newFilteredItems.length === 0) { // The loop to display breaks when there's no match for the items so we need to do this
//       newFilteredItems.push({id: 0, name: ''});
//     }
    
//     this.setState({filteredItems: newFilteredItems });
//   }

//   render() {
    
//     let noResultsMessage = (this.state.filteredItems[0].id === 0) ? <div>No results found!</div> : '';
    
//     let tableDisplay = (this.state.filteredItems[0].id === 0) ? 'hidden' : '';
    
//       return (
//           <div>
//               <div className="container">
//                   <div className="text-center">
//                       <h1>React - Pagination Example with logic like Google</h1>
                    
//                       <input type="text" placeholder="Filter items" onInput={this.handleFilter} />
                    
//                       <div className={`table ${tableDisplay}`}>
//                         <div className="row row--heading">
//                             <div className="item__id">ID</div>
//                             <div className="item__name">Name</div>
//                             <div className="item__description">Description</div>
//                         </div>
                    
//                       {
//                         this.state.pageOfItems.map(item =>
//                           <div key={item.id} className={`item--${item.id}
// row`}>
//                                <div className="item__id">{item.id}</div>
//                                <div className="item__name">{item.name}</div>
//                                <div className="item__description">{item.anotherProperty}</div>
//                           </div>
//                        )
//                       }
                        
//                       </div>
                    
//                     {noResultsMessage}
                    
//                       <Pagination items={this.state.filteredItems} onChangePage={this.onChangePage} />
//                   </div>
//               </div>
//               <hr />
//               <div className="credits text-center">
//                   <p>
//                     Pagination with Filter - forked off:&nbsp;
//                       <a href="http://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google" target="_top">React - Pagination Example with Logic like Google</a>
//                   </p>
//               </div>
//           </div>
//       );
//   }
// }

// /* Render Call
// -------------------------------------------------*/
// ReactDOM.render(<App />, document.getElementById('app'));