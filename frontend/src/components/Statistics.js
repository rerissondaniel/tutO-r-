import React, { Component } from 'react';

// Temporary function
function userTagList() {
  return [
    {
      name: "Programação Dinâmica",
      url: "#0"
    },
    {
      name: "Fluxo",
      url: "#0"
    },
    {
      name: "Matemática",
      url: "#0"
    },
    {
      name: "FFT",
      url: "#0"
    },
    {
      name: "Árvores",
      url: "#0"
    },
    {
      name: "Algoritmos Gulosos",
      url: "#0"
    },
    {
      name: "Estruturas de Dados",
      url: "#0"
    },
    {
      name: "Ad-hoc",
      url: "#0"
    },
    {
      name: "Geometria",
      url: "#0"
    }
  ];
};

export default class Statistics extends Component {

  // temporary images for illustrative purposes only
  userVerdicts() {
    return (
      <div className="pv4">
        <h1 className="f3 dark-green">Veredictos</h1>
        <img src="/src/components/Statistics/exampleStatisticsVerdicts.png" className="mw-100" alt="night sky over water"/>  
      </div>
    );
  }

  // temporary images for illustrative purposes only
  userLanguages() {
    return (
      <div className="pv4">
        <h1 className="f3 dark-green">Linguagens de Programação</h1>
        <img src="/src/components/Statistics/exampleStatisticsLanguages.png" className="mw-100" alt="night sky over water"/>  
      </div>
    );
  }

  // temporary images for illustrative purposes only
  userActivities() {
    return (
      <div className="ph3 ph5-ns pv4">
        <h1 className="f3 dark-green pa2">Atividades</h1>
        <img src="/src/components/Statistics/exampleStatisticsActivities.png" className="mw-100 pa2" alt="night sky over water"/>  
      </div>
    );
  }

  userTags() {
    return (
  		<nav className="ph3 ph5-ns pv4">
        <h1 className="f3 dark-green">Tags</h1>
  			<div className="nowrap overflow-x-auto">
    			{userTagList().map(tag => 
            <a className="f3 link dim br1 ph3 pv2 mb2 dib white bg-green botao-tag" href={tag.url} key={tag.name}> {tag.name} </a>)}
    		</div>
    	</nav>
    );
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="className=ph3 ph5-ns pv4 f2 tracked blue">Estatísticas</h1>
        
        <div className="cf ph3 ph5-ns">
          <div className="fl w-100 w-50-l pa2">
            {this.userVerdicts()}
          </div>
          <div className="fl w-100 w-50-l pa2">
            {this.userLanguages()}
          </div>
        </div>

        {this.userActivities()}
        {this.userTags()}
      </React.Fragment>
    );
  };
};