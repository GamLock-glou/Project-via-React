import './App.css';
import { GET_ALL_CATEGORIES, GET_ALL_CURRENCIES, GET_ONE_CATEGORY } from './query/query';
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from './pictures/logo.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "USD"
    }

  }
  
  render() {
    const categories = this.state?.categories ?? [];
    const currencies = this.state?.currencies ?? [];
    const category = this.state?.category ?? [];
    return (
       <div className='App'>
        <div className='header'>
          <div className='wrapper'>
          {this.renderNavBar(categories, currencies)}
          </div>
        </div>
        <div className='body'>
          <div className='wrapper'>
            {this.renderBody(category)}
          </div>
        </div>
       </div>
    );
  }


  //__________________________components___________________________

  componentDidMount(){
    this.getCategoriesAndCurrncies();
    this.getOneCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState?.pathname != this.state.pathname)
      this.getOneCategories();
  }

  componentWillUnmount() {
    console.warn("hi")
    this.getPriceArray();
  }

  //___________________________!#__________________________________


  //________________________functions______________________________

  renderNavBar(categories, currencies) {
    return (
      <div className="header__wrapper">
          <div className="header__nav">
              <ul className="header__list">
              {
                  categories.map((category, key)=><li className="header__item" key={key}>
                      <NavLink 
                        to={category.name} 
                        onClick={()=>this.setState({pathname: category.name})} 
                        className="header__link"
                        >
                          {category.name}
                      </NavLink>
                  </li>)
              }
              </ul>
          </div>
          <div className="header__logo">
              <img src={logo}/>
          </div>
          <div className="header__money">
          {/* {
              currencies.map((currensy, key)=><div className="" key={key}>
                  {currensy.label} {currensy.symbol}
              </div>)
          } */}
          </div>
       </div>
      );
  }

  renderBody(category) {
    return (
    <div className="body__wrapper">
      <div className="body__header">
        <h1>{category.name}</h1>
      </div>
      <div className="body__nav">
        <div>
          {
            this.getProductsArray(category?.products)
          }
        </div>
      </div>
    </div>
    );
  }

  getProductsArray(products) {
    return products?.map((product, key) => <div key={key}>
      {product.name}
      {
        product.inStock ?
        <img src={product.gallery[0]} />
        :
        <div>
            false
            <img src={product.gallery[0]} />
          </div>
      }
      {this.getPriceArray(product.prices).amount + this.getPriceArray(product.prices).currency.label}
    </div>)
  }

  getPriceArray(prices) {
    return prices?.find(price => {
      if(price.currency.label != this.state.currency)
        return false;
      else
        return price;
    })
  }

  //_____________________________!#________________________________


  //____________________________Queries____________________________

  async getCategoriesAndCurrncies() {
    this.props.query({
      query: GET_ALL_CATEGORIES
    }).then(result=> {
      this.setState({categories: result.data.categories})});

    this.props.query({
      query: GET_ALL_CURRENCIES
    }).then(result => {
      this.setState({currencies: result.data.currencies})
      // console.log(result.data)
    })
  }

  async getOneCategories() {

    this.props.query({
      query: GET_ONE_CATEGORY,
      variables: {
        input: {title: this.state?.pathname ?? window.location.pathname.substr(1)}
      }
    }).then(result => {
      console.log(result.data)

      this.setState({category: result.data.category});
    }
    )
  }

  //________________________________________________________________


}

export default App;
