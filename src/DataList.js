import React from 'react';
import data from "./Pokemon_dataList"
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory ,{textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import "./datalist.css";

export default function DataList() {
  function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon); 
     })
    })
   }
   function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      console.log(pokeData)
      })
    }
  fetchKantoPokemon();
    const colums=[
        {dataField:'id',text:"Id"},
        {dataField:'name',text:"Name",filter:textFilter()},
        {dataField:'image',text:"Image"},
        {dataField:'cp',text:"CP"},
        {dataField:'attack',text:"Attack"},
        {dataField:'defenceType',text:"Defence Type"}
    ]

    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
          Showing { from } to { to } of { size } Results
        </span>
      );
      
      const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
          text: '10', value: 10
        }, {
          text: '20', value: 20
        }, {
          text: 'All', value: data.length
        }] // A numeric array is also available. the purpose of above example is custom the text
      };

      const rowStyle = (row, rowIndex) => {
        const style = {};
        style.padding=100;
        return style;
      };
    return (
        <BootstrapTable 
        bootstrap4 
        keyField='id' 
        columns={colums} 
        data={data}
        rowStyle={rowStyle
        }
        filter={filterFactory()}
        pagination={ paginationFactory(options) }
        />
        // <table >
        //     <tr>
        //         <th>Id</th>
        //         <th>Name</th>
        //         <th>Image</th>
        //         <th>CP</th>
        //         <th>Attact</th> 
        //         <th>Defence Type</th>

        //     </tr>
        
        //     {
        //         data.map(t =>
        //             <tr>

        //             <td>{t.id}</td>
        //             <td>{t.name}</td>
        //             <td>{t.image}</td>
        //             <td>{t.cp}</td>
        //             <td>{t.attack}</td>                    
        //             <td>{t.defenceType}</td>
        //             </tr>
        //         )
        //     }
        //     </table>
    );
}
