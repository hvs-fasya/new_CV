import React, {Component} from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import Dialog from 'material-ui/Dialog';
import {pink900} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import {List, ListItem, MakeSelectable} from 'material-ui/List';

let SelectableList = MakeSelectable(List);

const styles = {
  containerStyle: {
    paddingTop: '10px'
  },
  menuStyle: {
  	customWidth: {
    width: 200,
  },
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: pink900,
  },
});

// let Router = require('react-router');
// let mui = require('material-ui');
// let RouteHandler = Router.RouteHandler;
// let Colors = mui.Styles.Colors;
class Resume extends Component {
  	
  	constructor(props, context) {
    super(props, context);
    this.state = {
	    lang: "en",
		open: true,
		selectedIndex: 1,
	  };
    };

    handleToggle = () => this.setState({open: !this.state.open});

  	handleClose = () => this.setState({open: false});

  	changeLanguage = () =>
		this.setState({lang: this.state.lang === 'en' ? 'ru' : 'en'});

	handleRequestChange (event, index) {
        this.setState({
            selectedIndex: index
        });
        this.handleClose();
    };
	  

	render() {
		let menuItems = this._getMenuItems();
		let cv = this.state.lang === "en" ? "Tolkacheva Elena (CV)" : "Толкачева Елена (резюме)";
		var childrenWithLang = React.cloneElement(this.props.children, {lang: this.state.lang});
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
	        	<div style={styles.containerStyle}>
	        		<AppBar 
						title={cv}
						zDepth={4} 
						iconElementRight={<FlatButton label="eng/рус" onTouchTap={this.changeLanguage}/>}
						onLeftIconButtonTouchTap={this.handleToggle} 
						style={{position: 'fixed', top: 0}}/>
			        	{childrenWithLang}
					<Drawer 
						open={this.state.open} 
						docked={false}
						onRequestChange={(open) => this.setState({open})}>
						<SelectableList value={this.state.selectedIndex} 
										onChange={this.handleRequestChange.bind(this)}>
			          		{menuItems}
			          	</SelectableList>
			        </Drawer>
			     </div>
	        </MuiThemeProvider>

			);
	  	}

	_getMenuItems() {
	switch(this.state.lang){
		case "en": return (
			[
				<ListItem key={1} containerElement={<Link to="/shortbio" />} primaryText="Short Bio" />,
			    <ListItem key={2} containerElement={<Link to="/diplomas" />} primaryText="Diplomas & Certificates" />,
			    <ListItem key={3} containerElement={<Link to="/fullbio" />} primaryText="Jobs" />,
			        
			]
				);
		case "ru": return (
			[
				<ListItem key={1} containerElement={<Link to="/shortbio" />} primaryText="Основные сведения" />,
			    <ListItem key={2} containerElement={<Link to="/diplomas" />} primaryText="Дипломы и сертификаты" />,
			    <ListItem key={3} containerElement={<Link to="/fullbio" />} primaryText="Опыт работы" />,
			]
				);
		default:
		}
	}

}
export default Resume;