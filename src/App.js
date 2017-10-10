import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input.js';
import Signature from './Signature.js';
import Select from './Select.js';


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        name: this.props.name,
        title: this.props.title,
        mobile: this.props.mobile,
        telephone: this.props.telephone,
        //theme: this.props.theme
    };
    console.log("Na", this.props.properties['pl']);
    this.properties = {
      
          "languageLabel": "Language",
          "en": "English",
          "zh": "中文",
          "es": "Spanish",
          "pt": "Portuguese",
          "de": "Deutsch",
          "koLabel": "kolszewskieu",
          "koUrl": "http://kolszewski.eu/",
          "title": "Email Signature Generator",
          "subtitle": "Give us your details and we'll give you your brand.",
          "nameLabel": "Name",
          "titleLabel": "Title",
          "mobileLabel": "Mobile",
          "telephoneLabel": "Telephone",
          "themeLabel": "Theme",
          "black": "Black",
          "blue": "Blue",
          "earth": "Earth",
          "green": "Green",
          "iceBlue": "Ice Blue",
          "lime": "Lime",
          "magenta": "Magenta",
          "mint": "Mint",
          "ocean": "Ocean",
          "orange": "Orange",
          "pink": "Pink",
          "plum": "Plum",
          "red": "Red",
          "warmth": "Warmth",
          "previewLabel": "Preview",
          "selectSignatureLabel": "Select Signature",
          "instructionsLead": "After selecting your signature,",
          "instructions": "you will need to manually copy and paste it into your email client.",
          "footnote": "Created by KO"
      }
    console.log(this.properties);
    //theme = this.props.themes[this.state.theme];
  }

  handleTelephoneChange = (val, event) => {
    //console.log(val);
    this.setState({telephone:val});
  }
  
  handleNameChange = (val, event) => {
      this.setState({name:val});
  }

  handleTitleChange = (val, event) => {
    this.setState({title:val});
  }

  handleMobileChange = (val, event) => {
    this.setState({mobile:val});
  }

  selectSignature = () => {
    /* global window, document */
    var selection = window.getSelection(),
        range = document.createRange(),
        node = ReactDOM.findDOMNode(this.refs.signature);
        selection.removeAllRanges();
        range.selectNodeContents(node);
        selection.addRange(range);
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
        <section className="generator">
                    <div className="details">
                        <Input
                            id="name"
                            type="text"
                            label={this.properties.nameLabel}
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                        <Input
                            id="title"
                            type="text"
                            label={this.properties.titleLabel}
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                        <Input
                            id="telephone"
                            type="tel"
                            label={this.properties.telephoneLabel}
                            value={this.state.telephone}
                            onChange={this.handleTelephoneChange}
                        />
                        <Input
                            id="mobile"
                            type="text"
                            label={this.properties.mobileLabel}
                            value={this.state.mobile}
                            onChange={this.handleMobileChange}
                        />
                        {/* <Select
                            className="primary transition"
                            style={{
                                "color": "black",
                                "backgroundColor": "white"
                            }}
                            name="theme"
                            label={this.properties.themeLabel}
                            value={this.state.theme}
                            options={Object.keys(this.props.themes).map(function (theme) {
                                return {
                                    "label": properties[theme],
                                    "value": theme,
                                    "selected": this.state.theme === theme
                                };
                            }.bind(this))}
                            onChange={this.handleThemeChange}
                        /> */}
                    </div>
                    <section className="preview">
                        <label>{this.properties.previewLabel}</label>
                        <Signature
                            className="signature"
                            ref="signature"
                            logo={{
                                height: "31px",
                                href: this.properties.koUrl +
                                    "?utm_campaign=" + this.state.name.toLowerCase().replace(" ", "-") + "-signature&" +
                                    "utm_medium=email&" +
                                    "utm_source=achilles_signature",
                                src: '',
                                alt: this.properties.koLabel
                            }}
                            color="black"
                            backgroundColor="white"
                            name={this.state.name}
                            title={this.state.title}
                            mobile={{
                                label: this.properties.mobileLabel,
                                value: this.state.mobile
                            }}
                            telephone={{
                                label: this.properties.telephoneLabel,
                                value: this.state.telephone
                            }}
                        />
                        <button
                            className="button primary transition"
                            onClick={this.selectSignature}
                            style={{
                                "color": "black",
                                "backgroundColor": "white"
                            }}>
                            {this.properties.selectSignatureLabel}
                        </button>
                        <p>
                            <strong>{this.properties.instructionsLead}</strong> {this.properties.instructions}
                        </p>
                    </section>
                </section>
        </div>
        
      </div>
    );
  }
}

export default App;
